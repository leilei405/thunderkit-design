import { useEffect, useState } from 'react';

export default (value: any, delay: 300) => {
    const [inputValue, setInputValue] = useState();

    useEffect(() => {
        const handler = setTimeout(() => {
            setInputValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }

    }, [value, delay])
    return inputValue
}