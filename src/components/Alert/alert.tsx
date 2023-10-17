import React, { FC, useState } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/icon'
import Transition from '../Transition/transition'
import { AlertProps } from './types'


export const Alert: FC<AlertProps> = (props) => {
  const [ hide, setHide ] = useState(false)
  const { title, description, type, onClose, closable } = props

  const classes = classNames('thunderkit-alert', {
    [`thunderkit-alert-${type}`]: type,
  })
  const titleClass = classNames('thunderkit-alert-title', {
    'bold-title': description
  })
  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose()
    }
    setHide(true)
  }
  return (
    <Transition
      in={!hide}
      timeout={300}
      animation="zoom-in-top"
    >
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="thunderkit-alert-desc">{description}</p>}
        {closable && <span className="thunderkit-alert-close" onClick={handleClose}><Icon icon="times"/></span>}
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  type: 'default',
  closable: true,
}
export default Alert;