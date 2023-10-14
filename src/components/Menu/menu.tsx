import React, { FC, useState } from 'react';

import classNames from 'classnames';

import { MenuProps, IMenuContext, MenuContext } from './types'

const Menu: FC<MenuProps> = (props) => {
    const { defaultIndex, className, mode, style, children, onSelect } = props

    const [currentActive, setCurrentActive] = useState(defaultIndex) // 当前点击的Menu

    // 获取当前点击的Index
    const handleClick = (index: number) => {
        setCurrentActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }

    const classes = classNames('thunderkit-design-menu', className, {
        'menu-vertical': mode === 'vertical'
    })

    const passedContext: IMenuContext = {
        index:  currentActive || 0,
        onSelect: handleClick,
    }
    
    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                { children }
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu