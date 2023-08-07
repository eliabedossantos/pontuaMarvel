import React, { useEffect, useState } from "react";
import { RowContainer, RowContainerWrapped } from "../../components/RowContainer/RowContainer.styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import { StyledDivider, StyledDividerContainer } from "../../components/Divider/Divider.styles";
import { StyledContainer } from "./Home.styles";
import SearchInput from "../../components/SearchInput/SearchInput";
import CardHero from "../../components/Cardhero/CardHero";
import { mockHeroes } from "../../util/mock/Heroes";
import Pagination from "../../components/Pagination/Pagination";
import { getCharacters } from "../../services/character-rest";
import { selectHero } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [search, setSearch] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);
    const [heroes, setHeroes] = useState<any[]>([]);
    const limit: number = 10;
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleSearch = (value: string) => {
        setSearch(value);
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setOffset((page - 1) * limit);
    }

    
    function CharacterInfo(searchHero: object) {
        getCharacters({
            ...searchHero,
            limit: limit,
            offset: offset,
        })
        .then(res => {
            setTotalPages(Math.ceil(res.total / limit)); 
            let heroes = res.results.map((hero: any) => {
                return {
                    id: hero.id,
                    name: hero.name,
                    description: hero.description ? hero.description : 'Sem descrição',
                    image: hero.thumbnail.path + '.' + hero.thumbnail.extension,
                }
            });
            setHeroes(heroes); 
            console.log('result', res.results);
        })
        .catch(err => {
            console.error('Erro na requisição:', err);
        });
    }
    
    useEffect(() => {
        CharacterInfo(search ? { nameStartsWith: search } : {});
    }, [search, offset]);

    const handleSelectHero = (id: number) => {
        console.log('id', id);
        selectHero(id, dispatch);
        navigateTo('/profile');
    }

    return (
        <RowContainer>
            <Sidebar />
            <StyledContainer>
                <StyledDividerContainer padding={true}>
                    <SearchInput 
                        onChange={(text) => handleSearch(text)} 
                        value={search} 
                        placeholder="Busque um agente" 
                    />
                </StyledDividerContainer>
                <Container fluid>
                    <Row>
                        <Col>
                            <RowContainerWrapped>
                                {heroes.map((hero, index) => {
                                    return (
                                        <CardHero 
                                            key={index} 
                                            image={hero.image} 
                                            name={hero.name}  
                                            description={hero.description} 
                                            id={hero.id}
                                            onClick={(id) => handleSelectHero(id)}
                                        />
                                    )
                                })}
                            </RowContainerWrapped>
                            <StyledDivider />
                            {heroes.length > 0 && (
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            )}
                        </Col>
                    </Row>
                </Container>
            </StyledContainer>
        </RowContainer>
    )
}