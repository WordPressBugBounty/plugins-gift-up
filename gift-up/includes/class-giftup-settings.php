<?php

class GiftUp_Settings
{
    private static $plugin;
    private static $plugin_directory;
    
    public function __construct()
    {
        self::$plugin = GiftUp()->get_plugin_basename();
        self::$plugin_directory = GiftUp()->get_plugin_basedirectory();
      
        add_action( 'init', array( __CLASS__, 'set_up_menu' ) );
    }

    /**
     * Method that is called to set up the settings menu
     *
     * @return void
     */
    public static function set_up_menu()
    {
        // Add Gift Up settings page in the menu
        add_action( 'admin_menu', array( __CLASS__, 'add_settings_menu' ) );
        
        // Add Gift Up settings page in the plugin list
        add_filter( 'plugin_action_links_' . self::$plugin, array( __CLASS__, 'add_settings_link' ) );

        // Add Gift Up notification globally
        add_action( 'admin_notices', array( __CLASS__, 'show_nag_messages' ) );
    }
    
    /**
     * Add Gift Up settings page in the menu
     *
     * @return void
     */
    public static function add_settings_menu() {
        add_options_page( 'Gift Up', 'Gift Up', 'manage_options', 'giftup-settings', array( __CLASS__, 'show_settings_page' ));
    }

    /**
     * Add Gift Up settings page in the plugin list
     *
     * @param  mixed   $links   links
     *
     * @return mixed            links
     */
    public static function add_settings_link( $links )
    {
        $settings_link = '<a href="options-general.php?page=giftup-settings">Settings</a>';
        array_unshift( $links, $settings_link );
        
        return $links;
    }
    
    /**
     * Method that is called to warn if gift up is not connected
     *
     * @return void
     */
    public static function show_nag_messages() {
        if (GiftUp()->options->get_company_id() == false) {
            echo '<div class="notice notice-warning is-dismissible" id="giftup-nag"><p>' . __( 'Please <a href="/wp-admin/options-general.php?page=giftup-settings">connect/create your Gift Up account</a> to your WordPress account to sell gift cards online' ) . '</p></div>';
        } 
        elseif (GiftUp()->options->get_woocommerce_enabled()
                && GiftUp()->options->get_woocommerce_operating_mode() == GIFTUP_WOO_MODE_DISCOUNT_COUPONS
                && GiftUp()->diagnostics->woocommerce_installed_version() != null) {
            echo '<div class="notice notice-warning is-dismissible" id="giftup-nag"><p>' . __( 'Please <a href="/wp-admin/options-general.php?page=giftup-settings">upgrade your Gift Up + WooCommerce connection</a> to improve the customer redemption experience in your cart' ) . '</p></div>';
        }

        if ( GiftUp()->api->different_roots_enabled() ) {
            echo '<div class="notice notice-warning" id="giftup-nag-2"><p>You are pointing to a different Gift Up environment.</p></div>';
        }
    }

