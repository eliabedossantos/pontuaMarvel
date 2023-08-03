import React from "react";
import { ICardHeroProps } from "./types";
import { MagnifyingGlass } from "phosphor-react";
import { colors } from "../../styles/colors";
import { StyledCard, StyledImage } from "./CardHero.styles.";

const CardHero: React.FC<ICardHeroProps> = (props) => {
    return(
       <StyledCard>
            <StyledImage src={props.image}  alt={props.name}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
            </div>
       </StyledCard>
    );
}

export default CardHero;

