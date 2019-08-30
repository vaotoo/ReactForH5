import React from 'react';
import { ActionSheet, Toast } from 'antd-mobile';

/**
 * 去支付
 */
export const ScarPay = (): void => {
    ActionSheet.showActionSheetWithOptions({
        maskClosable: true,
        cancelButtonIndex: 1,
        destructiveButtonIndex: 0,
        options: ['确定', '取消'],
        title: <div>金额：￥889.56</div>,
        message: '支付前请确认金额'
    }, (buttonIndex: number) => {
        if (buttonIndex === 0) {
            Toast.success('支付成功');
        }
    });
};
