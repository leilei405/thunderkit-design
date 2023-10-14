import React, { FC } from 'react';

import classNames from 'classnames';

import { MenuItemProps } from './types';

const MenuItem: FC<MenuItemProps> = (props) => {
    const { index, className, disabled, style, children } = props;
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
    })
    return (
        <li className={classes} style={style}>
            { children }
        </li>
    )
}

export default MenuItem