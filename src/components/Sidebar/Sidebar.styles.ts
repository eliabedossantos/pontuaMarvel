import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const SidebarContainer = styled.div`
    width: 300px;
    height: 100vh;
    background-color: #fff;
    box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
`;

export const Logo = styled.img`
    width: 120px;
    height: 36px;
    object-fit: contain;
`;

export const SidebarBody = styled.div`
    padding: 0 26px;
    
    & > div:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const SidebarIcon = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 14px;
`;

export const SidebarItem = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: #000;
    font-size: .9rem;
    font-weight: 500;
    font-family: 'Epilogue', sans-serif;
    cursor: pointer;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 10px;

    &:hover {
        color: ${colors.secondary};
    }
`;

export const  SidebarLogoutButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: #000;
    font-size: .9rem;
    font-weight: 500;
    font-family: 'Epilogue', sans-serif;
    cursor: pointer;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 10px;
    border: none;
    background-color: transparent;

    &:hover {
        color: ${colors.secondary};
    }
`;

