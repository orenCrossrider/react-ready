switch(process.env.NODE_ENV) {
case 'production': 
    module.exports = require('./production');
    break;
case 'integration': 
    module.exports = require('./integration');
    break;
default:
    module.exports = require('./development');
}
