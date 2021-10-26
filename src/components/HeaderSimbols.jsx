import { Stack, Icon } from '@chakra-ui/react';
import React from 'react';
import { WiMoonAltThirdQuarter } from 'react-icons/wi';
import { MdHd, MdHighQuality } from 'react-icons/md';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { RiAlertFill } from 'react-icons/ri';

function HeaderSimbols() {
  return (
    <Stack spacing={1} direction="row" alignItems="center">
      <Icon as={WiMoonAltThirdQuarter} color="secondary" />
      <Icon as={MdHd} color="secondary" />
      <Stack
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        border="1px"
        borderColor="secondary"
        width="50px"
        height="14px"
        overflow="hidden"
      >
        <Icon
          as={IoMdCloseCircleOutline}
          color="secondary"
          position="absolute"
        />
      </Stack>
      <Icon as={MdHighQuality} color="secondary" />
      <Icon as={RiAlertFill} color="secondary" />
    </Stack>
  );
}

export default HeaderSimbols;
