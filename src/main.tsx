import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import App from './App.tsx'
import { Theme } from './theme.ts';

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'GMarketSans';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
        font-weight: 300;
        font-display: swap;
    }
    @font-face {
        font-family: 'GMarketSans';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: 500;
        font-display: swap;
    }
    @font-face {
        font-family: 'GMarketSans';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
        font-weight: 700;
        font-display: swap;
    }

    body {
        font-family: 'GMarketSans', sans-serif;
        background-color: #f9f9f9;
    }
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration:unset;
        color:unset;
    }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
