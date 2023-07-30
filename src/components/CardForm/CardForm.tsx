import React from 'react';
import { ICardProps } from './types';
import { 
    CardStyled,
    Title,
    Subtitle
} from './CardForm.styles';


const CardForm: React.FC<ICardProps> = (props) => {
    return(
        <CardStyled>
            <Title>
                {props.title}
            </Title>
            <Subtitle>
                {props.subtitle}
            </Subtitle>
            {props.children}
            
        </CardStyled>
    )
}

export default CardForm;