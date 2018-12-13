import styled from 'styled-components';

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

export default NavLink;
