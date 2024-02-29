/***********************************

 > 应用名称：GoodNotes6
 > 软件版本：6.0.1

 [rewrite_local]

 ^https:\/\/api\.goodnotes\.com\/accounts\/whoami url script-echo-response https://raw.githubusercontent.com/JILJEKLFI/Shark/master/GoodNotesProCrack.js

 [mitm]

 hostname=api.goodnotes.com

 ***********************************/
var whoami = {
    "active" : true,
    "issued_at" : "2023-10-15T11:56:15.764821Z",
    "id" : "346b3982-114e-42ea-a16a-d7125833a76d",
    "expires_at" : "2223-11-14T11:56:15.764821Z",
    "authenticator_assurance_level" : "aal1",
    "identity" : {
        "traits" : {
            "email" : "b4k8znnv9t@privaterelay.appleid.com",
            "last_name" : "",
            "identity_provider" : "APPLE",
            "accepted_tos" : 1692964698680,
            "first_name" : "我爱破解",
            "guid" : "4438a86c-7033-455c-ab39-65837f9aecbf"
        },
        "schema_id" : "v1",
        "id" : "f77fc589-281a-40cd-951f-cb23cec46d83",
        "state_changed_at" : "2023-08-25T11:25:02.320976Z",
        "metadata_public" : {
            "registration_client_platform" : "APPLE",
            "country" : "CHN",
            "registration_client_os" : "IOS",
            "accepted_tos" : 1692964698680,
            "is_personal_data_anonymized" : true,
            "entitlements" : {
                "apple_access" : {
                    "expires_at" : null
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
            "freemium_max_documents_gnc" : 3
        },
        "created_at" : "2023-08-25T11:25:02.323644Z",
        "updated_at" : "2023-08-25T11:25:02.323644Z",
        "schema_url" : "https://kratos.goodnotes.com/schemas/djE",
        "state" : "active"
    },
    "devices" : [
        {
            "ip_address" : "27.189.2.213",
            "id" : "925f7700-05b7-4e32-99f3-545fe9507db7",
            "user_agent" : "Mozilla/5.0 (iPad; CPU OS 17_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0.1 Mobile/15E148 Safari/604.1",
            "location" : ""
        }
    ],
    "authentication_methods" : [
        {
            "method" : "oidc",
            "aal" : "aal1",
            "completed_at" : "2023-10-15T11:56:15.764813603Z",
            "provider" : "apple"
        }
    ],
    "authenticated_at" : "2023-10-15T11:56:15.764821Z"
}

$done({
    status: "HTTP/1.1 200 OK",
    body: JSON.stringify(whoami)
});
