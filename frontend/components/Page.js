import styled from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import initNProgress from '../utils/nprogress';

initNProgress();

const StyledPaged = styled.div`
  background: white;
  color: black;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: red;
`;

const Page = props => (
  <StyledPaged>
    <Meta />
    <Header />
    <Content>{props.children}</Content>
  </StyledPaged>
);

export default Page;
