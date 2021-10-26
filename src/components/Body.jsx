import React from 'react';
import { Stack } from '@chakra-ui/react';

import { productsArray } from '../../public/products/products';

import ProductCard from './ProductCard';

function Body(setStoredData) {
  return (
    <React.Fragment>
      <Stack
        p={{ base: 2.5, md: 4 }}
        width="100%"
        direction={{ base: 'column', md: 'column', lg: 'row' }}
      >
        {productsArray.map((card, index) => {
          return <ProductCard {...card} key={index} />;
        })}
      </Stack>
    </React.Fragment>
  );
}

export default Body;
