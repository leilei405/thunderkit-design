import React, { FC, useContext } from 'react';

import classNames from 'classnames';

import { MenuContext, MenuItemProps } from './types';

const MenuItem: FC<MenuItemProps> = (props) => {
    const { index, className, disabled, style, children } = props;

    const context = useContext(MenuContext)

    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })

    const handleClick = () => {
        if (context.onSelect && !disabled) {
            context.onSelect(index)
        }
    }

    return (
        <li className={classes} style={style} onClick={handleClick}>
            { children }
        </li>
    )
}

export default MenuItem