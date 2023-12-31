export interface ICardHeroProps {
    image?: string;
    name?: string;
    id?: number;
    description: string;
    className?: string;
    index?: number;
    showAllContent?: boolean;
    onClick?: (id: number) => void;
}

export interface StyledCardProps {
    showAllContent?: boolean;
}
