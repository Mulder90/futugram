import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from '../queries/auth_queries';

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired
};

export default User;
