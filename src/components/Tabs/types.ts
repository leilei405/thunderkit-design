import React, { ReactNode } from 'react'
type TabsType = 'line' | 'card'

// TabsProps
export interface TabsProps {
    defaultIndex?: number;
    className?: string;
    onSelect?: (selectedIndex: number) => void;
    type?: TabsType;
    children?: ReactNode;
}

// TabItemProps
export interface TabItemProps {
    label: string | React.ReactElement;
    disabled?: boolean;
    children?: ReactNode;
  }
  