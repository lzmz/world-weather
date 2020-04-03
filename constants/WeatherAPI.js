const BASE_URL = 'http://dataservice.accuweather.com';

module.exports = Object.freeze({
    API_KEY: 'IAcZJhHXQbB6LldIZ7MQKPRPhv3LG1Sa',
    END_POINT_LOCATION: `${BASE_URL}/locations/v1/cities/search`,
    END_POINT_CURRENT_CONDITIONS: `${BASE_URL}/currentconditions/v1`
});