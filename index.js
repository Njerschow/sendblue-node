const axios = require('axios');
const url = require('url');

const config = require('./config');

module.exports = class Sendblue {
    constructor(apiKey, apiSecret, opts) {
        this._api_key = apiKey;
        this._api_secret = apiSecret;
        this._opts = opts;
    }

    async sendText(number, content, opts) {
        const response = await axios.post(url.resolve(config.sendblue_base_url, config.send_message_endpoint), {number, content, ...this.opts, ...opts}, {
            headers: {
                'sb-api-key-id': this._api_key,
                'sb-api-secret-key': this._api_secret
            }
        });

        return response.data;
    }

    async unregister(number, opts) {
        const response = await axios.post(url.resolve(config.sendblue_base_url, config.unregister_number_endpoint), {number}, {
            headers: {
                'sb-api-key-id': this._api_key,
                'sb-api-secret-key': this._api_secret
            }
        });

        return response.data;
    }
}