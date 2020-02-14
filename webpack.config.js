const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")


module.exports = (argv = {}) => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: argv.mode === "development"
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: argv.mode !== "production",
                            modules: {
                                mode: "local",
                                localIdentName:
                                    argv.mode === "production"
                                        ? "[hash:base64]"
                                        : "[local]_[hash:base64:5]"
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: argv.mode !== "production",
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:
                argv.mode === "development" ? "[name].css" : "[name].[hash].css",
            chunkFilename:
                argv.mode === "development" ? "[id].css" : "[id].[hash].css"
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        })
    ],
    resolve: {
        extensions: [".js"],
        alias: {
            actions: path.resolve(__dirname, "./src/actions/"),
            reducers: path.resolve(__dirname, "./src/reducers/"),
            translations: path.resolve(__dirname, "./src/translations/"),
        }
    },
    devServer: {
        publicPath: "/",
        port: 3000
    }
})
