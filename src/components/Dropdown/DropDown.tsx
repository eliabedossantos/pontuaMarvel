import React, { useState } from 'react';
import { IDropDownProps } from './types';
import { 
    Container,
    Button,
    Content,
    RoundedImage,
    Name,
    DropdownItems
} from './DropDown.styles';
import { CaretDown, CaretUp, Check, User } from 'phosphor-react';
import { colors } from '../../styles/colors';


const CardForm: React.FC<IDropDownProps> = (props) => {
    const [show, setShow] = useState<boolean>(false);

    const handleShow = () => {
        setShow(!show);
    }

    return(
        <Container>
            <Button onClick={handleShow}>
                <Content>
                    {props.image ? (
                        <RoundedImage src={props.image} alt={props.alt} />
                    ) : (
                        <User size={32} color={colors.gray} />
                    )}
                    <Name>
                        {props.name ? props.name : 'Selecione um agente'}
                    </Name>
                    {!show ? <CaretDown size={25} color={colors.gray} /> : <CaretUp size={25} color={colors.gray} />}
                </Content>
            </Button>
            <DropdownItems isOpen={show}>
                {props.options?.map((option, index) => {
                    <Button onClick={handleShow}>
                       <Content>
                           {option.image ? (
                               <RoundedImage src={option.image} alt={option.name} />
                           ) : (
                               <User size={32} color={colors.gray} />
                           )}
                           <Name>
                            {option.name}
                           </Name>
                           {props.selected.name === option.name ? <Check size={25} color={colors.gray} /> : null}
                       </Content>
                   </Button>
                })}
            </DropdownItems>
        </Container>
    )
}

export default CardForm;