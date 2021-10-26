import React, { useEffect, useState } from 'react';
import { Stack, Button, Box } from '@chakra-ui/react';

import { useLocalStorage } from '../assets/utils/useLocalStorage';

function CounterButton({ quantity, id, cart, setCart }) {
  const [count, setCount] = useState(quantity);

  const cartItemId = id;

  useEffect(() => {
    setCount(quantity);
  });

  const handleIncrement = () => {
    setCount((count) => count + 1);
    const cartCopy = [...cart];

    const newArray = cartCopy.map((product) => {
      if (product.id === cartItemId) {
        product.quantity = count + 1;
        return product;
      }
      return product;
    });
    setLocalCart(newArray);
    setCart(newArray);
  };

  const handleDecrement = () => {
    count > 0 ? setCount((count) => count - 1) : count;
    if (count === 0) {
      const cartCopy = [...cart];
      const newArray = cartCopy.filter((product) => {
        return product.id !== cartItemId;
      });
      setLocalCart(newArray);
      setCart(newArray);
    } else {
      const cartCopy = [...cart];
      const newArray = cartCopy.map((product) => {
        if (product.id === cartItemId) {
          product.quantity = product.quantity - 1;
          return product;
        }
        return product;
      });
      setLocalCart(newArray);
      setCart(newArray);
    }
  };

  const [localCart, setLocalCart] = useLocalStorage('cart', []);

  return (
    <React.Fragment>
      <Stack
        direction="row"
        border="1px"
        borderColor="secondary"
        borderRadius="100em"
        fontSize={{ base: 'md', md: 'lg' }}
      >
        <Button variant="cart" p={2} onClick={handleDecrement}>
          -
        </Button>
        <Box m="0">{`${count}`}</Box>
        <Button variant="cart" p={2} onClick={handleIncrement}>
          +
        </Button>
      </Stack>
    </React.Fragment>
  );
}

export default CounterButton;
