/***********************************

 > 应用名称：GoodNotes6
 > 软件版本：6.0.1

 [rewrite_local]

 ^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/JILJEKLFI/Shark/master/GoodNotesProCrack.js
 ^https:\/\/isi\.csan\.goodnotes\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

 [mitm]

 hostname=isi.csan.goodnotes.com

 ***********************************/

$done({
    body: JSON.stringify({
            "request_date_ms" : 1697339620770,
            "request_date" : "2023-10-15T03:13:40Z",
            "subscriber" : {
                "non_subscriptions" : {

                },
                "first_seen" : "2023-10-09T05:28:35Z",
                "original_application_version" : "497354.482413658",
                "other_purchases" : {

                },
                "management_url" : "https://apps.apple.com/account/subscriptions",
                "subscriptions" : {
                    "rc_promo_gn5_lifetime" : {
                        "original_purchase_date" : "2020-03-13T02:54:43Z",
                        "expires_date" : "2220-01-25T02:54:43Z",
                        "is_sandbox" : false,
                        "refunded_at" : null,
                        "store_transaction_id" : "cb5ad22a3c4a0885bcdce8cdf6febe77",
                        "unsubscribe_detected_at" : null,
                        "grace_period_expires_date" : null,
                        "period_type" : "normal",
                        "purchase_date" : "2020-03-13T02:54:43Z",
                        "billing_issues_detected_at" : null,
                        "store" : "promotional",
                        "auto_resume_date" : null
                    },
                    "com.goodnotes.gn6_one_time_unlock_3749" : {
                        "original_purchase_date" : "2023-10-10T07:09:29Z",
                        "expires_date" : "2222-10-17T07:09:28Z",
                        "is_sandbox" : false,
                        "refunded_at" : null,
                        "store_transaction_id" : "300001271068792",
                        "unsubscribe_detected_at" : null,
                        "grace_period_expires_date" : null,
                        "period_type" : "normal",
                        "purchase_date" : "2023-10-10T07:09:28Z",
                        "billing_issues_detected_at" : null,
                        "ownership_type" : "PURCHASED",
                        "store" : "app_store",
                        "auto_resume_date" : null
                    }
                },
                "entitlements" : {
                    "apple_access" : {
                        "grace_period_expires_date" : null,
                        "purchase_date" : "2023-10-10T07:09:28Z",
                        "product_identifier" : "com.goodnotes.gn6_one_time_unlock_3749",
                        "expires_date" : "2222-10-17T07:09:28Z"
                    },
                    "gn5" : {
                        "grace_period_expires_date" : null,
                        "purchase_date" : "2020-03-13T02:54:43Z",
                        "product_identifier" : "rc_promo_gn5_lifetime",
                        "expires_date" : "2220-01-25T02:54:43Z"
                    },
                    "crossplatform_access" : {
                        "grace_period_expires_date" : null,
                        "purchase_date" : "2023-10-10T07:09:28Z",
                        "product_identifier" : "com.goodnotes.gn6_one_time_unlock_3749",
                        "expires_date" : "2222-10-17T07:09:28Z"
                    }
                },
                "original_purchase_date" : "2020-03-13T02:54:43Z",
                "original_app_user_id" : "1d6316b8-aab7-4c1f-9dee-df471814b03e",
                "last_seen" : "2023-10-15T00:05:54Z"
            }
        }
    )
});
