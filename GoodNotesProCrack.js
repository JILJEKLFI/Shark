/***********************************

 > 应用名称：GoodNotes6
 > 软件版本：6.0.1

 [rewrite_local]

 ^https:\/\/isi\.csan\.goodnotes\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://github.com/ddgksf2013/MoYu/raw/master/GoodNotesProCrack.js
 ^https:\/\/isi\.csan\.goodnotes\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

 [mitm]

 hostname=isi.csan.goodnotes.com

 ***********************************/
var res = JSON.parse($response.body);
console.log(res);
res.subscriber.non_subscriptions = {
    "com.goodnotes6.one_time_unlock": [
        {
            "is_sandbox": false,
            "ownership_type": "PURCHASED",
            "id": "46ab585dbc",
            "original_purchase_date": "2022-11-10T23:58:09Z",
            "store_transaction_id": "300001271068792",
            "purchase_date": "2023-08-10T23:58:09Z",
            "store": "app_store"
        }
    ]
}
res.subscriber.other_purchases = {
    "com.goodnotes6.one_time_unlock": {
        "purchase_date": "2023-08-10T23:58:09Z"
    }
}
res.subscriber.entitlements.premium = {
    "grace_period_expires_date": null,
    "purchase_date": "2023-08-24T03:45:41Z",
    "product_identifier": "com.goodnotes6.one_time_unlock",
    "expires_date": null
}
res.subscriber.entitlements.apple_access = {
    "grace_period_expires_date": null,
    "purchase_date": "2023-08-10T14:16:41Z",
    "product_identifier": "com.goodnotes6.one_time_unlock",
    "expires_date": null
}
$done({body: JSON.stringify(ddgksf2013)});
