import React, { FC, useContext, FunctionComponentElement, Children } from 'react';

import classNames from 'classnames';

import { SubMenuProps, MenuContext, MenuItemProps } from './types'

const SubMenu:FC<SubMenuProps> = (props) => {
    const { index, title, className, children } = props;
    
    const context = useContext(MenuContext)

    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })

    const renderChildren = () => {
        const childrenComponent = Children.map(children, (child, index) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem') {
                return childElement
            } else {
                console.error('Warning: Menu has a child which is not a MenuItem component')
            }
        })
        return (
            <ul className='thunderkit-submenu'>
                { childrenComponent }
            </ul>
        )
    }


    return (
        <li key={index} className={classes}>
            <div className='submenu-title'>
                { title }
            </div>
            { renderChildren() }
        </li>
    )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu