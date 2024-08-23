// src/components/Card.js
import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: brown;
`;

const CardTitle = styled.h2`
  margin: 16px 0;
  
`;

const CardDescription = styled.p`
  color: #777;
`;

const Card = ({ product }) => (
  <CardContainer>
    <Image src={product.image} alt={product.title} />
    <CardTitle>{product.title}</CardTitle>
    <CardDescription>{product.description}</CardDescription>
  </CardContainer>
);

export default Card;