    /**
     * Display Gift Up settings page content
     *
     * @return void
     */
    public static function show_settings_page()
    {
        if ( 'POST' == $_SERVER['REQUEST_METHOD'] ) {
            $response = self::consume_post( $_POST );

            if (null !== $response) {
                $message  = $response['message'];
                $status   = $response['status'];
            }
        }

        $giftup_dashboard_root = GiftUp()->api->dashboard_root();
        $giftup_api_key = GiftUp()->options->get_api_key();
        $giftup_company_id = GiftUp()->options->get_company_id();

        if ( $giftup_api_key ) {
            $giftup_company = GiftUp()->api->get_company();
        }

        $current_user = wp_get_current_user();
        $giftup_email_address = $current_user->user_email;

        $woocommerce_version = GiftUp()->diagnostics->woocommerce_installed_version();
        $woocommerce_activated = GiftUp()->diagnostics->is_woocommerce_activated();
        $woocommerce_installed = $woocommerce_version != null;

        if (strlen( $giftup_company_id ) > 0 && $woocommerce_installed ) {
            $woocommerce_version_compatible = version_compare( $woocommerce_version, '3.0', '>=' );
            $woocommerce_enabled = $woocommerce_version_compatible && GiftUp()->options->get_woocommerce_enabled() == true;

            $woocommerce_apply_to_shipping = GiftUp()->options->get_woocommerce_apply_to_shipping();
            $woocommerce_apply_to_taxes = GiftUp()->options->get_woocommerce_apply_to_taxes();
            
            $woocommerce_can_enable_test_mode = current_user_can('administrator');
            $woocommerce_enabled_test_mode = self::is_test_mode();
            $woocommerce_enabled_diagnostics_mode = self::is_diagnostics_on();

            if ( $woocommerce_enabled_diagnostics_mode ) {
                $instaled_plugins_list = GiftUp()->diagnostics->get_plugins_list();
            }

            $mode = GiftUp()->options->get_woocommerce_operating_mode();

            $woocommerce_connection_status = GiftUp()->api->get_woocommerce_connection_status();
            $woocommerce_is_connected = $woocommerce_connection_status != null && $woocommerce_connection_status["isConnected"] == true;
            $woocommerce_uses_api_direct = $woocommerce_is_connected && $woocommerce_connection_status["usesApiDirect"] == true;

            $woocommerce_currency = function_exists( 'get_woocommerce_currency' ) ? get_woocommerce_currency() : "unknown";
            $giftup_currency = $giftup_company["currency"];
            $woocommerce_can_enable = strtolower($woocommerce_currency) == strtolower($giftup_currency);

            $woocommerce_upgrade_required = $woocommerce_is_connected && $woocommerce_uses_api_direct == false;

            if ( $woocommerce_enabled ) {
                if ( $woocommerce_is_connected == false ) {
                    if ( GiftUp()->api->notify_connect_woocommerce() ) {
                        self::delete_woocommerce_webhook();
                        $woocommerce_upgrade_required = false;
                    }
                }
                else if ( $mode == GIFTUP_WOO_MODE_API && $woocommerce_uses_api_direct == false ) {
                    if ( GiftUp()->api->notify_connect_woocommerce() ) {
                        self::delete_woocommerce_webhook();
                        $woocommerce_upgrade_required = false;
                    }
                }
                else if ( $mode == GIFTUP_WOO_MODE_DISCOUNT_COUPONS && $woocommerce_uses_api_direct ) {
                    self::upgrade_woocommerce_operating_mode();
                    $woocommerce_upgrade_required = false;
                }
            } elseif ( $woocommerce_is_connected ) {
                GiftUp()->api->notify_disconnect_woocommerce();
            }

            if ( strtolower($woocommerce_currency) != strtolower($giftup_currency) ) {
                GiftUp()->options->set_woocommerce_enabled( false );
                $woocommerce_enabled = false;
                $woocommerce_can_enable = false;
            }

            $mode = GiftUp()->options->get_woocommerce_operating_mode();
            $woocommerce_legacy_method = $mode == GIFTUP_WOO_MODE_DISCOUNT_COUPONS;
        }

        require_once self::$plugin_directory . 'view/giftup-settings.php';
    }

    private static function is_test_mode() {
        $val = isset($_COOKIE["giftup_test_mode"]) ? $_COOKIE["giftup_test_mode"] : "live";

        if ('POST' == $_SERVER['REQUEST_METHOD'] && isset( $_POST['giftup_woocommerce_settings'] )) {
            $val = isset( $_POST['woocommerce_test_mode'] ) ? $_POST['woocommerce_test_mode'] : "live";
        }

        return $val == "test";
    }

    private static function is_diagnostics_on() {
        $val = isset($_COOKIE["giftup_diagnostics_mode"]) ? true : false;

        if ('POST' == $_SERVER['REQUEST_METHOD'] && isset( $_POST['giftup_woocommerce_settings'] )) {
            $val = isset( $_POST['woocommerce_diagnostics_mode'] ) ? true : false;
        }

        return $val;
    }

