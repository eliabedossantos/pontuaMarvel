import React, { useState } from "react";
import { RowContainer } from "../../components/RowContainer/RowContainer.styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import { StyledDivider, StyledDividerContainer } from "../../components/Divider/Divider.styles";
import { StyledContainer } from "./Profile.styles";


export default function Profile() {



    return (
        <RowContainer>
            <Sidebar />
            <StyledContainer>
                <StyledDividerContainer />
                <Container fluid>
                    <Row>
                        <Col>
                            
                        </Col>
                    </Row>
                </Container>
            </StyledContainer>
        </RowContainer>
    )
}