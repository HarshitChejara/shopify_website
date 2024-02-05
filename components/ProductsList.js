'use server'

import * as React from 'react';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



const Product = ({product, goToProductPage}) => {
    const { id, title, images, variants, handle } = product
    const { src: productImage } = images[0]
    const { price } = variants[0]
    return (
      <ImageListItem
        style={{cursor: 'pointer'}}
        onClick={() => goToProductPage(handle)}>
        <img
          src={`${productImage}?w=250&auto=format`}
          srcSet={`${productImage}?w=250&auto=format&dpr=2 2x`}
          alt={title}
          loading="lazy"
        />
        <ImageListItemBar
          title={title}
          subtitle={<span>Price: {price}</span>}
          position="below"
        />
      </ImageListItem>
    )
 }



export default function ProductsList({products}) {
    const router = useRouter()
    // Navigate to product's page
    const goToProductPage = productHandle => router.push(`/products/${productHandle}`)


//   return (
//     <Box>
//        {
//             (products && products.length > 0) ?
//             <ImageList cols={5} gap={20}>
//             {products.map((product) => (
//                 <ImageListItem
//                   key={product.image}
//                   style={{cursor: 'pointer'}}
//                   onClick={() => goToProductPage(product.handle)}>
//                 {/* Product's image*/}
//                 <img
//                     src={`${product.image}?w=250&fit=crop&auto=format`}
//                     srcSet={`${product.image}?w=250&fit=crop&auto=format&dpr=2 2x`}
//                     alt={product.name}
//                     loading="lazy"
//                 />
//                 {/* Product's name + price under the image */}
//                 <ImageListItemBar
//                     title={product.name}
//                     subtitle={<span>Price: {product.price}</span>}
//                     position="below"
//                 />
//                 </ImageListItem>
//             ))}
//             </ImageList>:
//             <Typography variant="body1" align="center">There are no products in this collection</Typography>
//         }
//     </Box>
//   )
// };



return (
    <Box>
      {
        (products && products.length > 0) ?
        <ImageList cols={5} gap={20}>
          {products.map((product) => (
            <Product
              key={product.handle}
              product={product}
              goToProductPage={goToProductPage}
            />
          ))}
        </ImageList>:
        <Typography variant="body1" align="center">There are no products in this collection</Typography>
      }
    </Box>
  )
};
