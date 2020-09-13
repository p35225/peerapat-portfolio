import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import Head from 'next/head';
import '../styles/Chatbox.css';
import '../styles/typed.css';
import '../styles/styles.css';
import 'react-medium-image-zoom/dist/styles.css';

import customTheme from '@/styles/theme';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
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
            justify-content: space-between;
            flex-direction: column;
            min-height: 95vh;
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
          <div>
            <Component {...pageProps} />
          </div>
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
