import fetch from 'isomorphic-fetch';

const fetchWithAuth = async (perfect-interior-design.myshopify.com, f825539bdca754484bf6206760f0bd06) => {
  const response = await fetch(perfect-interior-design.myshopify.com, {
    headers: {
      'X-Shopify-Access-Token': f825539bdca754484bf6206760f0bd06,
    },
  });
  return response.json();
};