import Head from 'next/head';
import {
  Heading,
  Button,
  Text,
  Image,
  Icon,
  Stack,
  Box
} from '@chakra-ui/core';
import Typing from '@/components/Typing';
import { params } from '@/components/particle';
import Particles from 'react-particles-js';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Particles params={params} canvasClassName="particle" />
    </>
  );
}