    /**
     * Routes processing of request parameters depending on the source section of the settings page
     *
     * @param  mixed   $params    array of parameters from $_POST
     *
     * @return mixed              response array from the save or send functions
     */
    private static function consume_post( $params ) {
        if ( isset( $params['giftup_api_key'] )) {
            if (!current_user_can('administrator')) {
                return array(
                    'message' => 'You need to be a WP admin to set the Gift Up API key',
                    'status' => 'error'
                );
    
                return;
            }

            if ( ! wp_verify_nonce( sanitize_text_field( wp_unslash( $params[ 'giftup_api_key_nonce' ] ) ), 'giftup_api_key' ) ) {
                return array(
                    'message' => 'We could not verify that you are in fact you when attempting to set the Gift Up API key, please try again...',
                    'status' => 'error'
                );
            }
    
            $api_key = $params['giftup_api_key'];

            if ( strlen($api_key) == 0 ) {
                GiftUp()->options->disconnect();
                
                return array(
                    'message' => 'Gift Up account disconnected',
                    'status' => 'error'
                );
            } else {
                $company = GiftUp()->api->get_company( $api_key );

                if ( NULL !== $company ) {
                    GiftUp()->options->set_api_key( $api_key );
                    GiftUp()->options->set_company_id( $company['id'] );

                    if ( GiftUp()->diagnostics->woocommerce_installed_version() != null ) {
                        GiftUp()->api->notify_connect_woocommerce();
                    }
        
                    return;
                } else {
                    return GiftUp()->diagnostics->test_curl( $api_key );
                }
            }
        }

        if ( isset( $params['giftup_update_woocommerce_operating_mode'] )) {
            if (!current_user_can('administrator')) {
                return array(
                    'message' => 'You need to be a WP admin to update Gift Up + WooCommerce settings',
                    'status' => 'error'
                );
    
                return;
            }

            if ( ! wp_verify_nonce( sanitize_text_field( wp_unslash( $params[ 'giftup_update_woocommerce_operating_mode_nonce' ] ) ), 'giftup_update_woocommerce_operating_mode' ) ) {
                return array(
                    'message' => 'We could not verify that you are in fact you when attempting to updatate the WooCommerce + Gift Up operating mode, please try again...',
                    'status' => 'error'
                );
            }
    
            self::upgrade_woocommerce_operating_mode();
        }

        if ( isset( $params['giftup_woocommerce_settings'] )) {
            if (!current_user_can('administrator')) {
                return array(
                    'message' => 'You need to be a WP admin to update Gift Up settings',
                    'status' => 'error'
                );
    
                return;
            }

            if ( ! wp_verify_nonce( sanitize_text_field( wp_unslash( $params[ 'giftup_woocommerce_settings_nonce' ] ) ), 'giftup_woocommerce_settings' ) ) {
                return array(
                    'message' => 'We could not verify that you are in fact you when attempting to updatate Gift Up settings, please try again...',
                    'status' => 'error'
                );
            }
    
            GiftUp()->options->set_woocommerce_enabled( isset($params['giftup_woocommerce_enabled']) && $params['giftup_woocommerce_enabled'] == "on" );
            GiftUp()->options->set_woocommerce_apply_to_shipping( isset($params['woocommerce_apply_to_shipping']) && $params['woocommerce_apply_to_shipping'] == "on" );
            GiftUp()->options->set_woocommerce_apply_to_taxes( isset($params['woocommerce_apply_to_taxes']) && $params['woocommerce_apply_to_taxes'] == "on" );
            
            // Drop a 1 hour cookie for test & diagnostics mode
            $val = isset($params['woocommerce_test_mode']) ? $params['woocommerce_test_mode'] : "live";
            setcookie("giftup_test_mode", $val, time()+(60*60), "/");

            if ( isset($params['woocommerce_diagnostics_mode']) && $params['woocommerce_diagnostics_mode'] == 'on' ) {
                setcookie("giftup_diagnostics_mode", "on", time()+(60*60), "/");
            } else {
                setcookie("giftup_diagnostics_mode", "", time()-1, "/");
            }
        }
    }

    public static function upgrade_woocommerce_operating_mode() {
        if ( GiftUp()->diagnostics->woocommerce_installed_version() == null ) {
            GiftUp()->api->notify_disconnect_woocommerce();
            return;
        }

        if (GiftUp()->options->get_woocommerce_operating_mode() == GIFTUP_WOO_MODEAPI) {
            return;
        }

        self::delete_all_woocommerce_giftcardcoupons();
        self::delete_woocommerce_webhook();

        GiftUp()->api->notify_connect_woocommerce();
    }

    public static function delete_woocommerce_webhook() {
        if ( GiftUp()->diagnostics->woocommerce_installed_version() == null
             || GiftUp()->diagnostics->is_woocommerce_activated() == false ) {
            return;
        }

        $args = array();

        $data_store  = WC_Data_Store::load( 'webhook' );
        $webhook_ids = $data_store->search_webhooks();

        foreach( $webhook_ids as $webhook_id ) {
            $webhook = new WC_Webhook($webhook_id);
            if ( strpos( $webhook->get_delivery_url(), 'giftup.app') > 0 ){
                $webhook->delete(true);
            }
        }
    }

    private static function delete_all_woocommerce_giftcardcoupons() {
        if ( GiftUp()->diagnostics->woocommerce_installed_version() == null
             || GiftUp()->diagnostics->is_woocommerce_activated() == false ) {
            return;
        }

        $coupons_store = WC_Data_Store::load( 'coupon' );

        $limit = 20;
        $offset = 0;
        $gift_cards = null;

        do {
            $api_response = GiftUp()->api->get_gift_cards($offset, $limit);

            if ($api_response != null) {
                $gift_cards = $api_response['giftCards'];

                if ( $api_response['total'] <= 0 )
                {
                    return;
                }

                foreach ( $gift_cards as $gift_card ) {
                    $coupon_ids = $coupons_store->get_ids_by_code($gift_card['code']);

                    foreach( $coupon_ids as $coupon_id ) {
                        $coupon = new WC_Coupon($coupon_id);
                        $coupon->delete(true);
                    }
                }

                $offset = $offset + $limit;
            }
        } while ($api_response != null && $api_response['hasMore'] == true);
    }
}
