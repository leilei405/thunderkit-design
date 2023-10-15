import { 
    FC, 
    useContext, 
    FunctionComponentElement, 
    Children, 
    useState, 
    MouseEvent 
} from 'react';

import classNames from 'classnames';

import { SubMenuProps, MenuContext, MenuItemProps } from './types'

const SubMenu:FC<SubMenuProps> = (props) => {
    const { index, title, className, children } = props;
    
    const context = useContext(MenuContext)

    const [menuOpen, setMenuOpen] = useState(false)

    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        setMenuOpen(!menuOpen)
    }

    let timer: any
    const handleMouseDown = (e: MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setMenuOpen(toggle)
        }, 300)
    }

    // true === 纵向 否则 {} ->
    const clickEvents = context.mode === 'vertical' && {
        onClick: handleClick
    }

    // 鼠标移动上去和离开的时候  !{}
    const hoverEvents = context.mode !== 'vertical' && {
        onMouseEnter: (e: MouseEvent) => {
            handleMouseDown(e, true)
        },
        onMouseLeave: (e: MouseEvent) => {
            handleMouseDown(e, false)
        }
    }

    const renderChildren = () => {

        const subMenuClasses = classNames('thunderkit-submenu', {
            'menu-opened': menuOpen
        })

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
            <ul className={subMenuClasses}>
                { childrenComponent }
            </ul>
        )
    }


    return (
        <li key={index} className={classes} { ...hoverEvents }>
            <div className='submenu-title' { ...clickEvents }>
                { title }
            </div>
            { renderChildren() }
        </li>
    )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu