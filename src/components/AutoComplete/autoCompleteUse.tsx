import React, { FC } from 'react';

import { AutoComplete } from './autoComplete';

export const AutoCompleteUseCom:FC = () => {
    const arr = ['321', '323', '32132']

    const handleFetch = (query: string) => {
       return arr.filter(name => name.includes(query))
    }
    return (
        <div>
            <AutoComplete fetchSuggestions={handleFetch} />
        </div>
    )
}
