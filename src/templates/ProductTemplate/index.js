/* eslint-disable jsx-a11y/no-onchange */
import queryString from 'query-string';
import React, { useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { navigate, useLocation } from '@reach/router';

// Local imports
import CartContext from 'context/CartContext';
import { Layout, ImageGallary, ProductQuantityAdder, Button } from 'components';
import { Grid, SelectWrapper, Price } from './styles';
import { SEO } from '../../components';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;

export default function ProductTemplate(props) {
  const { description, images, shopifyId, title } = props.data.shopifyProduct;
  const { search, origin, pathname } = useLocation();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { getProductById } = useContext(CartContext);
  const variantId = queryString.parse(search).variant;

  console.log({ shopifyId });

  const handleVarianChange = e => {
    const newVariant = product?.variants.find(v => v.id === e.target.value);
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      { replace: true }
    );
  };

  useEffect(() => {
    getProductById(shopifyId).then(result => {
      setProduct(result);

      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
  }, [getProductById, shopifyId, variantId]);

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Button onClick={() => navigate(-1)}>Back to products</Button>
      <Grid>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product?.variants.length > 1 && (
                <SelectWrapper>
                  <strong>Variants</strong>
                  <select
                    onChange={handleVarianChange}
                    value={selectedVariant.id}
                  >
                    {product?.variants.map(variant => (
                      <option key={variant.id} value={variant.id}>
                        {variant.title}
                      </option>
                    ))}
                  </select>
                </SelectWrapper>
              )}
              {!!selectedVariant && (
                <>
                  <Price>{selectedVariant.price}</Price>
                  <ProductQuantityAdder
                    available={selectedVariant.available}
                    variantId={selectedVariant.id}
                  />
                </>
              )}
            </>
          )}
        </div>
        <div>
          <ImageGallary
            selectedVariantImageId={selectedVariant?.image.id}
            images={images}
          />
        </div>
      </Grid>
    </Layout>
  );
}
