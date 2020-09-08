import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import styled from 'styled-components';
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
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;

// display: flex;
// flex-direction: column;
// min-height: 100vh;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 95vh;
`;
