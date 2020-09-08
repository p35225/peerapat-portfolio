import React from 'react';
import NextLink from 'next/link';
import { useColorMode, Button, Flex, Box, IconButton } from '@chakra-ui/core';
import styled from '@emotion/styled';

// const StickyNav = styled(Flex)`
//   position: sticky;
//   z-index: 10;
//   top: 0;
// `;

const Navbar = ({ children }) => {
  return (
    <>
      <Flex
        top="0"
        position="sticky"
        zIndex="10"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="space-between"
        width="100%"
        bg="rgba(23, 25, 35, 0.8)"
        as="nav"
        p={8}
        fontWeight="bold"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 4]}
              mx={8}
              _hover={{
                transition: 'all 0.3s ease-out',
                bg: '#fff',
                backgroundColor: '#0467FB'
              }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 4]}
              mx={8}
              _hover={{
                transition: 'all 0.3s ease-out',
                bg: '#fff',
                backgroundColor: '#0467FB'
              }}
            >
              About
            </Button>
          </NextLink>
          <NextLink href="/edu" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 4]}
              mx={8}
              _hover={{
                transition: 'all 0.3s ease-out',
                bg: '#fff',
                backgroundColor: '#0467FB'
              }}
            >
              Education
            </Button>
          </NextLink>
          <NextLink href="/experience" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 4]}
              mx={8}
              _hover={{
                transition: 'all 0.3s ease-out',
                bg: '#fff',
                backgroundColor: '#0467FB'
              }}
            >
              Experience
            </Button>
          </NextLink>
        </Box>
      </Flex>
      <Flex as="main" justifyContent="center" flexDirection="column" px={8}>
        {children}
      </Flex>
    </>
  );
};

export default Navbar;
