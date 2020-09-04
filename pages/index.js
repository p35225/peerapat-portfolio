import Head from 'next/head';
import { Heading, Button, Text } from '@chakra-ui/core';
// import Chatbox from '../components/Chatbox';
import Wave from '@/components/Wave';
// import Typing from '@/components/Typing';

export default function Home() {
  return (
    <div>
      <Head>
        <title>peerapat-portfolio</title>
      </Head>
      <main>
        <Heading>Portfolio</Heading>
        <Text>jeramy</Text>
        <Button>Click it</Button>
        <div>
          <Button>Click it</Button>
          <Button>Click it</Button>
          <Button>Click it</Button>
        </div>
        <div>
          <Text>noooooooooooway</Text>
        </div>
        <Wave />
      </main>
    </div>
  );
}
