import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { GeistProvider, CssBaseline } from '@geist-ui/react'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
        <ThemeProvider theme={theme}>
          <GeistProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </GeistProvider>
        </ThemeProvider>
    </>
  );
}