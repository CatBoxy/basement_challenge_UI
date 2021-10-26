import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  Icon,
  Image,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';

import useWindowSize from '../assets/utils/useWindowSize';
import cartTitle from '../../public/cartTitle.svg';
import checkout from '../../public/checkout.svg';

import CartItem from './CartItem';

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { width } = useWindowSize();

  let drawerWidth = '';
  let drawerVariant = '';
  width >= 992
    ? (drawerWidth = 'lg') && (drawerVariant = 'wide')
    : (drawerWidth = 'full') && (drawerVariant = 'mobile');

  const [cart, setCart] = useState([]);

  const renderProducts = () => {
    onOpen();
    const localData = localStorage.getItem('cart');
    const localCart = JSON.parse(localData);
    localCart ? setCart(localCart) : setCart([]);
  };

  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  return (
    <React.Fragment>
      <Button onClick={renderProducts}>
        <Text color="secondary">CART(0)</Text>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={drawerWidth}
        variant={drawerVariant}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="cart" onClick={onClose} p={0} paddingBottom={2}>
                <Text fontSize="2xl">
                  <Icon as={BsArrowRight} color="secondary" />
                  CLOSE
                </Text>
              </Button>
            </Box>
            <Stack justifyContent="center">
              <Image src={cartTitle} />
            </Stack>
          </DrawerHeader>

          <DrawerBody p={{ base: 3, lg: 4 }}>
            <Stack>
              {cart.map((card, index) => {
                return (
                  <CartItem
                    {...card}
                    cart={cart}
                    setCart={setCart}
                    key={index}
                  />
                );
              })}
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTop={{ base: 0, lg: '1px' }}>
            <Stack
              direction="row"
              w={{ base: '90%', lg: '70%' }}
              justify={{ base: 'space-between', lg: 'flex-start' }}
              borderRight={{ base: 0, lg: '1px' }}
              p={{ base: 1, lg: 3.5 }}
              fontSize="2xl"
            >
              <Box>TOTAL:</Box>
              <Box>{`$${totalPrice}`}</Box>
            </Stack>
            <Box
              w={{ base: '90%', lg: '30%' }}
              display="flex"
              justifyContent="center"
              fontSize={{ base: '4xl', lg: '2xl' }}
              p={3.5}
              borderTop={{ base: '1px', lg: 0 }}
              _hover={{ cursor: 'pointer' }}
            >
              <Image src={checkout} w="100%" />
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
}

export default Cart;
