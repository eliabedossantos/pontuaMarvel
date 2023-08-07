import React, { useState } from "react";
import { ISidebarProps } from "./types";
import { 
    Logo, 
    SidebarBody, 
    SidebarContainer,
    SidebarIcon,
    SidebarItem,
    SidebarLogoutButton
} from "./Sidebar.styles";
import { StyledDivider, StyledDividerContainer } from "../Divider/Divider.styles";
import BlueLogo from "../../assets/images/logo_pontua_blue.svg";
import { IconHome } from "../SVG/IconHome";
import { IconProfile } from "../SVG/IconProfile";
import { colors } from "../../styles/colors";
import { IconLogout } from "../SVG/IconLogout";
import { signOutUser} from '../../services/firebaseActions';
import { config } from '../../util/config';
import swal from 'sweetalert';
import { showLoading } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Sidebar: React.FC<ISidebarProps> = (props) => {
    const dispatch = useDispatch();
    const [hoveredHome, setHoveredHome] = useState<boolean>(false);
    const [hoveredProfile, setHoveredProfile] = useState<boolean>(false);
    const [hoveredLogout, setHoveredLogout] = useState<boolean>(false);
    const path = window.location.pathname;


    const handleSignOut = () => {
        swal({
            title: 'Deseja sair?',
            text: 'Você será deslogado do sistema',
            icon: 'warning',
            buttons: ['Cancelar', 'Sair'],
            dangerMode: true,
        }).then((willDelete) => {
            if(willDelete){
                showLoading(true, dispatch);
                signOutUser().then(() => {
                    console.log('deslogou')
                    localStorage.setItem(config.criptoSessionStorage, JSON.stringify({}));
                    setTimeout(() => {
                        window.location.href = '/'
                        showLoading(false, dispatch);
                    }, 2000)
                }).catch((error) => {
                    console.log('erro ao deslogar', error)
                    showLoading(false, dispatch);
                    swal('Erro ao deslogar', 'Tente novamente', 'error')
                })
            }
        })
    }

    return (
        <SidebarContainer>
            <StyledDividerContainer padding={true}>
                <Logo src={BlueLogo} alt="Logo Pontua" />
            </StyledDividerContainer>
            <SidebarBody>
                <SidebarItem to="/home" onMouseEnter={() => setHoveredHome(true)} onMouseLeave={() => setHoveredHome(false)} active={path === '/home' ? true : false}>
                    <SidebarIcon>
                        <IconHome color={hoveredHome || path === '/home' ? colors.secondary : colors.black}/>
                    </SidebarIcon>
                    Home
                </SidebarItem>
                <SidebarItem to="/profile" onMouseEnter={() => setHoveredProfile(true)} onMouseLeave={() => setHoveredProfile(false)} active={path === '/profile' ? true : false}>
                    <SidebarIcon>
                        <IconProfile color={hoveredProfile || path === '/profile' ? colors.secondary : colors.black}/>
                    </SidebarIcon>
                    Perfil
                </SidebarItem>
            </SidebarBody>
            <StyledDivider />
            <SidebarBody>
                <SidebarLogoutButton onMouseEnter={() => setHoveredLogout(true)} onMouseLeave={() => setHoveredLogout(false)} onClick={handleSignOut}>
                    <SidebarIcon>
                        <IconLogout color={hoveredLogout ? colors.secondary : colors.black}/>
                    </SidebarIcon>
                    Sair
                </SidebarLogoutButton>
            </SidebarBody>
        </SidebarContainer>
    )
}

export default Sidebar;