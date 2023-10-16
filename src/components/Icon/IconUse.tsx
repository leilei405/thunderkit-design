import React, { FC } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Icon from './icon'
library.add(fas)
export const IconUseCom: FC = () => {
    return (
        <div>
            <Icon icon="coffee" theme="danger" size="10x" />
            <Icon icon="arrow-down" theme="primary" size="10x" />
        </div>
    )
}