import React, { FC, useState } from 'react'

import Input from './input'

export const InputUseCom: FC = () => {
    const [value, setValue] = useState('')
    return (
        <div>
            <Input value={value} placeholder="请输入内容" onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}