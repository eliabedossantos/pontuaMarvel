import React from "react";
import { ISearchInputProps } from "./types";
import { InputContainer, StyledInput } from "./SearchInput.styles";
import { MagnifyingGlass } from "phosphor-react";
import { colors } from "../../styles/colors";

const SearchInput: React.FC<ISearchInputProps> = (props) => {
    return(
       <InputContainer>
            <MagnifyingGlass size={20} color={colors.primaryExtraLight} weight="bold"/>
            <StyledInput 
            placeholder={props.placeholder} 
            onChange={(e) => props.onChange(e.target.value)}
            value={props.value}
            type="text" /> 
       </InputContainer>
    );
}

export default SearchInput;

