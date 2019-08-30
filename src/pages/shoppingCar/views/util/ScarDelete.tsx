import React from 'react';
import { ActionSheet, Toast } from 'antd-mobile';

/**
 * 删除
 */
export const ScarDelete = (productId: number): void => {
    ActionSheet.showActionSheetWithOptions({
        maskClosable: true,
        cancelButtonIndex: 1,
        destructiveButtonIndex: 0,
        options: ['确定', '取消'],
        message: '确定要删除此商品么？'
    }, (buttonIndex: number) => {
        if (buttonIndex === 0) {
            Toast.success('删除成功');
        }
    });
};
