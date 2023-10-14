import React, { ReactNode } from 'react';
// Menu By Arrange 
type MenuMode = 'horizontal' | 'vertical';

// MenuProps
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    children?: ReactNode;
    onSelect?: (selectedIndex: number) => void;
}


// MenuItemProps
export interface MenuItemProps {
    index?: number;
    disabled?: boolean;
    className?: string;
    children?: ReactNode;
    style?: React.CSSProperties;
}
