import * as orderListService from '../services/OrderList';

export interface IOrderListInfo {
    list: any[];
    total: number;
}

const defaultState: IOrderListInfo = {
    list: [],
    total: 0
};

export default {
    namespace: 'OrderList_Models',
    state: { ...defaultState },
    reducers: {
        changeState(state: IOrderListInfo, { data }) {
            return {
                ...state,
                ...data
            };
        }
    },
    effects: {
        * fetchOrderList({ data }, { call, put }) {
            const result = yield call(orderListService.fetchOrderList, data);
            yield put({
                type: 'changeState',
                data: {
                    list: result,
                    total: 125
                }
            });
        }
    },
    subscriptions: {
        setup({ history, dispatch }) {
            return history.listen(({ pathname, query }) => {
                pathname === '/orderList' && dispatch({
                    type: 'fetchOrderList',
                    data: query
                });
            });
        }
    }
};
