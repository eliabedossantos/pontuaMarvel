import styled from 'styled-components';

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
    padding: 26px;
    
    & > div:not(:last-child) {
        margin-bottom: 20px;
    }
    
`;