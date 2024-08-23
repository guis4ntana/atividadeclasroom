// src/components/Products.js
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = ({ products }) => (
  <ProductsContainer>
    {products.map((product) => (
      <Card key={product.id} product={product} />
    ))}
  </ProductsContainer>
);

export default Products;
