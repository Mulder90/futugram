import { Fragment } from 'react';
import styled from 'styled-components';
import User from './User';
import Logout from './Logout';
import NavLink from './NavLink';
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
        {me && (
          <Fragment>
            <NavLink href="/wall">Wall</NavLink>
            <NavSeparator>·</NavSeparator>
            <NavLink href="/me">{me.name}</NavLink>
            <NavSeparator>·</NavSeparator>
            <NavLink href="/upload">Upload</NavLink>
            <NavSeparator>·</NavSeparator>
            <Logout />
          </Fragment>
        )}

        {!me && (
          <Fragment>
            <NavLink href="/login">Login</NavLink>
            <NavSeparator>·</NavSeparator>
            <NavLink href="/register">Register</NavLink>
          </Fragment>
        )}
      </StyledNav>
    )}
  </User>
);

export default Nav;
