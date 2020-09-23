const path = require('path')
const webpack = require('webpack')
const theme = require('./theme')
const htmlWebpackPlugins = require('html-webpack-plugin')
const TsconfigPathsPlugins = require('tsconfig-paths-webpack-plugin')
const TsImportPlugin = require('ts-import-plugin')
// console.log("path.resolve(__dirname, './src/styles')", path.resolve(__dirname, './src/styles'))

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'src/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js',
        filename: '[name].js'
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsPlugins({
                configFile: path.resolve(__dirname, 'tsconfig.json')
            })
        ],
        // 作用同上
        // alias: {
        //     // 设置路径别名
        //     '@': path.resolve(__dirname, './src')
        // }
    },
    devServer: {
        hot: true,
        port: 8080,
    },
    module: {
        rules:[
            {
                test: /\.ts(x?)$/,
                // exclude: /node_modules/,
                loader: "awesome-typescript-loader",
                options: {
                    // 使用缓存
                    useCache: true,
                    cacheDirectory: path.join(__dirname, './../', '.cache-loader'),
                    getCustomTransformers: () => ({
                        brfore: [
                            TsImportPlugin({
                                libraryName: 'antd',
                                libraryDirectory: 'lib',
                                style: true            // 'css' | true ---> 选择less文件 ，否则为css文件
                            })
                        ]
                    })
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                // 只针对非src下的.scss文件进行编译
                // include: [path.join(__dirname, './../', 'src')],
                loader: [
                    'style-loader', 
                    {
                        loader: 'cache-loader',
                        options: {
                            cacheDirectory: path.join(__dirname, './../', '.cache-loader')
                        }
                    },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            // 是否有使用css modules
                            modules: true,
                            // 类名导出
                            namedExport: true,
                            // 支持驼峰
                            camelCase: true,
                            // 是否使用sass
                            sass: true
                        }
                    }, 
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve(__dirname, './src/styles')]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: theme
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugins({
            template: 'public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}