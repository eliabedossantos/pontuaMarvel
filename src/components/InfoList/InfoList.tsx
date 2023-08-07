import React from 'react';

import { IInfoProps } from './types';
import { StyledList } from './InfoList.style';


const InfoList: React.FC<IInfoProps> = (props) => {
    return (
        <StyledList>
            {props.items && props.items.map((item, index) => {
                return (
                    <li key={index}>
                        <span>{item}</span>
                    </li>
                )
            })}
        </StyledList>
    )

}

export default InfoList;