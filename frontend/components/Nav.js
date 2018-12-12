import Link from 'next/link';
import { Fragment } from 'react';
import styled from 'styled-components';
import User from './User';

const StyledNav = styled.div`
  margin-left: auto;
  margin-right: 2.5rem;
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 0;
    border-bottom: 2px solid ${props => props.theme.black};
    bottom: -4px;
    transition: width 0.1s;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Sperator = styled.span`
  margin-left: 1.4rem;
  margin-right: 1.4rem;
  font-size: 2rem;
`;

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <StyledNav>
        <Link href="/wall">
          <NavLink>Wall</NavLink>
        </Link>
        <Sperator>·</Sperator>
        {me && (
          <Fragment>
            <Link href="/me">
              <NavLink>{me.name}</NavLink>
            </Link>
            <Sperator>·</Sperator>
            <Link href="/logout">
              <NavLink>Logout</NavLink>
            </Link>
          </Fragment>
        )}

        {!me && (
          <Fragment>
            <Link href="/login">
              <NavLink>Login</NavLink>
            </Link>
            <Sperator>·</Sperator>
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
