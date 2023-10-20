import React, { ChangeEvent, FC, useEffect, useState } from 'react';

// import classNames from 'classnames';

import Input from '../Input/input'

import Icon from '../Icon/icon';

import { AutoCompleteProps, DataSourceType } from './types'

import useDebounce from '../../hooks/useDebounce';

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const { onSelect, fetchSuggestions, value, renderOption, ...restProps } = props;

    const [inputValue, setInputValue] = useState(value as string);
    
    const [loading, setLoading] = useState(false)

    const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);

    const debounceValue = useDebounce(inputValue, 300)
    
    console.log(suggestions);

    useEffect(() => {
        if (debounceValue) {
            // results  最开始返回的联合类型
            // 经过instanceof 判断之后会自动分成俩种类型
            const results = fetchSuggestions(debounceValue)
            // 判断如果是Promise则使用.then]
            if (results instanceof Promise) {
                console.log("Promise");
                setLoading(true);
                results.then(res => {
                    setLoading(false)
                    setSuggestions(res)
                })
            } else {
                setSuggestions(results)
            }
        } else {
            setSuggestions([]);
        }
    }, [debounceValue])

    // 在Input输入的时候进行源数据的筛选
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim()
        setInputValue(value)
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
            {/* loading状态 */}
            {
                loading && <ul><Icon icon="spinner" spin /></ul>
            }
            {
                suggestions.length && generateDropdown()
            }
        </div>
    )
}
