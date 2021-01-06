import { graphql } from 'gatsby';

export const productFields = graphql`
  fragment ShopifyProductFields on ShopifyProduct {
    shopifyId
    title
    description
    images {
      id
      localFile {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

export const productTileFields = graphql`
  fragment ProductTileFields on ShopifyProduct {
    handle
    priceRange {
      minVariantPrice {
        amount
      }
    }
  }
`;
