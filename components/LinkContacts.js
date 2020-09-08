import React from 'react';
import { Flex, Link, IconButton, Divider, Box } from '@chakra-ui/core';

export default function LinkContacts() {
  return (
    <Flex align="center" my={4} direction="row">
      <div>
        <Link href="https://github.com/p35225" title="GitHub" isExternal>
          <IconButton
            aria-label="GitHub"
            icon="github"
            size="lg"
            color="gray.500"
            variant="ghost"
            _hover={{
              transition: 'all 0.3s ease-out',
              backgroundColor: '#ffb91f'
            }}
          />
        </Link>
        <Divider orientation="horizontal" borderColor="#ffb91f" border="2px" />
        <Link href="/" title="Line" isExternal>
          <IconButton
            aria-label="Line"
            icon="line"
            size="lg"
            color="gray.500"
            variant="ghost"
            _hover={{
              transition: 'all 0.3s ease-out',
              backgroundColor: '#ffb91f'
            }}
          />
        </Link>
        <Divider orientation="horizontal" borderColor="#ffb91f" border="2px" />
        <Link href="/" title="Twitch" isExternal>
          <IconButton
            aria-label="Twitch"
            icon="twitch"
            size="lg"
            color="gray.500"
            variant="ghost"
            _hover={{
              transition: 'all 0.3s ease-out',
              backgroundColor: '#ffb91f'
            }}
          />
        </Link>
        <Divider orientation="horizontal" borderColor="#ffb91f" border="2px" />
        <Link href="mailto:pee35225@gmail.com" title="Email" isExternal>
          <IconButton
            aria-label="Email"
            icon="email"
            size="lg"
            color="gray.500"
            variant="ghost"
            _hover={{
              transition: 'all 0.3s ease-out',
              backgroundColor: '#ffb91f'
            }}
          />
        </Link>
      </div>
    </Flex>
  );
}
