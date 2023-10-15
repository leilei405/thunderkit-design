import React, { ReactNode, createContext } from 'react';
// Menu By Arrange 
type MenuMode = 'horizontal' | 'vertical';

// SelectCallback
type SelectCallback = (selectedIndex: number) => void

// MenuProps
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    children?: ReactNode;
    onSelect?: SelectCallback;
}


// MenuItemProps
export interface MenuItemProps {
    index?: number;
    disabled?: boolean;
    className?: string;
    children?: ReactNode;
    style?: React.CSSProperties;
}

// subMenuProps
export interface SubMenuProps {
    index?: number;
    title?: string;
    className?: string;
    children?: ReactNode;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });

export interface IMenuContext {
    index: number;
    onSelect?: SelectCallback;
} 