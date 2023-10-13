import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from './button';

import { ButtonProps } from './types'

const defaultProps = {
    onClick: jest.fn(), // 创建出可以被监控的模拟函数
}

const testButtonProps: ButtonProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'klass'
}

const testDisabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn(),
}

describe('测试Button组件', () => {
    it('默认按钮Default测试', () => {
        const wrapper = render(<Button {...defaultProps}>Success</Button>)
        const element = wrapper.getByText('Success') as HTMLElement
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        // expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled(); // 事件被调用到了
    })

    it('link按钮测试', () => {
        const wrapper = render(<Button btnType='link' href="http://dummyurl">Link</Button>)
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })
    
    it('禁用按钮测试', () => {
        const wrapper = render(<Button {...testDisabledProps}>Success</Button>)
        const element = wrapper.getByText('Success') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(testDisabledProps.onClick).not.toHaveBeenCalled()
    })

    it('不同props展示不同按钮测试', () => {
        const wrapper = render(<Button {...testButtonProps}>success</Button>)
        const element = wrapper.getByText('success')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('klass')
    })
})