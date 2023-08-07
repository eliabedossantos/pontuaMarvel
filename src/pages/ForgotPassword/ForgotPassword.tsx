import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { 
    Main,
    Header, 
    Logo, 
    Building, 
    
} from "./ForgotPass.styles";
import WhiteLogo from "../../assets/images/logo_pontua_white.png";
import BuildingImage from "../../assets/images/building.png";
import Input from "../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { handleEmail } from "../../redux/actions/userActions";
import CardForm from "../../components/CardForm/CardForm";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { showLoading } from "../../redux/actions";


export default function ForgotPassword(){
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const emailRedux = useSelector((state: any) => state.UserReducer.email);
    const [success, setSuccess] = useState(false);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const handleSendEmail = async () => {
        await sendPasswordResetEmail(emailRedux)
        .then(() => {
            setSuccess(true);
        })
        .catch((error) => {
            console.error('Erro ao enviar e-mail de recuperação de senha:', error);
            setSuccess(false);
        });
    }

    useEffect(() => {
        if (error) {
            swal({
                title: "Erro!",
                text: "Erro ao enviar e-mail de recuperação de senha!",
                icon: "error"
            });
            setSuccess(false);
        }

        if (sending) {
            showLoading(true, dispatch);
        } else {
            showLoading(false, dispatch);
        }
    }, [sending, error]);

    
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
                            title={success ? 'Tudo certo' : 'Recuperar senha'}
                            subtitle="Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha."
                            submitText={success ? 'voltar para o login' : 'enviar link'}
                            showIcon={false}
                            after={success ? ' ;)' : '.'}
                            showButton
                            onSubmit={success ? () => navigateTo('/') : handleSendEmail}
                        >
                            {!success && (
                                <Form>
                                    <Input
                                        value={emailRedux}
                                        placeholder="Informe seu e-mail"
                                        iconComponent={<span>@</span>}
                                        type="email"
                                        onChange={(e: any) => handleEmail(e.target.value, dispatch)}
                                    />
                                </Form>
                            )}
                        </CardForm>
                    </Col>
                </Row>
            </Container>
        </Main>
    )
}
