const axios = require('./axios');
const WeatherAPI = require('../constants/WeatherAPI');
const weatherService = axios.getInstance(WeatherAPI.BASE_URL, null);

const getLocation = async city => {
    const request = `${WeatherAPI.END_POINT_LOCATION}?apikey=${WeatherAPI.API_KEY}&q=${encodeURI(city)}`;
    const response = await weatherService.get(request);

    if (!response.data.length) {
        throw new Error(`No results found for ${city}`);
    }

    const data = response.data[0];
    return {
        key: data.Key,
        localizedName: data.AdministrativeArea.LocalizedName
    };
};

const getCurrentConditionsByKey = async key => {
    const request = `${WeatherAPI.END_POINT_CURRENT_CONDITIONS}/${key}?apikey=${WeatherAPI.API_KEY}`;
    const response = await weatherService.get(request);

    const data = response.data[0];
    return {
        temperature: data.Temperature.Metric.Value,
        description: data.WeatherText
    };
};

const getCurrentConditions = async city => {
    try {
        const location = await getLocation(city);
        const currentConditions = await getCurrentConditionsByKey(location.key);

        return `The current temperature of ${location.localizedName} city is ${currentConditions.temperature}º. ${currentConditions.description}.`;
    } catch (error) {
        throw new Error(`It wasn't possible to determine the current weather conditions in ${city}. \n${error}`);
    }
};

module.exports = {
    getCurrentConditions
};