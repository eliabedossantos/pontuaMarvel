export interface ICardProps {
    title?: string | undefined;
    subtitle?: string | undefined;
    children?: React.ReactNode;
    onSubmit?: () => void;
    submitText?: string | undefined;
    className?: string | undefined;
    disabled?: boolean | undefined;
    showIcon?: boolean | undefined;
    icon?: React.ReactNode;
    footer?: React.ReactNode;
    afterContent?: string | undefined;
    showButton?: boolean | undefined;
}

export interface StyledSpanProps {
    icon?: boolean | undefined;
}

export interface StyledH1Props {
    afterContent?: string | undefined;
}