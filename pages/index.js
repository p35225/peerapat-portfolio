import Head from 'next/head';
import { Heading, Button, Text, Code } from '@chakra-ui/core';

export default function Home() {
  return (
    <div>
      <Head>
        <title>peerapat-portfolio</title>
      </Head>
      <main>
        <Heading>Portfolio</Heading>
        <Text>jeramy</Text>
        <Button fontWeight="bold">Click it</Button>
      </main>
    </div>
  );
}
