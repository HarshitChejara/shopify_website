// 'use client'

import * as React from 'react';
    // import { useRouter } from 'next/router';
    import { useRouter } from 'next/navigation';


    import Container from '@mui/material/Container';
    import Box from '@mui/material/Box';


    import Navigation from '../../components/Navigation';
    import BreadcrumbsNavigation from '../../components/BreadcrumbsNavigation';
    import ProductsList from '../../components/ProductsList';
    import { shopifyClient, parseShopifyResponse } from '../../lib/shopify'
    // import PRODUCTS from '../../data.js';


    // export default function CollectionPage() {
    //   const router = useRouter()
    //   const { collectionName } = router.query
    //   const products = PRODUCTS.filter(product => product.collection === collectionName)
    //   return (
    //     <Box>
    //       <Navigation />
    //       <Container maxWidth="lg">
    //         <BreadcrumbsNavigation collection={collectionName} />
    //         <ProductsList products={products} />
    //       </Container>
    //     </Box>
    //   );
    // }


    export default function CollectionPage({products, collectionName}) {
        return (
          <Box>
            <Navigation />
            <Container maxWidth="lg">
              <BreadcrumbsNavigation title={collectionName} />
              <ProductsList products={products} />
            </Container>
          </Box>
        );
      }




      export const getServerSideProps = async ({params}) => {
        const { collectionName } = params
        // Fetch all the collections
        const collectionsData = await shopifyClient.collection.fetchAllWithProducts();
        const collections = parseShopifyResponse(collectionsData);
        // Get the right one
        const collection = collections.find(collection => collection.handle === collectionName)
  
  
        return {
         props: {
          collectionName,
          products: collection.products,
        },
       };
      };


    