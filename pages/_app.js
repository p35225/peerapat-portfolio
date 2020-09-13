import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import Head from 'next/head';
import '../styles/Chatbox.css';
import '../styles/typed.css';
import '../styles/styles.css';
import 'react-medium-image-zoom/dist/styles.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

import customTheme from '@/styles/theme';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          body {
            margin: 0;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider value="dark">
        <GlobalStyle>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;

// #__next {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     min-height: 95vh;
// }
