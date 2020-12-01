const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/js/app.ts',
    output: {
        path: path.resolve(__dirname, 'static/js'),
        filename: 'chat.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']

    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
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
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: "style-loader",
                  },
                  {
                    loader: "css-loader",
                  },
                  {
                    loader: "less-loader",
                    options: {
                      lessOptions: {
                        paths: [path.resolve(__dirname, "node_modules")],
                      },
                    },
                  },
                ]
            },
        ]
    }
};
