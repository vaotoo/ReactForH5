import path from 'path';

process.noDeprecation = true;

const ROOT_PATH = path.resolve(__dirname, '../');
const NODE_PATH = path.resolve(ROOT_PATH, 'node_modules');
const GroupConf = (chunkName, regExpkey, isPages) => ({
    name: chunkName,
    chunks: 'async',
    test: (module) => {
        const reg = new RegExp(`\/${isPages ? 'src\/pages' : 'node_modules'}\/${regExpkey}`);
        return reg.test(module.context);
    },
    priority: 20,
    maxAsyncRequests: 10,
    maxInitialRequests: 10,
    reuseExistingChunk: true
});

export default {
    hash: true,
    outputPath: '/dist/assets/',
    publicPath: '/assets/',
    urlLoaderExcludes: [/.svg$/],
    ignoreMomentLocale: true,
    chainWebpack(config) {
        config.merge({
            optimization: {
                splitChunks: {
                    chunks: 'async',
                    minSize: 0,
                    minChunks: 1,
                    maxAsyncRequests: 10,
                    maxInitialRequests: 10,
                    cacheGroups: {
                        antd: GroupConf('antd', 'antd\/'),
                        antdm: GroupConf('antdm', 'antd-mobile'),
                        antrc: GroupConf('antrc', 'rc-.*'),
                        antrmc: GroupConf('antrmc', 'rmc-.*'),
                        draft: GroupConf('draft', 'draft-js'),
                        immutable: GroupConf('immutable', 'immutable'),
                        corePlugs: GroupConf('corePlugs', '(zrender.*|lodash.*|moment)'),
                        pages: GroupConf('pages', '[^fullScreen]', true)
                    }
                }
            },
            resolve: {
                alias: {
                    '@utils': path.resolve(ROOT_PATH, 'src/utils'),
                    '@pages': path.resolve(ROOT_PATH, 'src/pages'),
                    '@components': path.resolve(ROOT_PATH, 'src/components'),
                    '@globalModels': path.resolve(ROOT_PATH, 'src/models'),
                    '@globalServices': path.resolve(ROOT_PATH, 'src/services')
                }
            },
            module: {
                rule: {
                    'svg-oader': {
                        test: /\.svg$/,
                        use: {
                            'svg-inline-loader': {
                                loader: 'svg-inline-loader',
                                options: {
                                    removeTags: true
                                }
                            }
                        }
                    },
                    'px2rem-loader': {
                        test: /\.(less|tsx|ts)$/,
                        use: {
                            'webpack-px2rem-loader': {
                                loader: 'webpack-px2rem-loader',
                                options: {
                                    // 1rem=npx 默认为 10
                                    basePx: 100,
                                    // 只会转换大于min的px 默认为0
                                    // 因为很小的px（比如border的1px）转换为rem后在很小的设备上结果会小于1px，有的设备就会不显示
                                    min: 1,
                                    // 转换后的rem值保留的小数点后位数 默认为3
                                    floatWidth: 3
                                }
                            }
                        },
                        include: [
                            path.resolve(ROOT_PATH, 'src')
                        ],
                        exclude: [
                            NODE_PATH,
                            path.resolve(ROOT_PATH, 'src/global.less')
                        ]
                    }
                }
            }
        });
    }
};
