import React, { FC } from 'react';
import Button from './button';

export const ButtonUseCom: FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
            <Button btnType='default'>Success</Button>
            <Button btnType='danger'>danger按钮</Button>
            <Button btnType='dark'>dark按钮</Button>
            <Button btnType='info'>info按钮</Button>
            <Button btnType='light'>light按钮</Button>
            <Button btnType='link'>link按钮</Button>
            <Button btnType='primary'>primary按钮</Button>
            <Button btnType='success'>success按钮</Button>
            <Button btnType='warning'>warning按钮</Button>
            <Button btnType='secondary'>secondary按钮</Button>

            <Button size='lg'>大按钮</Button>
            <Button size='sm'>小按钮</Button>
        </div>
    )
}