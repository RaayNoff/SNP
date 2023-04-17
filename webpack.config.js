/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

// PLUGINS
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const PugPlugin = require('pug-plugin');

// WEBPACK SETUP
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './views/pages/auth/auth.pug',
        home: './views/pages/home/home.pug',
        // account: './views/pages/account/account.pug',
        trainings: './views/pages/trainings/trainings.pug',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash:16].js',
        assetModuleFilename: path.join('assets', '[name].[contenthash][ext]'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, '/config/'],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'css-loader',
                    'postcss-loader',
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('icons', '[name].[contenthash][ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /.pug$/,
                use: [PugPlugin.loader], // Pug loader
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public'),
                    to: path.resolve(__dirname, 'dist/public'),
                    globOptions: {
                        ignore: ['**/fonts/**', '**/images/**'],
                    },
                },
            ],
        }),
        new ESLintPlugin({
            context: path.resolve(__dirname, 'src'),
            fix: false,
        }),
        new PugPlugin({
            css: {
                // output filename of styles
                filename: 'css/[name].[contenthash:8].css',
            },
        }),
    ],
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
        hot: true,
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            ['svgo', { name: 'preset-default' }],
                        ],
                    },
                },
            }),
        ],
    },
    resolve: {
        alias: {
            fonts: path.resolve(__dirname, 'public', 'fonts'),
            images: path.resolve(__dirname, 'public', 'images'),
            icons: path.resolve(__dirname, 'src', 'icons'),
            mixins: path.resolve(__dirname, 'src', 'views', 'mixins'),
            pages: path.resolve(__dirname, 'src', 'views', 'pages'),
            views: path.resolve(__dirname, 'src', 'views'),
            components: path.resolve(__dirname, 'src', 'views', 'components'),
            style: path.resolve(__dirname, 'src', 'style'),
            source: path.resolve(__dirname, 'src'),
        },
    },
};
