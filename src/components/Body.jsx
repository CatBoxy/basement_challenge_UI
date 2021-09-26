import React from 'react';
import { Stack } from '@chakra-ui/react';

import shirt from '../../public/products/shirt.png';
import hoodie from '../../public/products/hoodie.png';
import cap from '../../public/products/cap.png';

import ProductCard from './ProductCard';

const productsArray = [
  {
    name: 'Black t-shirt',
    price: 7.95,
    image: shirt,
  },
  {
    name: 'Black hoodie',
    price: 13,
    image: hoodie,
  },
  {
    name: 'Black cap',
    price: 23,
    image: cap,
  },
];

function Body() {
  return (
    <React.Fragment>
      <Stack
        p={{ base: 2.5, md: 4 }}
        width="100%"
        direction={{ base: 'column', md: 'column', lg: 'row' }}
      >
        {productsArray.map((tarjeta, index) => {
          return <ProductCard {...tarjeta} key={index} />;
        })}
      </Stack>
    </React.Fragment>
  );
}

export default Body;
