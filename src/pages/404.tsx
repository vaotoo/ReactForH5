import React from 'react';
import Icon from '@components/icon/Icon';
import style from './Index.less';

class ErrorComponent extends React.Component {
    public render(): React.ReactNode {
        return (
            <div className={style.errorContent}>
                <div className={style.errorMsg}>
                    <Icon type="icon_details" className={style.errorIcon} />
                    很抱歉，您的访问异常了，请稍后重试~
                </div>
            </div>
        );
    }
}

export default ErrorComponent;
