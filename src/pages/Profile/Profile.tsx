import React, { useState } from "react";
import { RowContainer } from "../../components/RowContainer/RowContainer.styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import {  StyledDividerContainer } from "../../components/Divider/Divider.styles";
import { StyledContainer } from "./Profile.styles";
import TitleProfile from "../../components/TitleProfile/TitleProfile";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import { ITab } from "./types";

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
    
    return (
        <RowContainer>
            <Sidebar />
            <StyledContainer>
                <StyledDividerContainer padding={true}/>
                <Container fluid>
                    <Row>
                        <Col>
                            <TitleProfile heroName="A-Bomb" />
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
                </Container>
            </StyledContainer>
        </RowContainer>
    )
}