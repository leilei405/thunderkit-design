import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export type ThemeProps = 'primary' | 'default' | 'danger' | 'link' | 'secondary' | 
'success' |  'info' | 'warning' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps
}
