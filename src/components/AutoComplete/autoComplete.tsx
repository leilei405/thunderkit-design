import React, { ChangeEvent, FC, useState } from 'react';

// import classNames from 'classnames';

import Input from '../Input/input'

import { AutoCompleteProps, DataSourceType } from './types'

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const { onSelect, fetchSuggestions, value, renderOption, ...restProps } = props;

    const [inputValue, setInputValue] = useState(value);

    const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
    
    console.log(suggestions);

    // 在Input输入的时候进行源数据的筛选
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim()
        setInputValue(value)
        if (value) {
            const results = fetchSuggestions(value)
            setSuggestions(results)
        } else {
            setSuggestions([]);
        }
    }

    // 将选中的item填充到input中
    const handleSelect = (item: DataSourceType) => {
        setInputValue(item.value)
        setSuggestions([])
        if (onSelect) {
            onSelect(item)
        }
    }

    // 以模版渲染
    // 修改renderTemplate函数，始终返回ReactElement
    // 明确指定renderTemplate函数的返回类型为ReactNode
    const renderTemplate = (item: DataSourceType) => {
        return (
            <div>{renderOption ? renderOption(item) : item.value}</div>
        );
    }


    // 展示搜索到的内容
    const generateDropdown = () => {
        return (
            <ul>
                {suggestions.map((item, idx) => {
                    return (
                        <li 
                            key={idx}
                            onClick={() => handleSelect(item)}
                        >
                            { renderTemplate(item) }
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div className="thunderkit-auto-complete">
            <Input 
                value={inputValue}
                onChange={handleChange}
                { ...restProps }
            />
            {
                suggestions.length && generateDropdown()
            }
        </div>
    )
}
