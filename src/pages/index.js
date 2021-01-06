import React, { useContext } from 'react';
import { Layout, SEO } from 'components';
import ProductContext from '../context/ProductContext';
import { FeaturedProducts, HomepageCollectionsGrid } from '../components';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  return (
    <Layout>
      <SEO title="Homepage" description="homepage" />
      <HomepageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured Hats'
        )}
      />
      <FeaturedProducts />
    </Layout>
  );
};

export default IndexPage;
