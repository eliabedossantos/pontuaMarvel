import React from "react";
import { RowContainerProps } from "./types";
import { Container } from "./RowContainer.styles";

const RowContainer: React.FC<RowContainerProps> = (props) => {
    return(
        <Container className={props.className} style={props.style}>
            {props.children}
        </Container>
    );
}

export default RowContainer;