import { ActionSheet, Toast } from 'antd-mobile';

/**
 * 删除订单
 * @param orderId
 */
export const OrderDelete = (orderId: number): void => {
    ActionSheet.showActionSheetWithOptions({
        maskClosable: true,
        cancelButtonIndex: 1,
        destructiveButtonIndex: 0,
        options: ['确定删除', '取消'],
        message: '删除后将无法恢复'
    }, (buttonIndex: number) => {
        if (buttonIndex === 0) {
            Toast.success('删除成功');
        }
    });
};
