import React, { ReactNode, createContext } from 'react';
// Menu By Arrange 
type MenuMode = 'horizontal' | 'vertical';

// SelectCallback
type SelectCallback = (selectedIndex: string) => void

// MenuProps
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    children?: ReactNode;
    onSelect?: SelectCallback;
    defaultOpenSubmenus?: string[];
}


// MenuItemProps
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    children?: ReactNode;
    style?: React.CSSProperties;
}

// subMenuProps
export interface SubMenuProps {
    index?: string;
    title?: string;
    className?: string;
    children?: ReactNode;
}

export interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubmenus?: string[];
} 

export const MenuContext = createContext<IMenuContext>({ index: '0' });