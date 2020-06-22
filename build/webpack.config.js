const path = require('path')
const theme = require('./../theme')
const htmlWebpackPlugins = require('html-webpack-plugin')
const TsconfigPathsPlugins = require('tsconfig-paths-webpack-plugin')

module.exports = {
    entry: {
        app: path.join(__dirname, './../', 'src/index.tsx')
    },
    output: {
        path: path.join(__dirname, './../', 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsPlugins({
                configFile: path.join(__dirname, './../', 'tsconfig.json')
            })
        ],
        alias: {
            // 设置路径别名
            '@': path.join(__dirname, './../', 'src')
        }
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
                    cacheDirectory: path.join(__dirname, './../', '.cache-loader')
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
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugins({
            template: 'public/index.html'
        })
    ]
}