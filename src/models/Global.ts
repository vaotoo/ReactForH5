export interface IGlobalInfo {
    userName: string;
    isLogin: boolean;
}

const defaultState: IGlobalInfo = {
    userName: 'noName',
    isLogin: false
};

export default {
    namespace: 'GlobalInfoModels',
    state: { ...defaultState },
    reducers: {
        // 保存
        changeGlobalInfo(state: IGlobalInfo, { data }) {
            return {
                ...state,
                ...data
            };
        }
    },
    effects: {
        // 更改
        // * xxx({ data }, { put }) {
        //     yield put({
        //         type: 'saveGlobalInfo',
        //         data: data
        //     });
        // }
    }
};
