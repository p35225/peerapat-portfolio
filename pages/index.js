import { params } from '@/components/particle';
import Particles from 'react-particles-js';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import styled from 'styled-components';

export default function Home() {
  // const { colorMode } = useColorMode();
  // const secondaryTextColor = {
  //   light: 'gray.700',
  //   dark: 'gray.400'
  // };

  return (
    <>
      {/* <Intro> */}
      <Navbar />
      {/* <Container> */}
      <Header />
      <Particles params={params} canvasClassName="particle" />
      {/* </Container> */}
      {/* </Intro> */}
    </>
  );
}

// const Intro = styled.section`
//   min-height: 75vh;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// `;
