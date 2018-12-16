import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import User from './User';
import { APP_NAME } from '../config';

const Logo = styled.h1`
  font-size: 2.6rem;
  margin-left: 2rem;
  position: relative;
  font-weight: 600;

  a {
    color: ${props => props.theme.green};
    padding: 0.5rem 1rem;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
`;

const Header = () => (
  <StyledHeader>
    <User>
      {({ data: { me } }) => (
        <Logo>
          {!me && (
            <Link href="/">
              <a>{APP_NAME}</a>
            </Link>
          )}

          {me && (
            <Link href="/wall">
              <a>{APP_NAME}</a>
            </Link>
          )}
        </Logo>
      )}
    </User>
    <Nav />
  </StyledHeader>
);

export default Header;
