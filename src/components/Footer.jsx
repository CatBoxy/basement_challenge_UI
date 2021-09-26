import React from 'react';
import { Stack, Image } from '@chakra-ui/react';

import footer from '../../public/footer.svg';

function Footer(props) {
  return (
    <React.Fragment>
      <Stack p={4}>
        <Image src={footer}></Image>
      </Stack>
    </React.Fragment>
  );
}

export default Footer;
