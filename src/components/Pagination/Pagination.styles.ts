// components/Pagination/Pagination.styles.ts
import { Pagination } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const StyledPagination = styled(Pagination)`
    margin-top: 20px;
    margin-bottom: 20px;
    width: fit-content;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

    .page-link {
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: ${colors.primaryExtraLight};
        font-family: 'Epilogue', sans-serif;
        font-size: 14px;
        border-color: ${colors.border};
        outline: none !important;
    }

    .page-link span {
        color: ${colors.primaryLight};
    }

    .page-item.active .page-link {
        background-color: ${colors.white};
        border-color: ${colors.border};
        color: ${colors.primaryLight};
        font-weight: 600;
    }

    .page-item.disabled .page-link {
        color:red
    }
`;