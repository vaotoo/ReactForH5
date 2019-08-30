export default {
    proxy: {
        '/api': {
            'target': 'http://110.119.120.10/',
            'changeOrigin': true,
            'pathRewrite': {
                '^/api': ''
            }
        }
    }
};