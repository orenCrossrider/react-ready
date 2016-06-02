if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'integration') {
    module.exports = require('./configure_store.prod');
} else {
    module.exports = require('./configure_store.dev');
}
