import React, { useState } from 'react';
import { IDropDownProps } from './types';
import { 
    Container,
    Button,
    Content,
    RoundedImage,
    Name,
    DropdownContainer,
    DropdownItems,
    DropdownItem,
    ButtonItem
} from './DropDown.styles';
import { CaretDown, CaretUp, Check, User } from 'phosphor-react';
import { colors } from '../../styles/colors';


const DropDownCustom: React.FC<IDropDownProps> = (props) => {
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleShow = () => {
        setShow(!show);
    }

    const handleSelect = (option: any) => {
        props.onChange(option);
        setShow(false);
    }

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
          if (!loading) {
            setLoading(true);
            if (props.onPageChange && props.currentPage !== undefined) {
              props.onPageChange(props.currentPage + 1);
            }
          }
        }
      };
      

    return(
        <Container>
            <Button onClick={handleShow}>
                <Content>
                    {props.selected.image ? (
                        <RoundedImage src={props.selected.image} alt={props.selected.name ? props.selected.name : 'Selecione um agente'} />
                    ) : (
                        <User size={22} color={colors.gray} />
                    )}
                    <Name default={props.selected.name ? false : true}>
                        {props.selected.name ? props.selected.name : 'Selecione um agente'}
                    </Name>
                    {!show ? <CaretDown size={22} color={colors.grayMedium} /> : <CaretUp size={22} color={colors.gray} />}
                </Content>
            </Button>
            <DropdownContainer isopen={show}  onScroll={handleScroll}>
                <DropdownItems>
                    {props.options?.map((option, index) => {
                        return(
                            <DropdownItem key={index}>
                                <ButtonItem onClick={() => handleSelect(option)} key={index}>
                                    {option.image ? (
                                        <RoundedImage src={option.image} alt={option.name} />
                                    ) : (
                                        <User size={22} color={colors.grayMedium} />
                                    )}
                                    <Name>
                                        {option.name}
                                    </Name>
                                    {props.selected.name === option.name ? <Check size={25} color={colors.grayMedium} /> : null}
                                </ButtonItem>
                            </DropdownItem>
                        )
                    })}
                    
                </DropdownItems>
            </DropdownContainer>
        </Container>
    )
}

export default DropDownCustom;