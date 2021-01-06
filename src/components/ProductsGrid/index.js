import React from 'react';
import { ProductTile } from '../ProductTile';
import { ProductsGridWrapper } from './styles';

export function ProductsGrid({ products }) {
  return (
    <ProductsGridWrapper>
      {products?.map(product => (
        <ProductTile
          key={product.shopifyId}
          handle={product.handle}
          minPrice={product.priceRange.minVariantPrice.amount}
          description={product.description}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          title={product.title}
        />
      ))}
    </ProductsGridWrapper>
  );
}
