import { InputProps } from "../Input/types";

export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
    fetchSuggestions: (str: string) => string[];
    onSelect?: (item: string) => void;
}