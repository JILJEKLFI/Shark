/***********************************

 > 应用名称：GoodNotes6
 > 软件版本：6.0.1

 [rewrite_local]

 ^https:\/\/isi\.csan\.goodnotes(app)?\.com(\.cn)?\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/JILJEKLFI/Shark/master/GoodNotesRecipt.js
 ^https:\/\/isi\.csan\.goodnotes(app)?\.com(\.cn)?\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

 [mitm]

 hostname = isi.csan.goodnotes.com, isi.csan.goodnotesapp.com.cn

 ***********************************/

$done({
    body: JSON.stringify({
            "request_date_ms" : 1709170427901,
            "request_date" : "2024-02-29T01:33:47Z",
            "subscriber" : {
                "non_subscriptions" : {
                    "com.goodnotes.gn6_one_time_unlock_3999" : [
                        {
                            "is_sandbox" : false,
                            "ownership_type" : "PURCHASED",
                            "id" : "77d843abe3",
                            "original_purchase_date" : "2024-02-29T01:30:34Z",
                            "store_transaction_id" : "350001886888493",
                            "purchase_date" : "2024-02-29T01:30:34Z",
                            "store" : "app_store"
                        }
                    ],
                    "com.goodnotes.premium_7dt" : [
                        {
                            "is_sandbox" : false,
                            "ownership_type" : "PURCHASED",
                            "id" : "2d8b30e73c",
                            "original_purchase_date" : "2023-08-24T03:45:41Z",
                            "store_transaction_id" : "350001668680087",
                            "purchase_date" : "2023-08-24T03:45:41Z",
                            "store" : "app_store"
                        }
                    ]
                },
                "first_seen" : "2024-02-28T13:06:59Z",
                "original_application_version" : "2311746.364543925",
                "other_purchases" : {
                    "com.goodnotes.gn6_one_time_unlock_3999" : {
                        "purchase_date" : "2024-02-29T01:30:34Z"
                    },
                    "com.goodnotes.premium_7dt" : {
                        "purchase_date" : "2023-08-24T03:45:41Z"
                    }
                },
                "management_url" : null,
                "subscriptions" : {
                    "rc_promo_premium_weekly" : {
                        "original_purchase_date" : "2023-08-24T03:45:41Z",
                        "expires_date" : "2023-08-31T03:45:41Z",
                        "is_sandbox" : false,
                        "refunded_at" : null,
                        "store_transaction_id" : "1f1d1959b35d8d526ed4a307c655ec9a",
                        "unsubscribe_detected_at" : null,
                        "grace_period_expires_date" : null,
                        "period_type" : "normal",
                        "purchase_date" : "2023-08-24T03:45:41Z",
                        "billing_issues_detected_at" : null,
                        "store" : "promotional",
                        "auto_resume_date" : null
                    },
                    "com.goodnotes.premium_1y25off_1y_999" : {
                        "original_purchase_date" : "2023-10-15T11:48:28Z",
                        "expires_date" : "2023-10-16T20:57:37Z",
                        "is_sandbox" : false,
                        "refunded_at" : "2023-10-16T20:57:37Z",
                        "store_transaction_id" : "350001726640675",
                        "unsubscribe_detected_at" : "2024-02-28T13:19:49Z",
                        "grace_period_expires_date" : null,
                        "period_type" : "intro",
                        "purchase_date" : "2023-10-15T11:48:23Z",
                        "billing_issues_detected_at" : null,
                        "ownership_type" : "PURCHASED",
                        "store" : "app_store",
                        "auto_resume_date" : null
                    }
                },
                "entitlements" : {
                    "apple_access" : {
                        "grace_period_expires_date" : null,
                        "purchase_date" : "2024-02-29T01:30:34Z",
                        "product_identifier" : "com.goodnotes.gn6_one_time_unlock_3999",
                        "expires_date" : null
                    },
                    "premium" : {
                        "grace_period_expires_date" : null,
                        "purchase_date" : "2023-08-24T03:45:41Z",
                        "product_identifier" : "rc_promo_premium_weekly",
                        "expires_date" : "2023-08-31T03:45:41Z"
                    },
                    "crossplatform_access" : {
                        "grace_period_expires_date" : null,
                        "purchase_date" : "2023-10-15T11:48:23Z",
                        "product_identifier" : "com.goodnotes.premium_1y25off_1y_999",
                        "expires_date" : "2023-10-16T20:57:37Z"
                    }
                },
                "original_purchase_date" : "2023-08-28T16:08:01Z",
                "original_app_user_id" : "92862a49-59f3-49ce-a148-116800ce5976",
                "last_seen" : "2024-02-28T13:19:51Z"
            }
        }
    )
});
