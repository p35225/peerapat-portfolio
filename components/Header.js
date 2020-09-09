import React from 'react';
import { Box, Flex, Stack, useColorMode, IconButton } from '@chakra-ui/core';
import Typing from '@/components/Typing';
import Chatbox from '@/components/Chatbox';

const Header = () => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" m="4rem auto">
      <Typing />
      <Chatbox />
    </Flex>
  );
};
export default Header;
