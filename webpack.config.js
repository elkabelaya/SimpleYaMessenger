const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'chat.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
                exclude: /(node_modules)/
            }
        ]
    }
};
