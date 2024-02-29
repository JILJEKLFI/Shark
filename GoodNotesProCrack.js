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
            "accepted_tos" : 1709125636583,
            "first_name" : "b4k8znnv9t",
            "guid" : "92862a49-59f3-49ce-a148-116800ce5976"
        },
        "schema_id" : "v1",
        "id" : "be7da5fd-c2d1-4897-9ce5-0fccd3e60a25",
        "state_changed_at" : "2024-02-28T13:06:54.839835Z",
        "metadata_public" : {
            "is_email_fake" : false,
            "received_welcome_email" : 1709125615394,
            "country" : "USA",
            "registration_client_os" : "IOS",
            "registration_client_platform" : "APPLE",
            "accepted_tos" : 1709125636583,
            "is_personal_data_anonymized" : true,
            "entitlements" : {
                "apple_access" : {
                    "expires_at" : null
                },
                "premium" : {
                    "expires_at" : 1693453541000
                },
                "crossplatform_access" : {
                    "expires_at" : 1697489857000
                }
            },
            "guid" : "92862a49-59f3-49ce-a148-116800ce5976",
            "identity_provider" : "APPLE",
            "freemium_max_documents_gnc" : 3
        },
        "created_at" : "2024-02-28T13:06:54.850346Z",
        "updated_at" : "2024-02-28T13:06:54.850346Z",
        "schema_url" : "https://kratos.goodnotes.com/schemas/djE",
        "state" : "active"
    },
    "devices" : [
        {
            "ip_address" : "27.189.3.7",
            "id" : "5bbb6bd9-a381-4660-b704-7065e187523b",
            "user_agent" : "Mozilla/5.0 (iPad; CPU OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Mobile/15E148 Safari/604.1",
            "location" : ""
        }
    ],
    "authentication_methods" : [
        {
            "method" : "oidc",
            "aal" : "aal1",
            "completed_at" : "2024-02-29T01:33:28.471491022Z",
            "provider" : "apple"
        }
    ],
    "authenticated_at" : "2024-02-29T01:33:28.471494Z"
}

$done({
    status: "HTTP/1.1 200 OK",
    body: JSON.stringify(whoami)
});
