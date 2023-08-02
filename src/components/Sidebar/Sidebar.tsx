import React, { useState } from "react";
import { ISidebarProps } from "./types";
import { Logo, SidebarContainer } from "./Sidebar.styles";
import { StyledDividerContainer } from "../Divider/Divider.styles";
import BlueLogo from "../../assets/images/logo_pontua_blue.png";

const Sidebar: React.FC<ISidebarProps> = (props) => {
    return (
        <SidebarContainer>
            <StyledDividerContainer>
                <Logo src={BlueLogo} alt="Logo Pontua" />
            </StyledDividerContainer>
            
        </SidebarContainer>
    )
}

export default Sidebar;