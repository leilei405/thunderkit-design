import React, { FC, forwardRef } from 'react';

import classNames from 'classnames';

import { InputProps } from './types'
import Icon from '../Icon/icon';

const Input =forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { disabled, size, icon, prefix, suffix, style, ...restProps } = props
    
    const classes = classNames('thunderkit-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prefix || suffix,
        'input-group-suffix': !!suffix,
        'input-group-prefix': !!prefix
    })

    return (
        <div className={classes} style={style}>
            {prefix && <div className="thunderkit-input-group-prefix">{prefix}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
            <input
                ref={ref}
                className="thunderkit-input-inner"
                disabled={disabled}
                {...restProps}
            />
            {suffix && <div className="thunderkit-input-group-suffix">{suffix}</div>}
        </div>
    )
})

export default Input