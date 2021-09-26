import { Box, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';

function ProductCard(props) {
  return (
    <React.Fragment>
      <Stack px={1}>
        <Box
          borderBottom="1px"
          borderColor="secondary"
          bgGradient="linear(to-t, #1c1c1c, transparent )"
          transition="0.8s"
        >
          <Image src={props.image}></Image>
        </Box>
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
