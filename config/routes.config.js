import baseRoutes from './routes/base';

export default {
    routes: [{
        path: '/',
        component: '../layouts/index',
        routes: [
            ...baseRoutes
        ]
    }]
}