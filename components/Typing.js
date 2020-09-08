import React from 'react';
import Typed from 'react-typed';
import { Button, Flex, Box, Heading } from '@chakra-ui/core';

export default function Typing() {
  return (
    <Box
      className="Type-Heading1"
      p={1 / 2}
      // mx={16}
      minH="75vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        className="Type-Heading2"
        bg="rgba(23, 25, 35, 0.8)"
        border="1px solid #e2e8f0"
      >
        <Heading
          className="Type-Heading3"
          as="h1"
          pt={8}
          fontSize="3rem"
          ml="60px"
        >
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={[
              "Hi, my name is <span class='accent'>Peerapat</span>.",
              "I'm a <span class='accent'>Fresh Graduate</span>.",
              "I'm an <span class='accent'>Gamer</span>.",
              "I'm a <span class='accent'>creative</span> person."
            ]}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
            className="typed"
          />
        </Heading>
        <Box as="p" fontSize="1.5rem" maxW="600px" ml="35px" p="0 20px 40px 0">
          Hi, this is my example portfolio. My name's Peerapat Chanawanno. If
          you want to know more about me, you can click about page.
        </Box>
      </Box>
    </Box>
  );
}
