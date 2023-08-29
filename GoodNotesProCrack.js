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
        "request_date_ms": 1693285507211,
        "request_date": "2023-08-29T05:05:07Z",
        "subscriber": {
            "non_subscriptions": {
                "com.goodnotes6.one_time_unlock": [
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
                "com.goodnotes6.one_time_unlock": {
                    "purchase_date": "2023-08-24T03:45:41Z"
                }
            },
            "management_url": null,
            "subscriptions": {},
            "entitlements": {
                "apple_access": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2023-08-24T03:45:41Z",
                    "product_identifier": "com.goodnotes6.one_time_unlock",
                    "expires_date": null
                },
                "gn5": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2022-01-04T13:41:52Z",
                    "product_identifier": "rc_promo_gn5_lifetime",
                    "expires_date": "2221-11-17T13:41:52Z"
                },
                "crossplatform_access": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2023-08-24T03:45:41Z",
                    "product_identifier": "com.goodnotes6.one_time_unlock",
                    "expires_date": null,
                    "Warning": "解锁"
                },
                "premium": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2023-08-24T03:45:41Z",
                    "product_identifier": "com.goodnotes6.one_time_unlock",
                    "expires_date": null,
                    "Warning": "解锁"
                }
            },
            "original_purchase_date": "2022-01-04T13:41:52Z",
            "original_app_user_id": "4438a86c-7033-455c-ab39-65837f9aecbf",
            "last_seen": "2023-08-29T04:56:37Z"
        }
    })
});
