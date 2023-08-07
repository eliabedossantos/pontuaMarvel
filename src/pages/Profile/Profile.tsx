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
import { useDispatch, useSelector } from "react-redux";
import { showLoading } from "../../redux/actions";
import swal from "sweetalert";
import { config } from "../../util";

const tabs: ITab[] = [
    {
        id: 1,
        name: 'Visão Geral',
    },
    {
        id: 2,
        name: 'Comics',
    },
    {
        id: 3,
        name: 'Series',
    },
    {
        id: 4,
        name: 'Stories',
    },
    {
        id: 5,
        name: 'Events',
    },
];

export default function Profile() {
    const selectedHero = useSelector((state: any) => state.UserReducer.selectedHero);
    const firstHeroStorage = localStorage.getItem(config.criptoFirstHeroSessionStorage);
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState<ITab>(tabs[0]);
    const [hero, setHero] = useState<any>({});
    const [comics, setComics] = useState<any[]>([]);
    const [series, setSeries] = useState<any[]>([]);
    const [stories, setStories] = useState<any[]>([]);
    const [events, setEvents] = useState<any[]>([]);


    function CharacterInfoById() {
        showLoading(true, dispatch)
        getCharacterById(selectedHero !== undefined && selectedHero !== 0 ? selectedHero : firstHeroStorage)
        .then(res => {
            console.log('result', res);
            let heroeInfo = {
                id: res.results[0].id,
                name: res.results[0].name,
                description: res.results[0].description ? res.results[0].description : 'Sem descrição',
                image: res.results[0].thumbnail.path + '.' + res.results[0].thumbnail.extension,
            }
            setHero(heroeInfo);
            if(res.results[0].comics.items.length > 0){
                let comicsArr = res.results[0].comics.items.map((comic: any) => {
                    return comic.name;
                });
                setComics(comicsArr);
            } 
            if(res.results[0].series.items.length > 0){
                let seriesArr = res.results[0].series.items.map((serie: any) => {
                    return serie.name;
                });
                setSeries(seriesArr);
            }
            if(res.results[0].stories.items.length > 0){
                let storiesArr = res.results[0].stories.items.map((story: any) => {
                    return story.name;
                });
                setStories(storiesArr);
            }
            if(res.results[0].events.items.length > 0){
                let eventsArr = res.results[0].events.items.map((event: any) => {
                    return event.name;
                });
                setEvents(eventsArr);
            }
            showLoading(false, dispatch);
        }).catch(err => {
            console.error('Erro na requisição:', err);
            showLoading(false, dispatch);
            swal("Erro!", "Erro ao buscar herói!", "error");
        });
    }

    useEffect(() => {
        selectedHero || firstHeroStorage ? CharacterInfoById() : console.log('Não há herói selecionado!');
    }, [selectedHero, firstHeroStorage]);
    
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
                            <InfoList items={comics} />
                        )}
                        {activeTab.id === 3 && (
                            <InfoList items={series} />
                        )}
                        {activeTab.id === 4 && (
                            <InfoList items={stories} />
                        )}
                        {activeTab.id === 5 && (
                            <InfoList items={events} />
                        )}
                        </Col>
                    </Row>
                </Container>
            </StyledContainer>
        </RowContainer>
    )
}