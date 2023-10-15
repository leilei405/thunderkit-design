import React, { FC, useState, Children, FunctionComponentElement, cloneElement } from 'react';

import classNames from 'classnames';

import { MenuProps, IMenuContext, MenuContext, MenuItemProps } from './types'

const Menu: FC<MenuProps> = (props) => {
    const { defaultIndex, className, mode, style, children, onSelect, defaultOpenSubmenus } = props

    const [currentActive, setCurrentActive] = useState(defaultIndex) // 当前点击的Menu

    // 获取当前点击的Index
    const handleClick = (index: string) => {
        setCurrentActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }

    const classes = classNames('thunderkit-design-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })

    const passedContext: IMenuContext = {
        index:  currentActive || '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubmenus
    }

    // 在children上使用map是一个危险的事情
    // children不是一个透明的数据结构
    const renderChildren = () => {
        return Children.map(children, (child, index) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return cloneElement(childElement, {
                    index: index.toString(),
                })
            } else {
                console.error('Warning: Menu has a child which is not a MenuItem component')
            }
        })
    }

    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                { renderChildren() }
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal'
}

export default Menu