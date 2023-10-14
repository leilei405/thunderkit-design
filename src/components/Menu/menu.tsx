import React, { FC } from 'react';

import classNames from 'classnames';

import { MenuProps } from './types'

const Menu: FC<MenuProps> = (props) => {
    const { defaultIndex, className, mode, style, children } = props

    const classes = classNames('thunderkit-design', className, {
        'menu-vertical': mode === 'vertical'
    })
    return (
        <ul className={classes} style={style}>
            { children }
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu