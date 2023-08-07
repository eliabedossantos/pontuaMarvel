import React, { useEffect, useState } from "react";
import { RowContainer } from "../../components/RowContainer/RowContainer.styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import {  StyledDividerContainer } from "../../components/Divider/Divider.styles";
import { StyledContainer } from "./Profile.styles";
import TitleProfile from "../../components/TitleProfile/TitleProfile";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import { ITab } from "./types";
import CardHero from "../../components/Cardhero/CardHero";
import InfoList from "../../components/InfoList/InfoList";
import { getCharacterById } from "../../services/character-rest";
import { useSelector } from "react-redux";

const tabs: ITab[] = [
    {
        id: 1,
        name: 'Visão Geral',
    },
    {
        id: 2,
        name: 'Teams',
    },
    {
        id: 3,
        name: 'Powers',
    },
    {
        id: 4,
        name: 'Species',
    },
    {
        id: 5,
        name: 'Authors',
    },
];

export default function Profile() {
    const [activeTab, setActiveTab] = useState<ITab>(tabs[0]);
    const [hero, setHero] = useState<any>({});
    const selectedHero = useSelector((state: any) => state.UserReducer.selectedHero);

    function CharacterInfoById() {
        getCharacterById(selectedHero).then(res => {
            console.log('result', res);
            let heroeInfo = {
                id: res.results[0].id,
                name: res.results[0].name,
                description: res.results[0].description ? res.results[0].description : 'Sem descrição',
                image: res.results[0].thumbnail.path + '.' + res.results[0].thumbnail.extension,
            }
            setHero(heroeInfo);
        }).catch(err => {
            console.error('Erro na requisição:', err);
        });
    }

    useEffect(() => {
        selectedHero && CharacterInfoById();
    }, [selectedHero]);
    
    return (
        <RowContainer>
            <Sidebar />
            <StyledContainer>
                <StyledDividerContainer padding={true}/>
                <Container fluid>
                    <Row>
                        <Col>
                            <TitleProfile heroName={hero.name} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TabNavigation 
                                tabs={tabs}
                                activeTab={activeTab}
                                onTabChange={(tab) => setActiveTab(tab)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {activeTab.id === 1 && (
                            <CardHero 
                                showAllContent={true}
                                name={hero.name}
                                description={hero.description}
                                image={hero.image}
                            />  
                        )}
                        {activeTab.id === 2 && (
                            <InfoList items={['Avengers', 'Defenders']} />
                        )}
                        </Col>
                    </Row>
                </Container>
            </StyledContainer>
        </RowContainer>
    )
}