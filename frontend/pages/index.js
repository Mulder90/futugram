import Link from 'next/link';

export default () => (
  <div>
    <p>Welcome to Photorice!</p>
    <Link href="/login">
      <a>Login</a>
    </Link>
    <Link href="/login">
      <a>Register</a>
    </Link>
  </div>
);
