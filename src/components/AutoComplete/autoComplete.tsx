import { ChangeEvent, FC, useEffect, useState, KeyboardEvent, useRef } from 'react';

import classNames from 'classnames';

import Input from '../Input/input'

import Icon from '../Icon/icon';

import { AutoCompleteProps, DataSourceType } from './types'

import useDebounce from '../../hooks/useDebounce';

import useClickOutSide from '../../hooks/useClickOutSide';

// 添加动画效果
import Transition from '../Transition/transition';

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const { onSelect, fetchSuggestions, value, renderOption, ...restProps } = props;

    const [inputValue, setInputValue] = useState(value as string);
    
    const [loading, setLoading] = useState(false)

    const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);

    const [currentIndex, setCurrentIndex] = useState(-1); // 当前的高亮

    // 下拉的展示
    const [ showDropdown, setShowDropdown] = useState(false)

    const debounceValue = useDebounce(inputValue, 300)

    // 用来解决按下回车和点击选中某一项之后不触发二次搜索
    const enterOrEnterTrigger = useRef(false)

    // 解决点击组件外关闭下拉的筛选项
    const componentRef = useRef<HTMLDivElement>(null)

    // 封装自定义hooks解决点击组件外关闭下拉的筛选项
    useClickOutSide(componentRef, () => {
        setSuggestions([])
    })
    
    useEffect(() => {
        if (debounceValue && enterOrEnterTrigger.current) {
            // results  最开始返回的联合类型
            // 经过instanceof 判断之后会自动分成俩种类型
            const results = fetchSuggestions(debounceValue)
            // 判断如果是Promise则使用.then]
            if (results instanceof Promise) {  // 异步
                setLoading(true);
                results.then(res => {
                    setLoading(false)
                    setSuggestions(res)
                    if (res.length) {
                        setShowDropdown(true)
                    }
                })
            } else {  // 同步
                setSuggestions(results)
                setShowDropdown(true)
                if (results.length > 0) {
                    setShowDropdown(true)
                } 
            }
        } else {
            setSuggestions([]);
            setShowDropdown(false)
        }
        setCurrentIndex(-1)
    }, [debounceValue, fetchSuggestions])

    // 在Input输入的时候进行源数据的筛选
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim()
        setInputValue(value)
        enterOrEnterTrigger.current = true
    }

    // 点击将选中的item填充到input中
    const handleSelect = (item: DataSourceType) => {
        setInputValue(item.value)
        setSuggestions([]);
        setShowDropdown(false);
        if (onSelect) {
            onSelect(item)
        }
        enterOrEnterTrigger.current = false
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
            <Transition
                in={showDropdown || loading}
                animation="zoom-in-top"
                timeout={300}
                onExited={() => {setSuggestions([])}}
            >
                <ul className="thunderkit-suggestion-list">
                    {loading && 
                        <div className="suggestions-loading-icon">
                            <Icon icon={"spinner"} spin />
                        </div>
                    }
                    {suggestions.map((item, idx) => {
                        const classes = classNames('suggestion-item', {
                            'is-active': idx === currentIndex
                        })
                        return (
                            <li 
                                key={idx}
                                className={classes}
                                onClick={() => handleSelect(item)}
                            >
                                { renderTemplate(item) }
                            </li>
                        )
                    })}
                </ul>
            </Transition>
        )
    }

    const currentHighlight = (index: number) => {
        if (index < 0) index = 0
        if (index >= suggestions.length) {
            index = suggestions.length - 1
        } 
        setCurrentIndex(index)
    }

    // 回车
    const handleEnter = () => {
        return suggestions[currentIndex] && handleSelect(suggestions[currentIndex]);
    };
    
    // 上键
    const handleArrowUp = () => {
        currentHighlight(currentIndex - 1);
    };
    
    // 下键
    const handleArrowDown = () => {
        currentHighlight(currentIndex + 1);
    };
    
    // ESC键
    const handleEsc = () => {
        setSuggestions([]);
        setShowDropdown(false);
    };

    // 键盘按下事件
    const handleKeyDown = (key: KeyboardEvent<HTMLInputElement>) => {
        const keyHandlers: { [key: number]: () => void } = {
            13: handleEnter,      // Enter
            38: handleArrowUp,    // Arrow Up
            40: handleArrowDown,  // Arrow Down
            27: handleEsc,        // Esc
        };
    
        const keyHandler = keyHandlers[key.keyCode];
        if (keyHandler) {
            keyHandler();
        }
    }

    return (
        <div 
            className="thunderkit-auto-complete"
            ref={componentRef}
        >
            <Input 
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                { ...restProps }
            />
            {/* loading状态 */}
            {/* {
                loading && <ul><Icon icon="spinner" spin /></ul>
            } */}
            {
                suggestions.length && generateDropdown()
            }
        </div>
    )
}
