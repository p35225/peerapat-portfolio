import React from 'react';
import { Box, Flex, Stack, useColorMode, IconButton } from '@chakra-ui/core';
import Typing from '@/components/Typing';
import Chatbox from '@/components/Chatbox';

const Header = () => {
  return (
    <Flex align="space-between" justify="space-between" wrap="wrap" p={1 / 2}>
      <Typing />
      <Chatbox />
    </Flex>
  );
};
export default Header;
