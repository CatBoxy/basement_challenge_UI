import { Box, Stack, Image } from '@chakra-ui/react';
import React from 'react';

import useWindowSize from '../assets/utils/useWindowSize';

import HeaderSimbols from './HeaderSimbols';
import Ticker from './Ticker';
import Cart from './Cart';

function Header() {
  const { width } = useWindowSize();

  return (
    <React.Fragment>
      <Stack bg="primary">
        <Stack
          p={4}
          direction="row"
          width="100%"
          justifyContent="space-between"
        >
          <Stack justifyContent="center" alignItems="center">
            {width > 992 ? (
              <Image h={4} src="../../logo.svg" alt="Basement logo" />
            ) : (
              <Image src="../../favicon.ico" alt="Basement logo" h="35px" />
            )}
          </Stack>
          {width > 992 ? <HeaderSimbols /> : null}
          <Cart></Cart>
        </Stack>
        <Stack px={4} justifyContent="center">
          <Image src="../../header.svg"></Image>
        </Stack>
      </Stack>
      <Box mt={8} borderTop="1px" borderBottom="1px" borderColor="secondary">
        <Ticker />
      </Box>
    </React.Fragment>
  );
}

export default Header;
