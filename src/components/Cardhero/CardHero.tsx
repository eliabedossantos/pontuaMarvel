import React from "react";
import { ICardHeroProps } from "./types";
import { MagnifyingGlass } from "phosphor-react";
import { colors } from "../../styles/colors";
import { 
    StyledCard, 
    StyledDescription, 
    StyledImage, 
    StyledInfo, 
    StyledTitle 
} from "./CardHero.styles.";

const CardHero: React.FC<ICardHeroProps> = (props) => {
    const { description, name, image } = props;

    const truncatedDescription = description?.length > 70
      ? description.substring(0, 70).replace(/^(.{70}[^\s]*).*/, "$1") + "..."
      : description;

    return(
       <StyledCard showAllContent={props.showAllContent}>
            <StyledImage src={image}  alt={name} showAllContent={props.showAllContent}/>
            <StyledInfo showAllContent={props.showAllContent}>
                <StyledTitle showAllContent={props.showAllContent}>
                    {name}
                </StyledTitle>
                <StyledDescription showAllContent={props.showAllContent}>
                    {props.showAllContent ? description : truncatedDescription}
                </StyledDescription>
            </StyledInfo>
       </StyledCard>
    );
}

export default CardHero;

