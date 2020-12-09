const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'js/chat.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Custom chat',
        template: './src/app_template.html',
        publicPath:"/"
      }) ],
    resolve: {
        extensions: ['.ts', '.js', '.json'],

        alias: {
          api: path.resolve(__dirname,'./src/api/'),
          components: path.resolve(__dirname,'./src/components'),
          default: path.resolve(__dirname,'./src/default'),
          services: path.resolve(__dirname,'./src/services'),
          stores: path.resolve(__dirname,'./src/stores'),
          utils: path.resolve(__dirname,'./src/utils'),
          widgets: path.resolve(__dirname,'./src/widgets')

        }

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
