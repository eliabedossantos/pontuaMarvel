import React from "react";
import { ITabNavigationProps } from "./types";
import { colors } from "../../styles/colors";
import { TabNavigationContainer, TabNavigationItem } from "./TabNavigation.styles";
import { StyledDividerContainer } from "../Divider/Divider.styles";

const TabNavigation: React.FC<ITabNavigationProps> = (props) => {
    return(
        <StyledDividerContainer padding={false}>
            <TabNavigationContainer>
                {props.tabs && props.tabs.map((tab, index) => (
                    <div key={index} className="position-relative">
                        <TabNavigationItem isActive={props.activeTab.id === tab.id} onClick={() => props.onTabChange && props.onTabChange(tab)}
                        >
                            <span>{tab.name}</span>
                        </TabNavigationItem>
                        {props.activeTab.id === tab.id && (
                            <div style={{ 
                                width: "100%", 
                                height: "2px", 
                                backgroundColor: colors.primary,
                                position: "absolute",
                                bottom: "-1.5rem", 
                                left: 0
                            }} />
                        )}
                    </div>
                ))}
            </TabNavigationContainer>
        </StyledDividerContainer>
    );
}

export default TabNavigation;

