import React, { FC } from 'react';

import Alert from './alert';

export const AlertUseCom: FC = () => {
    return (
        <div>
            <Alert title='ALert组件1' type="danger" />
            <Alert title='ALert组件2' type="default" />
            <Alert title='ALert组件3' type="success" />
            <Alert title='ALert组件4' type="warning" />
        </div>
    )
}