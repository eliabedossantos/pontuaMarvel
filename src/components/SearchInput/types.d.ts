export interface ISearchInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit?: () => void;
    className?: string;
    placeholder?: string;
}
export interface ISearchInputState {
    value: string;
}
