import React from 'react';
import style from './Info.less';

interface IInfoProps { }

interface IInfoState { }

class IconComponent extends React.Component<IInfoProps, IInfoState> {
    constructor(props: IInfoProps, context?: any) {
        super(props, context);
    }

    public render(): React.ReactNode {
        return (
            <div className={style.infoContent}>
                <div className={style.content}>
                    <div className={style.photo} />
                    <div className={style.detail}>
                        <div>188****9898</div>
                        <div>性别：男</div>
                        <div>昵称：-</div>
                    </div>
                </div>
                <div className={style.layer} />
            </div>
        );
    }
}

export default IconComponent;
