import React from "react";
import { ITitleProps } from "./types";
import { colors } from "../../styles/colors";
import { 
    StyledSubtitle,
    StyledTitle, TitleContainer 
} from "./TitleProfile.styles.";

const TitleProfile: React.FC<ITitleProps> = (props) => {
    const {  heroName } = props;

    return(
       <TitleContainer>
            <StyledTitle>
                Perfil
            </StyledTitle>
            <StyledSubtitle>
                {heroName}
            </StyledSubtitle>
       </TitleContainer>
    )
}

export default TitleProfile;

