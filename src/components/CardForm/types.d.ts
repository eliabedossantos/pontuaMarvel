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
    after?: string;
    showButton?: boolean | undefined;
}

export interface StyledSpanProps {
    icon?: boolean | undefined;
}

export interface StyledH1Props {
    aftercontent?: string | undefined;
}