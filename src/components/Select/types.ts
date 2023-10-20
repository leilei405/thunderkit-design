import  { ReactNode, createContext } from 'react'

export interface SelectProps {
    defaultValue?: string | string[];
    placeholder?: string;
    disabled?: boolean;
    multiple?: boolean;
    name?: string;
    onChange?: (selectedValue: string, selectedValues: string[]) => void;
    onVisibleChange?: (visible: boolean) => void;
    children?: ReactNode;
}

export interface ISelectContext {
    onSelect?: (value: string, isSelected?: boolean) => void;
    selectedValues: string[];
    multiple?: boolean;
}

export interface SelectOptionProps {
    index?: string;
    value: string;
    label?: string;
    disabled?: boolean;
    children?: ReactNode;
}

export const SelectContext = createContext<ISelectContext>({ selectedValues: []})


