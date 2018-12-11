import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import initNProgress from '../utils/nprogress';

initNProgress();

const theme = {
  green: '#2ecc71',
  black: '#393939',
  maxWidth: '1000px',
  fontFamily: 'Open Sans'
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${props => props.theme.fontFamily};
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    line-height: 2;
  }

  a {
    color: ${props => props.theme.black};
    text-decoration: none;
  }
`;

// XXX: We can leave these styled components here
// since these are used only in this file.
const StyledPaged = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  background: beige;
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <StyledPaged>
        <Meta />
        <Header />
        <Content>{props.children}</Content>
      </StyledPaged>
    </React.Fragment>
  </ThemeProvider>
);

export default Page;
