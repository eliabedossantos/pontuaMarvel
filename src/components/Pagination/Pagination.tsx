import { ArrowLeft, ArrowRight } from 'phosphor-react';
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { PaginationContainer, StyledPagination } from './Pagination.styles';
import { CustomPaginationProps } from './types';


const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const visiblePages: Array<number | 'ellipsis-start' | 'ellipsis-end'> = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) {
        visiblePages.push(i);
      }
      visiblePages.push('ellipsis-end');
      visiblePages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      visiblePages.push(1);
      visiblePages.push('ellipsis-start');
      for (let i = totalPages - 4; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      visiblePages.push(1);
      visiblePages.push('ellipsis-start');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        visiblePages.push(i);
      }
      visiblePages.push('ellipsis-end');
      visiblePages.push(totalPages);
    }

    return visiblePages.map((page) =>
      page === 'ellipsis-start' || page === 'ellipsis-end' ? (
        <Pagination.Ellipsis key={`ellipsis-${page}`} />
      ) : (
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Pagination.Item>
      )
    );
  };

  return (
    <PaginationContainer>
        <StyledPagination>
            <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            > 
                <ArrowLeft size={22} color={colors.primaryExtraLight} weight="bold" />
                Anterior
            </Pagination.Prev>
            {renderPageNumbers()}
        <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        > 
            Próxima
            <ArrowRight size={22} color={colors.primaryExtraLight}  weight="bold" />
            </Pagination.Next>
        </StyledPagination>
    </PaginationContainer>
  );
};

export default CustomPagination;
