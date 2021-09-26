import React from 'react';
import Marquee from 'react-fast-marquee';
import { Text } from '@chakra-ui/react';

function Ticker() {
  return (
    <React.Fragment>
      <Marquee gradient={false}>
        <Text color="secondary" pt={0.5} pb={0.5} fontSize="xl">
          A man can't have enough basement. swag <strong>—</strong> A man can't
          have enough basement. swag <strong>—</strong> A man can't have enough
          basement. swag <strong>—</strong> A man can't have enough basement.
          swag <strong>—</strong> A man can't have enough basement. swag
          <strong>—</strong>
        </Text>
      </Marquee>
    </React.Fragment>
  );
}

export default Ticker;
