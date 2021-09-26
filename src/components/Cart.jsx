import React from 'react';
import { Button, Text, Stack } from '@chakra-ui/react';

function Cart() {
  const [open, setOpen] = React.useState(false);

  // Toggles state of cart drawer
  const handleCustomDrawer = setOpen((prevOpen) => !prevOpen);

  return (
    <React.Fragment>
      <Button
        onClick={handleCustomDrawer}
        p={3.5}
        border="1px"
        borderColor="secondary"
        bg="transparent"
        borderRadius="100em"
        h={7}
      >
        <Text color="secondary">CART(0)</Text>
      </Button>
      <Stack className={open === true ? 'isDisplayed' : null}></Stack>
    </React.Fragment>
  );
}

export default Cart;
