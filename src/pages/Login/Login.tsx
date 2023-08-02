import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { 
    Main,
    Header, 
    Logo, 
    Building, 
    ShowPassword,
    ButtonIcon,
    ForgotPasswordContainer
    
} from "./Login.styles";
import WhiteLogo from "../../assets/images/logo_pontua_white.png";
import BuildingImage from "../../assets/images/building.png";
import LoginIcon from "../../assets/icons/login.svg";
import QuestionIcon from "../../assets/icons/question.svg";
import Input from "../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { Eye, EyeSlash, SignIn } from "phosphor-react";
import { colors } from "../../styles/colors";
import { handleEmail, handlePassword } from "../../redux/actions/userActions";
import CardForm from "../../components/CardForm/CardForm";

export default function Login(){
    const dispatch = useDispatch();
    const emailRedux = useSelector((state: any) => state.UserReducer.email);
    const passwordRedux = useSelector((state: any) => state.UserReducer.password);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)

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

    const submitForm = () => {
        navigate('/select-hero');
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
                <Row className="justify-content-end gap-5">
                    <Col lg={6} md={5} sm={12} xs={12}>
                        <Building src={BuildingImage} alt="Desenho de um prédio com 6 andares, com janelas e uma porta no centro do edifício." />
                    </Col>
                    <Col lg={4} md={5} sm={12} xs={12}>
                        <CardForm
                            title="Bem-vindo"
                            subtitle="Informe as suas credenciais de acesso ao portal"
                            submitText={'entrar'}
                            showIcon={true}
                            icon={<ButtonIcon src={LoginIcon} alt="Ícone login" />}
                            showButton
                            footer={
                                <ForgotPasswordContainer>
                                    <ButtonIcon src={QuestionIcon} alt="Ícone interrogação" />
                                    <Link 
                                        to="/forgot-password"
                                        style={styles.linkButton}
                                    >Esqueceu a senha?</Link>
                                </ForgotPasswordContainer>
                            }
                            after="."
                            onSubmit={submitForm}
                        >
                            <Form onSubmit={(e: any) => e.preventDefault()}>
                                <Input
                                    value={emailRedux}
                                    placeholder="Informe seu e-mail"
                                    iconComponent={<span>@</span>}
                                    type="email"
                                    onChange={(e: any) => handleEmail(e.target.value, dispatch)}
                                />
                                <Input
                                    value={passwordRedux}
                                    placeholder="Informe sua senha"
                                    iconComponent={renderPasswordButton()}
                                    type={!showPassword ? "password" : "text"}
                                    onChange={(e: any) => handlePassword(e.target.value, dispatch)}
                                />

                            </Form>
                        </CardForm>
                    </Col>
                </Row>
            </Container>
        </Main>
    )
}

export const styles = {
    linkButton: {
        color: colors.secondary, 
        textDecoration: 'none',
        fontSize: 12,
        fontFamily: 'Epilogue, sans-serif',
        fontWeight: 400,
    }
}
