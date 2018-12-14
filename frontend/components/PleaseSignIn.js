import { Query } from 'react-apollo';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from '../queries/auth_queries';
import Login from './Login';

const PleaseSignInMessage = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.red};
`;

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return <div>Loading...</div>;
      }

      if (!data.me) {
        return (
          <div>
            <PleaseSignInMessage>
              Please Sign In to continue
            </PleaseSignInMessage>
            <Login />
          </div>
        );
      }

      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
