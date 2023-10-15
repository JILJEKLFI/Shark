$done({
    status: "HTTP/1.1 400 Bad Request", body: {
        "message": "There is already another active subscriber using the same receipt.",
        "code": 7102
    }
});