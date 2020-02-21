const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: "@import '@/assets/styles/main.scss';",
                sassOptions: {
                    includePaths: [path.resolve(__dirname, "node_modules")]
                }
            }
        },
        sourceMap: true,
    }
};