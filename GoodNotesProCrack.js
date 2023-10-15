/***********************************

 > 应用名称：GoodNotes6
 > 软件版本：6.0.1

 [rewrite_local]

 ^https:\/\/api\.goodnotes\.com\/accounts\/whoami url script-response-body https://raw.githubusercontent.com/JILJEKLFI/Shark/master/GoodNotesProCrack.js

 [mitm]

 hostname=api.goodnotes.com

 ***********************************/

$done({
    body: JSON.stringify({
        "active" : true,
        "issued_at" : "2023-10-15T03:04:02.010859Z",
        "id" : "ac60b11e-3156-43b6-8f78-2d1704095160",
        "expires_at" : "2223-11-14T03:04:02.010859Z",
        "authenticator_assurance_level" : "aal1",
        "identity" : {
            "traits" : {
                "email" : "note2622@outlook.com",
                "last_name" : "",
                "identity_provider" : "MICROSOFT",
                "accepted_tos" : 1696830434292,
                "first_name" : "逢考必过",
                "guid" : "5a1cf8b3-5d48-4418-826b-0530e55f47a4"
            },
            "schema_id" : "v1",
            "id" : "7e818cf7-1413-4117-98b7-a7a5c581d6c6",
            "state_changed_at" : "2023-10-09T05:28:31.856672Z",
            "metadata_public" : {
                "is_email_fake" : false,
                "registration_client_platform" : "APPLE",
                "country" : "USA",
                "registration_client_os" : "IOS",
                "accepted_tos" : 1696830434292,
                "is_personal_data_anonymized" : false,
                "entitlements" : {
                    "apple_access" : {
                        "expires_at" : 7891268083000
                    },
                    "gn5" : {
                        "expires_at" : 7891268083000
                    },
                    "crossplatform_access" : {
                        "expires_at" : 7891268083000
                    }
                },
                "guid" : "5a1cf8b3-5d48-4418-826b-0530e55f47a4",
                "identity_provider" : "MICROSOFT",
                "freemium_max_documents_gnc" : 3
            },
            "created_at" : "2023-10-09T05:28:31.859693Z",
            "updated_at" : "2023-10-09T05:28:31.859693Z",
            "schema_url" : "https://kratos.goodnotes.com/schemas/djE",
            "state" : "active"
        },
        "devices" : [
            {
                "ip_address" : "103.212.34.113",
                "id" : "4aa1fc48-b686-4540-aafd-4088bce89c9b",
                "user_agent" : "Mozilla/5.0 (iPad; CPU OS 17_0_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0.1 Mobile/15E148 Safari/604.1",
                "location" : ""
            }
        ],
        "authentication_methods" : [
            {
                "method" : "oidc",
                "aal" : "aal1",
                "completed_at" : "2023-10-15T03:04:02.010853334Z",
                "provider" : "microsoft"
            }
        ],
        "authenticated_at" : "2023-10-15T03:04:02.010859Z"
    })
});
