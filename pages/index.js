import { params } from '@/components/particle';
import Particles from 'react-particles-js';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Particles params={params} className="particle" />
      <Navbar />
      <Header />
    </>
  );
}
