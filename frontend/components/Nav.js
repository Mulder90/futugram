import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/login">
      <a>Login</a>
    </Link>
    <Link href="/register">
      <a>Register</a>
    </Link>
  </div>
);

export default Nav;
