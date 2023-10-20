import React, { FC, useState } from 'react'

import Select from './select'

import Option from './option'

export const SelectUseCom: FC = () => {
    const [arr] = useState([
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'},
        {label: '4', value: '4'}
    ])
    return (
        <div>
            <Select>
                {
                    arr.map(item => {
                        return <Option key={item.value} value={item.value}>{item.label}</Option>
                    })
                }
            </Select>
            <Select multiple>
                {
                    arr.map(item => {
                        return <Option key={item.value} value={item.value}>{item.label}</Option>
                    })
                }
            </Select>
        </div>
    )
}
