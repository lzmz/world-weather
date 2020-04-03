const argv = require('yargs')
    .options({
        city: {
            alias: 'c',
            desc: 'Name of the city from which you want to obtain the current weather conditions.',
            demand: true
        }
    })
    .help().argv;

module.exports = {
    argv
};