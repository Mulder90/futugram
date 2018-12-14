import { Mutation } from 'react-apollo';
import { LOGOUT_MUTATION } from '../mutations/auth_mutations';
import { CURRENT_USER_QUERY } from '../queries/auth_queries';
import NavLink from './styles/NavLink';

const Logout = () => (
  <Mutation
    mutation={LOGOUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {signout => (
      <NavLink
        onClick={async () => {
          await signout();
        }}
      >
        Logout
      </NavLink>
    )}
  </Mutation>
);

export default Logout;
