import React from 'react';
import { Heading, Text, Flex, Stack, PseudoBox } from '@chakra-ui/core';
import Navbar from '@/components/Navbar';
import { params } from '@/components/particle';
import Particles from 'react-particles-js';

export default function Contact() {
  return (
    <>
      <Particles params={params} className="particle-about" />
      <Navbar />
      <>
        <Flex
          as="section"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Stack
            textAlign="center"
            borderRadius="10px"
            border="2px solid #555"
            boxShadow="5px 5px 0 #555"
            my="6rem"
            className="stack-contact"
            w="55%"
          >
            <PseudoBox
              _hover={{
                bg: '#fff',
                color: '#000',
                borderRadius: '10px'
              }}
            >
              <Heading
                as="h1"
                fontFamily="Rubik"
                fontSize="2.5rem"
                m="1rem 0 1rem 0"
              >
                Contacts
              </Heading>
              <Text as="p" fontFamily="Rubik" fontSize="1.5rem" m="1rem">
                Name: Peerapat Chanawanno
              </Text>
              <Text as="p" fontFamily="Rubik" fontSize="1.5rem" m="1rem">
                Email: pee35225@gmail.com
              </Text>
              <Text as="p" fontFamily="Rubik" fontSize="1.5rem" m="1rem">
                Phone: 087-501-3255
              </Text>
              <Text as="p" fontFamily="Rubik" fontSize="1.5rem" m="1rem">
                Github: p35225
              </Text>
              <Text as="p" fontFamily="Rubik" fontSize="1.5rem" m="1rem">
                line: pee35225
              </Text>
            </PseudoBox>
          </Stack>
        </Flex>
      </>
    </>
  );
}
