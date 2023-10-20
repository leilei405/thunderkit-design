import { useEffect, useState } from 'react';

const useDebounce = (value: any, delay: 300) => {
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

export default useDebounce