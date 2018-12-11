import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import initNProgress from '../utils/nprogress';

initNProgress();

const theme = {
  green: '#2ecc71',
  black: '#393939',
  maxWidth: '1000px'
};

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
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <StyledPaged>
      <Meta />
      <Header />
      <Content>{props.children}</Content>
    </StyledPaged>
  </ThemeProvider>
);

export default Page;
