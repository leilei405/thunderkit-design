import React, { ChangeEvent, FC, useState } from 'react';

// import classNames from 'classnames';

import Input from '../Input/input'

import { AutoCompleteProps } from './types'

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const { onSelect, fetchSuggestions, value, ...restProps } = props;

    const [inputValue, setInputValue] = useState(value);

    const [suggestions, setSuggestions] = useState<string[]>([]);
    console.log(suggestions);
    

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
    const handleSelect = (item: string) => {
        setInputValue(item)
        setSuggestions([])
        if (onSelect) {
            onSelect(item)
        }
    }

    // 展示搜索到的内容
    const generateDropdown = () => {
        return (
            <ul>
                {
                    suggestions.map((item, idx) => {
                        return <li 
                            key={idx}
                            onClick={() => handleSelect(item)}
                        >
                            {item}
                        </li>
                    })
                }
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
