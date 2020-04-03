const argv = require('./config/yargsConfig').argv;
const colors = require('colors/safe');
const weatherService = require('./services/weatherService');

weatherService
    .getCurrentConditions(argv.city)
    .then(currentConditions => console.log(colors.green(currentConditions)))
    .catch(error => console.log(colors.red(error)));