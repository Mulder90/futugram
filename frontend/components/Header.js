import Link from 'next/link';
import Nav from './Nav';

const Header = () => (
  <div>
    <div>
      <Link href="/">
        <a>PhotoRice</a>
      </Link>
    </div>
    <Nav />
  </div>
);

export default Header;
