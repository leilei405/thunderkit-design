import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; 

type InputSize = "lg" | "sm";

// Omit  移除或者忽略接口中的值

type Params = 'size' | 'prefix' | 'suffix'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, Params> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prefix?: string | ReactElement; // 前缀
    suffix?: string | ReactElement; // 后缀
    onChange? : (e: ChangeEvent<HTMLInputElement>) => void;
}