import router from 'umi/router';
import { ActionSheet, Toast } from 'antd-mobile';

/**
 * 退出账号
 */
export const ExitLogin = (): void => {
    ActionSheet.showActionSheetWithOptions({
        maskClosable: true,
        cancelButtonIndex: 1,
        destructiveButtonIndex: 0,
        options: ['确定退出', '取消'],
        message: '确定要退出当前账号吗？'
    }, (buttonIndex: number) => {
        if (buttonIndex === 0) {
            Toast.success('退出成功');
            router.push('/login');
        }
    });
};
