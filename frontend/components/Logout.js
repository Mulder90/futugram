import { Mutation } from 'react-apollo';
import Router from 'next/router';
import { LOGOUT_MUTATION } from '../mutations/auth_mutations';
import { CURRENT_USER_QUERY } from '../queries/auth_queries';
import NavLink from './styles/NavLinkStyle';

const Logout = () => (
  <Mutation
    mutation={LOGOUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    awaitRefetchQueries={true}
  >
    {signout => (
      <NavLink
        onClick={async e => {
          e.preventDefault();
          await signout();
          Router.push('/');
        }}
      >
        Logout
      </NavLink>
    )}
  </Mutation>
);

export default Logout;
