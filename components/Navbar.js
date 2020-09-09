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
  return (
    <>
      <StickyNav
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        width="100%"
        as="nav"
        p={{ base: '8px', sm: '8px', md: '16px', lg: '16px' }}
        fontWeight="bold"
        // flexWrap="wrap"
      >
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            // p={[1, 4]}
            px={{ base: '8px', sm: '8px', md: '16px', lg: '16px' }}
            mx={{ base: '8px', sm: '8px', md: '32px', lg: '32px' }}
            borderBottom="3px solid tomato"
            _hover={{
              transition: 'all 0.3s ease-out',
              backgroundColor: '#0467FB'
            }}
            _active={{
              transform: 'scale(1.3)'
            }}
          >
            Home
          </Button>
        </NextLink>
        <NextLink href="/About" passHref>
          <Button
            as="a"
            variant="ghost"
            // p={[1, 4]}
            px={{ base: '8px', sm: '8px', md: '16px', lg: '16px' }}
            mx={{ base: '8px', sm: '8px', md: '32px', lg: '32px' }}
            borderBottom="3px solid tomato"
            _hover={{
              transition: 'all 0.3s ease-out',
              backgroundColor: '#0467FB'
            }}
            _active={{
              transform: 'scale(1.3)'
            }}
          >
            About
          </Button>
        </NextLink>
        <NextLink href="/Projects" passHref>
          <Button
            as="a"
            variant="ghost"
            // p={[1, 4]}
            px={{ base: '8px', sm: '8px', md: '16px', lg: '16px' }}
            mx={{ base: '8px', sm: '8px', md: '32px', lg: '32px' }}
            borderBottom="3px solid tomato"
            _hover={{
              transition: 'all 0.3s ease-out',
              backgroundColor: '#0467FB'
            }}
            _active={{
              transform: 'scale(1.3)'
            }}
          >
            Projects
          </Button>
        </NextLink>
        <NextLink href="/Contact" passHref>
          <Button
            as="a"
            variant="ghost"
            // p={[1, 4]}
            px={{ base: '8px', sm: '8px', md: '16px', lg: '16px' }}
            mx={{ base: '8px', sm: '8px', md: '32px', lg: '32px' }}
            borderBottom="3px solid tomato"
            _hover={{
              transition: 'all 0.3s ease-out',
              backgroundColor: '#0467FB'
            }}
            _active={{
              transform: 'scale(1.3)'
            }}
          >
            Contact
          </Button>
        </NextLink>
      </StickyNav>
      <Flex as="main" justifyContent="center" flexDirection="column" px={8}>
        {children}
      </Flex>
    </>
  );
};

export default Navbar;
