/***********************************

 > 应用名称：GoodNotes6
 > 软件版本：6.0.1

 [rewrite_local]

 ^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/JILJEKLFI/Shark/master/GoodNotesRecipt.js
 ^https:\/\/isi\.csan\.goodnotes\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

 [mitm]

 hostname=isi.csan.goodnotes.com

 ***********************************/

$done({
    status: "HTTP/1.1 200 OK",
    body: JSON.stringify({
            "request_date_ms": 1697370985119,
            "request_date": "2023-10-15T11:56:25Z",
            "subscriber": {
                "non_subscriptions": {
                    "com.goodnotes.premium_7dt": [
                        {
                            "is_sandbox": false,
                            "ownership_type": "PURCHASED",
                            "id": "c3f10caf05",
                            "original_purchase_date": "2023-08-24T03:45:41Z",
                            "store_transaction_id": "350001668680087",
                            "purchase_date": "2023-08-24T03:45:41Z",
                            "store": "app_store"
                        }
                    ]
                },
                "first_seen": "2023-08-25T11:25:05Z",
                "original_application_version": "1442266.462619634",
                "other_purchases": {
                    "com.goodnotes.premium_7dt": {
                        "purchase_date": "2023-08-24T03:45:41Z"
                    }
                },
                "management_url": "https://apps.apple.com/account/subscriptions",
                "subscriptions": {
                    "com.goodnotes.gn6_one_time_unlock_3749": {
                        "original_purchase_date": "2023-10-16T11:48:28Z",
                        "expires_date": "2224-10-15T11:48:23Z",
                        "is_sandbox": false,
                        "refunded_at": null,
                        "store_transaction_id": "350001726640675",
                        "unsubscribe_detected_at": null,
                        "grace_period_expires_date": null,
                        "period_type": "intro",
                        "purchase_date": "2023-10-16T11:48:23Z",
                        "billing_issues_detected_at": null,
                        "ownership_type": "PURCHASED",
                        "store": "app_store",
                        "auto_resume_date": null
                    },
                    "rc_promo_crossplatform_access_weekly": {
                        "original_purchase_date": "2023-08-24T03:45:41Z",
                        "expires_date": "2023-08-31T03:45:41Z",
                        "is_sandbox": false,
                        "refunded_at": null,
                        "store_transaction_id": "b2cd2ee1ff7394e52a090b2bf4e22b32",
                        "unsubscribe_detected_at": null,
                        "grace_period_expires_date": null,
                        "period_type": "normal",
                        "purchase_date": "2023-08-24T03:45:41Z",
                        "billing_issues_detected_at": null,
                        "store": "promotional",
                        "auto_resume_date": null
                    },
                    "rc_promo_gn5_lifetime": {
                        "original_purchase_date": "2022-01-04T13:41:52Z",
                        "expires_date": "2221-11-17T13:41:52Z",
                        "is_sandbox": false,
                        "refunded_at": null,
                        "store_transaction_id": "67c084dfcc73d94f22c175d1606a8a81",
                        "unsubscribe_detected_at": null,
                        "grace_period_expires_date": null,
                        "period_type": "normal",
                        "purchase_date": "2022-01-04T13:41:52Z",
                        "billing_issues_detected_at": null,
                        "store": "promotional",
                        "auto_resume_date": null
                    },
                    "rc_promo_apple_access_weekly": {
                        "original_purchase_date": "2023-08-24T03:45:41Z",
                        "expires_date": "2023-08-31T03:45:41Z",
                        "is_sandbox": false,
                        "refunded_at": null,
                        "store_transaction_id": "3bfdea00dc3bd229e024321c7b145dab",
                        "unsubscribe_detected_at": null,
                        "grace_period_expires_date": null,
                        "period_type": "normal",
                        "purchase_date": "2023-08-24T03:45:41Z",
                        "billing_issues_detected_at": null,
                        "store": "promotional",
                        "auto_resume_date": null
                    },
                    "rc_promo_premium_weekly": {
                        "original_purchase_date": "2023-08-24T03:45:41Z",
                        "expires_date": "2023-08-31T03:45:41Z",
                        "is_sandbox": false,
                        "refunded_at": null,
                        "store_transaction_id": "3744b2789273b019c49cf75f24e7f4e4",
                        "unsubscribe_detected_at": null,
                        "grace_period_expires_date": null,
                        "period_type": "normal",
                        "purchase_date": "2023-08-24T03:45:41Z",
                        "billing_issues_detected_at": null,
                        "store": "promotional",
                        "auto_resume_date": null
                    }
                },
                "entitlements": {
                    "apple_access": {
                        "grace_period_expires_date": null,
                        "purchase_date": "2024-10-15T11:48:23Z",
                        "product_identifier": "com.goodnotes.gn6_one_time_unlock_3749",
                        "expires_date": "2224-10-15T11:48:23Z"
                    },
                    "gn5": {
                        "grace_period_expires_date": null,
                        "purchase_date": "2022-01-04T13:41:52Z",
                        "product_identifier": "rc_promo_gn5_lifetime",
                        "expires_date": "2221-11-17T13:41:52Z"
                    },
                    "crossplatform_access": {
                        "grace_period_expires_date": null,
                        "purchase_date": "2023-10-15T11:48:23Z",
                        "product_identifier": "com.goodnotes.gn6_one_time_unlock_3749",
                        "expires_date": "2224-10-15T11:48:23Z"
                    },
                    "premium": {
                        "grace_period_expires_date": null,
                        "purchase_date": "2023-08-24T03:45:41Z",
                        "product_identifier": "rc_promo_premium_weekly",
                        "expires_date": "2023-08-31T03:45:41Z"
                    }
                },
                "original_purchase_date": "2022-01-04T13:41:52Z",
                "original_app_user_id": "4438a86c-7033-455c-ab39-65837f9aecbf",
                "last_seen": "2023-10-15T01:54:14Z"
            }
        }
    )
});
