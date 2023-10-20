import React, { FC } from 'react';

import { AutoComplete } from './autoComplete';

import { DataSourceType } from './types'

export const AutoCompleteUseCom:FC = () => {

    // const arr = ['2', '3', '4', '5', '6']

    // interface TestDataProps {
    //     value?: string;
    //     number?: number;
    //     age?: number;
    // }

    interface GithubUserProps {
        login?: string;
        url?: string
        avatar_url?: string;
    }

    // const testData = [
    //     {value: '张三', number: 11, age: 12},
    //     {value: '李四', number: 32, age: 23},
    //     {value: '王五', number: 43, age: 45},
    //     {value: '小明', number: 65, age: 56},
    //     {value: '小李', number: 21, age: 76},
    //     {value: '校涨', number: 23, age: 53},
    //     {value: '老师', number: 76, age: 32},
    // ]

    // const handleFetch = (query: string) => {
    //     return testData.filter(item => item.value.includes(query))
    // }

    // const handleFetch = (query: string) => {
    //     return arr.filter(item => item.includes(query)).map(name=>({value: name}))
    // }

    const handleFetch = (query: string) => {
        return fetch(`https://api.github.com/search/users?q=${query}`)
          .then(res => res.json())
          .then(({ items }) => {
            return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
          })
      }

    // const renderOption = (item: DataSourceType<TestDataProps>) => {
    //     return (
    //         <>
    //             <h2>Name: {item.value}</h2>
    //             <h2>number: {item.number}</h2>
    //             <h2>age: {item.age}</h2>
    //         </>
    //     )
    // }

     const renderOption = (item: DataSourceType<GithubUserProps>) => {
        return (
            <>
                <h2>{item.login}</h2>
                {/* <h2>url: {item.url}</h2> */}
            </>
        )
    }

    return (
        <div>
            <AutoComplete 
                fetchSuggestions={handleFetch} 
                renderOption={renderOption}
            />
        </div>
    )
}
