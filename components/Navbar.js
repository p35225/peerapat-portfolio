import React from 'react';
import NextLink from 'next/link';
import { Button, Flex } from '@chakra-ui/core';
import styled from '@emotion/styled';

const BlurNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Navbar = ({ children }) => {
  return (
    <>
      <BlurNav
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        width="100%"
        as="nav"
        p={{ base: '8px', sm: '8px', md: '16px', lg: '16px' }}
        fontWeight="Bold"
      >
        <NextLink href="/" passHref>
          <Button
            as="a"
            fontSize="1.3rem"
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
        <NextLink href="/about" passHref>
          <Button
            as="a"
            fontSize="1.3rem"
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
            fontSize="1.3rem"
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
            fontSize="1.3rem"
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
      </BlurNav>
      {/* <Flex as="main" justifyContent="center" flexDirection="column" px={8}>
        {children}
      </Flex> */}
    </>
  );
};

export default Navbar;
