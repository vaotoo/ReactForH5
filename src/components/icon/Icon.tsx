import React from 'react';
import style from './Icon.less';

interface IIconProps {
    type: string;
    className?: string;
    style?: React.CSSProperties;
}

interface IIconState { }

class IconComponent extends React.Component<IIconProps, IIconState> {
    constructor(props: IIconProps, context?: any) {
        super(props, context);
    }

    public render(): React.ReactNode {
        return (
            <i
                style={this.props.style}
                className={[
                    this.props.className || '',
                    style.icon,
                    'iconfont',
                    this.props.type || ''
                ].join(' ')}
            >
                {this.props.children}
            </i>
        );
    }
}

export default IconComponent;
