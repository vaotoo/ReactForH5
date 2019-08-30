import { ActionSheet, Toast } from 'antd-mobile';

/**
 * 清空
 */
export const ScarClean = (): void => {
    ActionSheet.showActionSheetWithOptions({
        maskClosable: true,
        cancelButtonIndex: 1,
        destructiveButtonIndex: 0,
        options: ['确定', '取消'],
        message: '清空将删除购物车中所有商品'
    }, (buttonIndex: number) => {
        if (buttonIndex === 0) {
            Toast.success('清空成功');
        }
    });
};
