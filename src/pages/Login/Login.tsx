import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { 
    Main,
    Header, 
    Logo, 
    Building, 
    Card,
    Title,
    Label,
    ShowPassword
    
} from "./Login.styles";
import WhiteLogo from "../../assets/images/logo_pontua_white.png";
import BuildingImage from "../../assets/images/building.png";
import Input from "../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { modifyInputs } from "../../redux/actions";
import { Eye, EyeSlash } from "phosphor-react";
import { colors } from "../../styles/colors";

export default function Login(){
    const dispatch = useDispatch();
    const emailRedux = useSelector((state: any) => state.UserReducer.email);
    const passwordRedux = useSelector((state: any) => state.UserReducer.password);
    const [showPassword, setShowPassword] = useState(false);


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const renderPasswordButton = () => {
        return(
            <ShowPassword 
            type="button"
            onClick={handleShowPassword}>
                {!showPassword ? (
                    <Eye size={22} color={colors.gray} /> 
                ) : (
                    <EyeSlash size={22} color={colors.gray} />
                )}
            </ShowPassword>
        )
    }

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
                <Row className="justify-content-between">
                    <Col lg={7} md={7} sm={12} xs={12}>
                        <Building src={BuildingImage} alt="Desenho de um prédio com 6 andares, com janelas e uma porta no centro do edifício." />
                    </Col>
                    <Col lg={4} md={5} sm={12} xs={12}>
                        <Card>
                            <Title>
                                Bem-vindo
                            </Title>
                            <Label>
                                Informe as suas credenciais de acesso ao portal
                            </Label>
                            <Form>
                                <Input
                                    value={emailRedux}
                                    placeholder="Informe seu e-mail"
                                    iconComponent={<span>@</span>}
                                    type="email"
                                    onChange={(e: any) => handleEmail(e.target.value)}
                                />
                                <Input
                                    value={passwordRedux}
                                    placeholder="Informe sua senha"
                                    iconComponent={renderPasswordButton()}
                                    type={!showPassword ? "password" : "text"}
                                    onChange={(e: any) => handlePassword(e.target.value)}
                                />

                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Main>
    )
}