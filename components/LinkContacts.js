import React from 'react';
import { Flex, Link, IconButton, Divider, Box } from '@chakra-ui/core';

export default function LinkContacts() {
  return (
    <Flex align="center" my={4} direction="row">
      <Box>
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
        <Divider orientation="horizontal" borderColor="#F7C948" border="2px" />
        <Link href="/" title="Youtube">
          <IconButton
            aria-label="Youtube"
            icon="youtube"
            size="lg"
            color="gray.500"
            variant="ghost"
            _hover={{
              transition: 'all 0.3s ease-out',
              backgroundColor: '#ffb91f'
            }}
          />
        </Link>
        <Divider orientation="horizontal" borderColor="#F7C948" border="2px" />
        <Link
          href="https://open.spotify.com/user/pppp%21%21%21?si=InNr7h2ATJOnqZBrGwXrrA"
          title="Spotify"
          isExternal
        >
          <IconButton
            aria-label="Spotify"
            icon="spotify"
            size="lg"
            color="gray.500"
            variant="ghost"
            _hover={{
              transition: 'all 0.3s ease-out',
              backgroundColor: '#ffb91f'
            }}
          />
        </Link>
        <Divider orientation="horizontal" borderColor="#F7C948" border="2px" />
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
      </Box>
    </Flex>
  );
}
