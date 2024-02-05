import Koa from 'koa';
import shopifyAuth from '@shopify/koa-shopify-auth';

const app = new Koa();

app.use(
  shopifyAuth({
    apiKey: process.env.SHOPIFY_API_KEY,
    secret: process.env.SHOPIFY_API_SECRET,
    shopOrigin: process.env.SHOPIFY_SHOP_DOMAIN,
    scopes: ['read_products', 'write_products'], // Adjust scopes as needed
    redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
  })
);