import React, { FC } from 'react';

import { render, RenderResult, fireEvent, waitFor, cleanup } from '@testing-library/react';

import Menu from './menu';

import MenuItem from './menuItem';

import SubMenu from './subMenu';

import { MenuProps } from './types'

const MenuTestProps: MenuProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'test'
}

const MenuTestVerProps: MenuProps = {
    defaultIndex: '0',
    mode: 'vertical',
}

// 测试渲染不同属性的组件
const MenuDifferent = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem>
                active
            </MenuItem>
            <MenuItem disabled>
                disabled
            </MenuItem>
            <MenuItem>
                third
            </MenuItem>
            <SubMenu title='dropdown'>
                <MenuItem>
                    drop1
                </MenuItem>
            </SubMenu>
        </Menu>
    )
}

const createStyleFile = () => {
    const cssFile: string = `
        .thunderkit-submenu {
            display: none;
        }
        .thunderkit-submenu.menu-opened {
            display: block;
        }
    `
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = cssFile
    return style
}

let wrapper: RenderResult;
let menuElement: HTMLElement;
let activeElement: HTMLElement;
let disabledElement: HTMLElement;

describe('Menu Component Test', () => {
    beforeEach(() => {
        wrapper = render(MenuDifferent(MenuTestProps));
        wrapper.container.append(createStyleFile())
        menuElement= wrapper.getByTestId('test-menu');
        activeElement = wrapper.getByText('active');
        disabledElement = wrapper.getByText('disabled');
    })

    it('测试默认属性会不会显示对应class', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('thunderkit-design-menu test')
        // expect(menuElement.getElementsByTagName('li').length).toEqual(5)
        expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })

    it('测试行为,点击之后会不会切换到Item上面', () => {
        const thirdItem = wrapper.getByText('third')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(MenuTestProps.onSelect).toHaveBeenCalledWith('2')
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(MenuTestProps.onSelect).not.toHaveBeenCalledWith('1')
    })

    it('传入mode之后会不会显示对应的class', () => {
        cleanup()
        const wrapper = render(MenuDifferent(MenuTestVerProps));
        const menuElement = wrapper.getByTestId('test-menu');
        expect(menuElement).toHaveClass('menu-vertical')
    })
    it('默认横向的模式', async () => {
        expect(wrapper.queryByText('drop1')).not.toBeVisible()
        const dropdownElement = wrapper.getByText('dropdown')
        fireEvent.mouseEnter(dropdownElement)
        await waitFor (() => {
            expect(wrapper.queryByText('drop1')).toBeVisible()
        })
        fireEvent.click(wrapper.getByText('drop1'))
        expect(MenuTestProps.onSelect).toHaveBeenCalledWith('3-0')
        fireEvent.mouseLeave(dropdownElement)
        await waitFor (() => {
            expect(wrapper.queryByText('drop1')).not.toBeVisible()
        })
    })
})