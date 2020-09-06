import React from 'react';
import NextLink from 'next/link';
import { useColorMode, Button, Flex, Box, IconButton } from '@chakra-ui/core';
import styled from '@emotion/styled';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Navbar = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="space-between"
        // maxWidth="900px"
        width="100%"
        bg="rgba(23, 25, 35, 0.8)"
        as="nav"
        p={8}
        fontWeight="bold"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]} mr={4} ml={4}>
              Home
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 4]} mr={4} ml={4}>
              About
            </Button>
          </NextLink>
          <NextLink href="/edu" passHref>
            <Button as="a" variant="ghost" p={[1, 4]} mr={4} ml={4}>
              Education
            </Button>
          </NextLink>
          <NextLink href="/experience" passHref>
            <Button as="a" variant="ghost" p={[1, 4]} mr={4} ml={4}>
              Experience
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex as="main" justifyContent="center" flexDirection="column" px={8}>
        {children}
      </Flex>
    </>
  );
};

export default Navbar;
