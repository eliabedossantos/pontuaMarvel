import React from 'react';
import { ICardProps } from './types';
import { 
    CardStyled,
    Title,
    Subtitle,
    Submit,
    SubmitText,

} from './CardForm.styles';


const CardForm: React.FC<ICardProps> = (props) => {
    return(
        <CardStyled>
            <Title aftercontent={props.after}>
                {props.title}
            </Title>
            <Subtitle>
                {props.subtitle}
            </Subtitle>
            {props.children}
            {props.showButton && (
                <Submit 
                    onClick={props.onSubmit}
                    disabled={props.disabled}
                >
                    <SubmitText icon={props.showIcon}>
                        {props.submitText}
                    </SubmitText>
                    {props.icon}
                </Submit>
            )}
            {props.footer}
        </CardStyled>
    )
}

export default CardForm;