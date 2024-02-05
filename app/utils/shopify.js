import { gql, GraphQLClient } from "graphql-request";

const storefrontAccessToken = process.env.1038c87f6db79531a6b94235343d3eea;

const endpoint = process.env.perfect-interior-design.myshopify.com

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
  });



  export async function getProducts() {
    const getAllProductsQuery = gql`
      {
        products(first: 10) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              featuredImage {
                altText
                url
              }
            }
          }
        }
      }
    `;
  }
  
  


  export async function getProducts() {
    const getAllProductsQuery = gql`
     // Omitted for brevity
    `;
    try {
      return await graphQLClient.request(getAllProductsQuery);
    } catch (error) {
      throw new Error(error);
    }
  }
