import { ActionSheet, Toast } from 'antd-mobile';

/**
 * 订单评价
 * @param orderId
 */
export const OrderEvaluate = (orderId: number): void => {
    ActionSheet.showActionSheetWithOptions({
        maskClosable: true,
        cancelButtonIndex: 3,
        destructiveButtonIndex: 0,
        options: ['好评', '中评', '差评', '取消'],
        message: '请选择评分'
    }, (buttonIndex: number) => {
        buttonIndex !== 3 && Toast.success('评价成功');
    });
};
