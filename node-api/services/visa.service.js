
const axios = require('../../node_modules/axios');
const https = require('https');
const fs = require('fs');

function create(data) {
    let userId = '7E5WFBGZF1KSNKMNE5EW21_G3ATvxyfTh_fZlMr93JnihcNFU'
    let password = 'Y6O9FCEmFkX58kSN6JEe'
    const url = 'https://sandbox.api.visa.com/merchantlocator/v1/locator';
    // const config = {
    //     data: data,
    //     method: 'post',
    //     key: fs.readFileSync('./certs/key.pem'),
    //     cert: fs.readFileSync('./certs/cert.pem'),
    //     ca: fs.readFileSync('./certs/DigiCertGlobalRootCA.crt'),
    //     headers: {
    //         'Content-Type' : 'application/json',
    //         'Accept' : 'application/json',
    //         'Authorization': "Basic " + new Buffer(userId + ':' + password).toString('base64')
    //     }
    // };
    const httpsAgent = new https.Agent({
        data: data,
        method: 'post',
        key: fs.readFileSync('./certs/key_1251d43b-24c9-4ff0-8117-88f7978e8df4.pem'),
        cert: fs.readFileSync('./certs/cert.pem'),
        ca: [ fs.readFileSync('./certs/VDPCA-SBX.pem'), fs.readFileSync("./certs/DigiCertGlobalRootCA.crt") ],
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization': "Basic " + new Buffer("7E5WFBGZF1KSNKMNE5EW21_G3ATvxyfTh_fZlMr93JnihcNFU:Y6O9FCEmFkX58kSN6JEe").toString('base64')
        }
      })
    return axios(url, { httpsAgent })
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