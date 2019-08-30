import { Toast } from 'antd-mobile';

/**
 * 再次购买
 * @param orderId
 */
export const OrderRebuy = (orderId: number): void => {
    Toast.success('已加入到购物车');
};
