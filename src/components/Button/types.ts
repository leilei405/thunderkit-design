import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'


export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'secondary' | 
'success' |  'info' | 'warning' | 'light' | 'dark'

interface BaseButtonProps {
    href?: string;
    size?: ButtonSize;
    className?: string;
    disabled?: boolean;
    btnType?: ButtonType;
    children: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>

type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
