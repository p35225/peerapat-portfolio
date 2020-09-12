import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import '../styles/Chatbox.css';
import '../styles/typed.css';
import '../styles/styles.css';
import 'react-medium-image-zoom/dist/styles.css';

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
      <ColorModeProvider>
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
