import React, { useState } from "react";
import RowContainer from "../../components/RowContainer/RowContainer";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import { StyledDividerContainer } from "../../components/Divider/Divider.styles";
import { StyledContainer } from "./Home.styles";
import SearchInput from "../../components/SearchInput/SearchInput";

export default function Home() {
    const [search, setSearch] = useState("");

    const handleSearch = (value: string) => {
        setSearch(value);
    }

    return (
        <RowContainer>
            <Sidebar />
            <StyledContainer>
                <StyledDividerContainer>
                    <SearchInput onChange={(text) => handleSearch(text)} value={search} placeholder="Busque um agente" />
                </StyledDividerContainer>
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