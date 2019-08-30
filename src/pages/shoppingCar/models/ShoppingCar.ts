import * as shoppingCarService from '../services/ShoppingCar';

export interface IShoppingCarInfo {
    list: any[];
    total: number;
}

const defaultState: IShoppingCarInfo = {
    list: [],
    total: 0
};

export default {
    namespace: 'ShoppingCar_Models',
    state: { ...defaultState },
    reducers: {
        changeState(state: IShoppingCarInfo, { data }) {
            return {
                ...state,
                ...data
            };
        }
    },
    effects: {
        * fetchShoppingCarList({ data }, { call, put }) {
            const result = yield call(shoppingCarService.fetchShoppingCarList, data);
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
                pathname === '/shoppingCar' && dispatch({
                    type: 'fetchShoppingCarList',
                    data: query
                });
            });
        }
    }
};
