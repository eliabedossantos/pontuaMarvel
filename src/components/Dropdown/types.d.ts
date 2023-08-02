type Array = {
    id: number;
    name: string;
    image: string;   
}
export interface IDropDownProps {
    options?: Array[];
    onChange: (value: any) => void;
    selectItem?: (value: any) => void;
    selected?: any;
}

export interface IDropDownState {
    isopen?: boolean;
    selected?: any;
    children?: any;
}

export interface INameStyledProps {
    default?: boolean;
}