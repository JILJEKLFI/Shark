/***********************************

 > 应用名称：GoodNotes6
 > 软件版本：6.0.1

 [rewrite_local]

 ^https:\/\/api\.goodnotes\.com\/accounts\/whoami url script-response-body https://raw.githubusercontent.com/JILJEKLFI/Shark/master/GoodNotesProCrack.js
 ^https:\/\/isi\.csan\.goodnotes\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

 [mitm]

 hostname=api.goodnotes.com

 ***********************************/

$done({
    body: JSON.stringify({
        "active" : true,
        "issued_at" : "2023-08-29T09:01:35.028865Z",
        "id" : "4142b2e3-9b99-402c-8979-e9d11aca8c6f",
        "expires_at" : "2221-11-17T21:41:52.690364Z",
        "authenticator_assurance_level" : "aal1",
        "identity" : {
            "traits" : {
                "email" : "b4k8znnv9t@privaterelay.appleid.com",
                "last_name" : "",
                "identity_provider" : "APPLE",
                "accepted_tos" : 1692964698680,
                "first_name" : "b4k8znnv9t",
                "guid" : "4438a86c-7033-455c-ab39-65837f9aecbf"
            },
            "schema_id" : "v1",
            "id" : "f77fc589-281a-40cd-951f-cb23cec46d83",
            "state_changed_at" : "2023-08-25T11:25:02.320976Z",
            "metadata_public" : {
                "registration_client_platform" : "APPLE",
                "registration_client_os" : "IOS",
                "accepted_tos" : 1692964698680,
                "is_personal_data_anonymized" : false,
                "entitlements" : {
                    "apple_access" : {
                        "expires_at" : 7948503712000
                    },
                    "gn5" : {
                        "expires_at" : 7948503712000
                    },
                    "crossplatform_access" : {
                        "expires_at" : 7948503712000
                    },
                    "premium" : {
                        "expires_at" : 7948503712000
                    }
                },
                "guid" : "4438a86c-7033-455c-ab39-65837f9aecbf",
                "identity_provider" : "APPLE",
            },
            "created_at" : "2023-08-25T11:25:02.323644Z",
            "updated_at" : "2023-08-25T11:25:02.323644Z",
            "schema_url" : "https://kratos.goodnotes.com/schemas/djE",
            "state" : "active"
        },
        "devices" : [
            {
                "ip_address" : "27.189.6.71",
                "id" : "f2db1799-39e5-4d8c-ab8f-4ea64d393f91",
                "user_agent" : "Mozilla/5.0 (iPad; CPU OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
                "location" : ""
            }
        ],
        "authentication_methods" : [
            {
                "aal" : "aal1",
                "method" : "oidc",
                "completed_at" : "2023-08-29T09:01:35.028862842Z"
            }
        ],
        "authenticated_at" : "2023-08-29T09:01:35.028865Z"
    })
});
