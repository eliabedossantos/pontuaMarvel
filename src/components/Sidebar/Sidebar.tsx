import React, { useState } from "react";
import { ISidebarProps } from "./types";
import iconHome from "../../assets/icons/icon_home_black.svg";
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

const Sidebar: React.FC<ISidebarProps> = (props) => {
    const [hoveredHome, setHoveredHome] = useState<boolean>(false);
    const [hoveredProfile, setHoveredProfile] = useState<boolean>(false);
    const [hoveredLogout, setHoveredLogout] = useState<boolean>(false);

    return (
        <SidebarContainer>
            <StyledDividerContainer padding={true}>
                <Logo src={BlueLogo} alt="Logo Pontua" />
            </StyledDividerContainer>
            <SidebarBody>
                <SidebarItem to="/home" onMouseEnter={() => setHoveredHome(true)} onMouseLeave={() => setHoveredHome(false)}>
                    <SidebarIcon>
                        <IconHome color={hoveredHome ? colors.secondary : colors.black}/>
                    </SidebarIcon>
                    Home
                </SidebarItem>
                <SidebarItem to="/profile" onMouseEnter={() => setHoveredProfile(true)} onMouseLeave={() => setHoveredProfile(false)}>
                    <SidebarIcon>
                        <IconProfile color={hoveredProfile ? colors.secondary : colors.black}/>
                    </SidebarIcon>
                    Perfil
                </SidebarItem>
            </SidebarBody>
            <StyledDivider />
            <SidebarBody>
                <SidebarLogoutButton onMouseEnter={() => setHoveredLogout(true)} onMouseLeave={() => setHoveredLogout(false)}>
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