import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import '../styles/Chatbox.css';
import '../styles/typed.css';
import '../styles/styles.css';

import customTheme from '@/styles/theme';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
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
      <ColorModeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
