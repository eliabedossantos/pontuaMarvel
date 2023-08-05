import React, { useState } from "react";
import { RowContainer, RowContainerWrapped } from "../../components/RowContainer/RowContainer.styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import { StyledDivider, StyledDividerContainer } from "../../components/Divider/Divider.styles";
import { StyledContainer } from "./Home.styles";
import SearchInput from "../../components/SearchInput/SearchInput";
import CardHero from "../../components/Cardhero/CardHero";
import { mockHeroes } from "../../util/mock/Heroes";
import Pagination from "../../components/Pagination/Pagination";

export default function Home() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
  

    const handleSearch = (value: string) => {
        setSearch(value);
    }

    const handlePageChange = (page: number) => {
        console.log(page);
        setCurrentPage(page);
    };
    

    return (
        <RowContainer>
            <Sidebar />
            <StyledContainer>
                <StyledDividerContainer padding={true}>
                    <SearchInput onChange={(text) => handleSearch(text)} value={search} placeholder="Busque um agente" />
                </StyledDividerContainer>
                <Container fluid>
                    <Row>
                        <Col>
                            <RowContainerWrapped>
                                {mockHeroes.map((hero, index) => {
                                    return (
                                    <CardHero key={index} image={hero.image} name={hero.name}  description={hero.description} id={hero.id}/>
                                    )
                                })}
                            </RowContainerWrapped>
                            <StyledDivider />
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </Col>
                    </Row>
                </Container>
            </StyledContainer>
        </RowContainer>
    )
}