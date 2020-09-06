import React from 'react';
import Typed from 'react-typed';
import { Button, Flex, Box } from '@chakra-ui/core';

export default function Typing() {
  return (
    <Box className="Head-typing" p={1 / 2} ml={16}>
      <Box className="head-idk">
        <h1 className="Headline">
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
        </h1>
        <p className="text2">
          Hi, this is my example portfolio. My name's Peerapat Chanawanno. I'm a
          fresh Graduate of 2020 years. I'm very interested and enjoy in Web
          development field.
        </p>
      </Box>
    </Box>
  );
}
