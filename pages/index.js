import { params } from '@/components/particle';
import Particles from 'react-particles-js';
import Navbar from '@/components/Navbar';
import Typing from '@/components/Typing';
import Chatbox from '@/components/Chatbox';
import { Flex } from '@chakra-ui/core';

export default function Home() {
  return (
    <>
      <Particles params={params} className="particle" />
      <Navbar />
      <Flex
        as="section"
        minH="75vh"
        display="flex"
        justify="center"
        flexDirection="row"
        flexWrap="wrap"
      >
        <>
          <Typing />
          <Chatbox />
        </>
      </Flex>
    </>
  );
}
