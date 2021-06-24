const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://localhost:8080'
            }
        }
    }
};