import Request from '@utils/Request';

export function fetchShoppingCarList({ page = 1 }) {
    return Request.get('/api/orderList', {
        params: {
            page: page,
            limit: 5
        }
    });
}
