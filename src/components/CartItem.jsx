import React from 'react';
import { Stack, Box, Text, Circle, Image } from '@chakra-ui/react';

import CounterButton from './CounterButton';

function CartItem({
  image,
  name,
  description,
  price,
  quantity,
  id,
  cart,
  setCart,
}) {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        maxH="250px"
        minH="125px"
        h={{ base: '160px', md: '250px', lg: '250px' }}
        border="1px"
        borderColor="secondary"
        p={{ base: 1, lg: 4 }}
        alignItems="center"
      >
        <Stack
          minW="120px"
          w={{ base: '120px', md: '218px', lg: '355px' }}
          h={{ base: '140px', md: '218px', lg: '218px' }}
          bgGradient="linear(to-t, #1c1c1c, transparent )"
          transition="0.8s"
          alignItems="center"
        >
          <Image src={image} h="100%" />
        </Stack>
        <Stack
          h="100%"
          w="100%"
          justifyContent={{
            base: null,
            md: 'space-evenly',
            lg: 'space-between',
          }}
        >
          <Stack>
            <Text
              fontSize={{ base: 'xl', md: 'xl', lg: '4xl' }}
              lineHeight="none"
            >
              {name}
            </Text>
            <Text
              fontSize={{ base: 'sm', sm: 'md', md: 'md', lg: 'lg' }}
              lineHeight="none"
              color="#999999"
            >
              {description}
            </Text>
          </Stack>
          <Stack direction={{ base: 'column', lg: 'row' }}>
            <Stack>
              <Stack
                direction="row"
                lineHeight="30px"
                verticalAlign="middle"
                textAlign="center"
                h="30px"
              >
                <Box fontSize={{ base: 'sm', md: 'sm', lg: 'xl' }}>
                  QUANTITY:
                </Box>
                <CounterButton
                  quantity={quantity}
                  id={id}
                  cart={cart}
                  setCart={setCart}
                />
              </Stack>
              <Stack direction="row" fontSize="xl">
                <Box fontSize={{ base: 'md', lg: 'xl' }}>SIZE:</Box>
                <Circle
                  w={{ base: '26px', lg: '33px' }}
                  h={{ base: '26px', lg: '33px' }}
                  _hover={{
                    border: '1px',
                    cursor: 'pointer',
                  }}
                >
                  S
                </Circle>
                <Circle
                  w={{ base: '26px', lg: '33px' }}
                  h={{ base: '26px', lg: '33px' }}
                  _hover={{
                    border: '1px',
                    cursor: 'pointer',
                  }}
                >
                  M
                </Circle>
                <Circle
                  w={{ base: '26px', lg: '33px' }}
                  h={{ base: '26px', lg: '33px' }}
                  _hover={{
                    border: '1px',
                    cursor: 'pointer',
                  }}
                >
                  L
                </Circle>
                <Circle
                  w={{ base: '26px', lg: '33px' }}
                  h={{ base: '26px', lg: '33px' }}
                  _hover={{
                    border: '1px',
                    cursor: 'pointer',
                  }}
                >
                  XL
                </Circle>
              </Stack>
            </Stack>
            <Stack
              w="100%"
              alignContent="flex-end"
              justifyContent="flex-end"
              alignItems={{ base: 'flex-start', lg: 'flex-end' }}
            >
              <Text
                textAlign="end"
                fontSize={{ base: 'sm', md: 'lg', lg: '4xl' }}
                lineHeight="none"
              >
                {`$${price}`}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

export default CartItem;
