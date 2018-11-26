
const axios = require('../../node_modules/axios');
const fs = require('fs');

function create() {
    const url = 'https://sandbox.api.visa.com/merchantlocator/v1/locator';
    const config = {
        method: 'post',
        key: fs.readFileSync(keyFile),
        cert: fs.readFileSync(certificateFile),
        ca: fs.readFileSync(caFile),
        headers: {
            Accept: "application/json",
            Authorization: "Basic " + new Buffer("7E5WFBGZF1KSNKMNE5EW21_G3ATvxyfTh_fZlMr93JnihcNFU:Y6O9FCEmFkX58kSN6JEe").toString('base64')
        }
    };
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler);
}

const responseSuccessHandler = response => {
    return response;
};

const responseErrorHandler = error => {
    console.log(error);
    if (error && error.response && error.response.data && error.response.data.errors) {
      console.error(error.response.data.errors);
    }
    return Promise.reject(error);
  }

module.exports = { create };