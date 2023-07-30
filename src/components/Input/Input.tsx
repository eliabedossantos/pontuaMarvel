import React from 'react';

import { IInputProps } from './types';
import { 
    Input as InputStyled, 
    InputContainer,
    Icon
} from './Input.style';


const Input: React.FC<IInputProps> = (props) => {
    return (
        <InputContainer>
            <InputStyled 
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                type={props.type}
            />
            <Icon>{props.iconComponent}</Icon>
        </InputContainer>
    )

}

export default Input;