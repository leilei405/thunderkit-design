import { 
    FC, 
    useContext, 
    FunctionComponentElement, 
    Children, 
    useState, 
    MouseEvent, 
    cloneElement
} from 'react';

// import { CSSTransition } from 'react-transition-group'

import classNames from 'classnames';

import { SubMenuProps, MenuContext, MenuItemProps } from './types'

import Icon from '../Icon/icon';

import Transition from '../Transition/transition';
const SubMenu:FC<SubMenuProps> = (props) => {
    const { index, title, className, children } = props;
    
    const context = useContext(MenuContext)

    const openedSubMenus = context.defaultOpenSubmenus as Array<string>

    const isOpened = (index && context.mode === 'vertical') ? openedSubMenus?.includes(index) : false

    const [menuOpen, setMenuOpen] = useState(isOpened) 

    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
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

        const childrenComponent = Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem') {
                return cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            } else {
                console.error('Warning: Menu has a child which is not a MenuItem component')
            }
        })
        return (
            // CSSTransition  动画组件
            <Transition
                in={menuOpen}
                timeout={300} // active - down的时间
                animation="zoom-in-top"
                // classNames='zoom-in-top' // 自定义的名称
                // appear // 菜单是否打开
                // unmountOnExit  // 
            >
                <ul className={subMenuClasses}>
                    { childrenComponent }
                </ul>
            </Transition>
        )
    }


    return (
        <li key={index} className={classes} { ...hoverEvents }>
            <div className='submenu-title' { ...clickEvents }>
                { title }
                <Icon icon='angle-down' className='arrow-icon' />
            </div>
            { renderChildren() }
        </li>
    )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu