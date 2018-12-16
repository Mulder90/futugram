import { withRouter } from 'next/router';
import NavLinkStyle from './styles/NavLinkStyle';

const NavLink = ({ children, router, href }) => {
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <NavLinkStyle
      className={router.pathname === href ? 'active' : ''}
      href={href}
      onClick={handleClick}
    >
      {children}
    </NavLinkStyle>
  );
};

export default withRouter(NavLink);
