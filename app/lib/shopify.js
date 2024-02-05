

import Client from "shopify-buy";
    export const shopifyClient = Client.buildClient({
      storefrontAccessToken: process.env.f825539bdca754484bf6206760f0bd06,
      domain: process.env.perfect-interior-design.myshopify.com,
    });


    export const parseShopifyResponse = (response) =>  JSON.parse(JSON.stringify(response));