const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    // devtool: 'cheap-module-source-map',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /node_modules/,
                loader: 'source-map-loader'
            },
            {
                test:/\.jsx?$/,
                include: path.resolve(__dirname,'./src'),
                loader:'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        ]
    }
};
