import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { 
    Main,
    Header, 
    Logo, 
    Building, 
    
} from "./SelectHero.styles";
import WhiteLogo from "../../assets/images/logo_pontua_white.png";
import BuildingImage from "../../assets/images/building.png";
import { useDispatch } from "react-redux";
import CardForm from "../../components/CardForm/CardForm";

export default function SelectHero(){
    const dispatch = useDispatch();

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
                    <Col lg={6} md={5} sm={12} xs={12}>
                        <Building src={BuildingImage} alt="Desenho de um prédio com 6 andares, com janelas e uma porta no centro do edifício." />
                    </Col>                                                                                                                                          
                    <Col lg={4} md={5} sm={12} xs={12}>
                        <CardForm
                            title="Selecione o seu agente mais legal"
                            subtitle="Tenha a visão completa do seu agente."
                            submitText={'entrar'}
                            showIcon={false}
                            afterContent="."
                            showButton={false}
                        >
                            
                        </CardForm>
                    </Col>
                </Row>
            </Container>
        </Main>
    )
}
