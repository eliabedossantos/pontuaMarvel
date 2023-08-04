import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  font-family: 'Epilogue', sans-serif;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #888;
  font-family: 'Epilogue', sans-serif;
`;

const NotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Oops, página não encontrada</Subtitle>
    </Container>
  );
};

export default NotFound;
