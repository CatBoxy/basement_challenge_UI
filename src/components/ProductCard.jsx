import { Box, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';

import { useLocalStorage } from '../assets/utils/useLocalStorage';
import addToCart from '../../public/addToCart.svg';

function ProductCard(props) {
  // initialize array for storing products
  const storageArray = [];

  const buildCartArray = (cartItem) => {
    // parse local storage array "cart"
    const localData = localStorage.getItem('cart');
    const localCart = JSON.parse(localData);
    const { id } = cartItem;

    if (!localCart) {
      // if no local storage data, push product to array and store on local storage
      storageArray.push(cartItem);
      setCart(storageArray);
    } else {
      // check if item exists in local storage array
      const existingItem = localCart.find((cartItem) => cartItem.id === id);

      if (!existingItem) {
        // If product doesn't exist, update local storage
        const cartCopy = [...localCart];
        cartCopy.push(cartItem);

        setCart(cartCopy);
      }
    }
  };

  const [cart, setCart] = useLocalStorage('cart', []);

  return (
    <React.Fragment>
      <Stack
        px={1}
        _hover={{ cursor: 'pointer' }}
        position="relative"
        fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
      >
        <Stack
          borderBottom="1px"
          borderColor="secondary"
          bgGradient="linear(to-t, #1c1c1c, transparent )"
          transition="0.8s"
          className="container"
          position="relative"
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            buildCartArray(props);
          }}
        >
          <Box
            position="absolute"
            zIndex="1"
            transition="0.3s"
            opacity="0"
            sx={{
              '.container:hover &': {
                opacity: '1',
              },
            }}
          >
            <Image src={addToCart} />
          </Box>
          <Image src={props.image} position="relative" />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Text color="secondary">{props.name}</Text>
          </Box>
          <Box>
            <Text color="secondary">${props.price}</Text>
          </Box>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

export default ProductCard;
