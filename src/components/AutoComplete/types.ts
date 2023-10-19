import { ReactElement } from "react";
import { InputProps } from "../Input/types";

interface DataSourceObject {
    value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
    fetchSuggestions: (str: string) => DataSourceType[];
    onSelect?: (item: DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement;
}
