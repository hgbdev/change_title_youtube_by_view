const client = require("./client_secret.json");
const axios = require("axios");
const URL_GET_TOKEN = "https://accounts.google.com/o/oauth2/token";
const REFRESH_TOKEN = "Refresh Token";
const getToken = () => {
    return axios({
        method: "post",
        url: `${URL_GET_TOKEN}`,
        data: {
            grant_type: "refresh_token",
            client_id: client.installed.client_id,
            client_secret: client.installed.client_secret,
            redirect_uri: client.installed.redirect_uris[0],
            access_type: "offline",
            approval_prompt: "force",
            refresh_token: `${REFRESH_TOKEN}`
        }
    });
    
}

exports.getToken = getToken;
