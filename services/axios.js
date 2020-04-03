const axios = require('axios');

const getInstance = (baseURL, headers) => {
    return axios.create({
        baseURL,
        headers
    });
};

module.exports = {
    getInstance
};