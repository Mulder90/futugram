import Link from 'next/link';
import { Fragment } from 'react';
import styled from 'styled-components';
import User from './User';
import Logout from './Logout';
import NavLink from './styles/NavLink';
import NavSeparator from './styles/NavSeparator';

const StyledNav = styled.div`
  margin-left: auto;
  margin-right: 2.5rem;
  display: flex;
  align-items: center;
`;

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <StyledNav>
        <Link href="/wall">
          <NavLink>Wall</NavLink>
        </Link>
        <NavSeparator>·</NavSeparator>

        {me && (
          <Fragment>
            <Link href="/me">
              <NavLink>{me.name}</NavLink>
            </Link>
            <NavSeparator>·</NavSeparator>
            <Logout />
          </Fragment>
        )}

        {!me && (
          <Fragment>
            <Link href="/login">
              <NavLink>Login</NavLink>
            </Link>
            <NavSeparator>·</NavSeparator>
            <Link href="/register">
              <NavLink>Register</NavLink>
            </Link>
          </Fragment>
        )}
      </StyledNav>
    )}
  </User>
);

export default Nav;
