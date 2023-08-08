import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { 
    Main,
    Header, 
    Logo, 
    Building,
    ButtonEnter, 
    
} from "./SelectHero.styles";
import WhiteLogo from "../../assets/images/logo_pontua_white.png";
import BuildingImage from "../../assets/images/building.png";
import { useDispatch, useSelector } from "react-redux";
import CardForm from "../../components/CardForm/CardForm";
import DropDownCustom from "../../components/Dropdown/DropDown";
import { ISelectedHero } from "./types";
import { selectHero } from "../../redux/actions/userActions";
import { getCharacters } from "../../services/character-rest";
import swal from "sweetalert";
import { config } from "../../util";

export default function SelectHero(){
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [offset, setOffset] = useState<number>(0);
    const [heroes, setHeroes] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedHero, setSelectedHero] = useState<ISelectedHero>({});
    const limit: number = 10;

    function CharacterInfo(searchHero: object = {}) {
        setLoading(true);
        getCharacters({
            limit: limit,
            offset: offset,
        })
        .then(res => {
            let heroesArr = res.results.map((hero: any) => {
                return {
                    id: hero.id,
                    name: hero.name,
                    description: hero.description ? hero.description : 'Sem descrição',
                    image: hero.thumbnail.path + '.' + hero.thumbnail.extension,
                }
            });
            setHeroes(prevState => prevState !== heroesArr ? [...prevState, ...heroesArr] : heroesArr);
            setLoading(false);
            console.log('result', res.results);
        })
        .catch(err => {
            console.error('Erro na requisição:', err);
            setLoading(false);
            swal({
                title: "Erro!",
                text: "Erro ao buscar os dados!",
                icon: "error"
            });
        });
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setOffset((page) * limit);
        CharacterInfo({});
    };

    const handleSelectHero = (hero: any) => {
        setSelectedHero(hero);
        selectHero(hero.id, dispatch);
        localStorage.setItem(config.criptoFirstHeroSessionStorage, hero.id);
        console.log(hero);
    }

    useEffect(() => {
        CharacterInfo();
    }, [currentPage, offset]);

    

    return(
        <Main>
            <Container>
                <Row>
                    <Col>
                        <Header>
                            <Logo 
                                src={WhiteLogo}
                                alt="Logo da empresa Pontua. A palavra 'Pontua' é exibida em cor branca, com 1/4 do O destacado em vermelho no canto superior esquerdo. Há um ponto final vermelho após o texto Pontua" />
                        </Header>
                    </Col>
                </Row>
            </Container>
            <Container className="pt-3">
                <Row className="justify-content-end gap-5">
                    <Col lg={6} md={5} sm={12} xs={12} className="d-none d-md-block">
                        <Building src={BuildingImage} alt="Desenho de um prédio com 6 andares, com janelas e uma porta no centro do edifício." />
                    </Col>                                                                                                                                          
                    <Col lg={4} md={5} sm={12} xs={12}>
                        <CardForm
                            title="Selecione o seu agente mais legal"
                            subtitle="Tenha a visão completa do seu agente."
                            submitText={'entrar'}
                            showIcon={false}
                            after="."
                            showButton={false}
                            footer={
                                <ButtonEnter as={Link} to="/profile">
                                    Entrar
                                </ButtonEnter>
                            }
                        >
                            <DropDownCustom
                                options={heroes}
                                onChange={(option: any) => handleSelectHero(option)}
                                selected={selectedHero}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </CardForm>
                    </Col>
                </Row>
            </Container>
        </Main>
    )
}
