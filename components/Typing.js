import React from 'react';
import Typed from 'react-typed';
import { Box, Heading } from '@chakra-ui/core';

export default function Typing() {
  return (
    <Box
      zIndex="3"
      className="Type-Heading1"
      my="2rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      flexWrap="wrap"
    >
      <Box
        className="Type-Heading2"
        bg="rgba(23, 25, 35, 0.8)"
        border="1px solid #e2e8f0"
        m="0 20px"
        p="2rem"
      >
        <Heading className="Type-Heading3" as="h1" m="0">
          <Typed
            className="Type-Heading4"
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={[
              "Hi, my name is <span class='accent'>Peerapat</span>.",
              "I'm a <span class='accent'>Software Developer</span>.",
              "I'm an <span class='accent'>Gamer</span>.",
              "I'm a <span class='accent'>Coffee Lover</span>."
            ]}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
            className="typed"
          />
        </Heading>
        <Box
          as="p"
          fontSize="1.5rem"
          maxW="600px"
          // mx="35px"
          p="0 20px 40px 0"
          // flexWrap="wrap"
          // justifyContent="center"
          // alignItems="center"
        >
          Hi, this is my portfolio. If you want to know more about me, you can
          click on about page.
        </Box>
      </Box>
    </Box>
  );
}
