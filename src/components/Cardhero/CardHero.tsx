import React from "react";
import { ICardHeroProps } from "./types";
import { MagnifyingGlass } from "phosphor-react";
import { colors } from "../../styles/colors";
import { 
    StyledCard, 
    StyledImage, 
    StyledInfo, 
    StyledTitle 
} from "./CardHero.styles.";

const CardHero: React.FC<ICardHeroProps> = (props) => {
    const { description, name, image } = props;

    const truncatedDescription = description.length > 70
      ? description.substring(0, 70).replace(/^(.{70}[^\s]*).*/, "$1") + "..."
      : description;

    return(
       <StyledCard>
            <StyledImage src={image}  alt={name}/>
            <StyledInfo>
                <StyledTitle>
                    {name}
                </StyledTitle>
                <p className="card-text">
                    {truncatedDescription}
                </p>
            </StyledInfo>
       </StyledCard>
    );
}

export default CardHero;

