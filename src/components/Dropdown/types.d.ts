export interface IDropDownProps {
    image?: string | undefined;
    alt?: string | undefined;
    name?: string | undefined;
    options: Array<any>;
    onChange: (value: any) => void;
    selectItem: (value: any) => void;
    selected?: any;
}

export interface IDropDownState {
    isOpen?: boolean;
    selected?: any;
    children?: any;
}