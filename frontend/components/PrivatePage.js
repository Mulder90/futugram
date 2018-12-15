import { Query } from 'react-apollo';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from '../queries/auth_queries';
import Login from './Login';

const PrivatePageMessage = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.red};
`;

const PrivatePage = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return <div>Loading...</div>;
      }

      if (!data.me) {
        return (
          <div>
            <PrivatePageMessage>Please Sign In to continue</PrivatePageMessage>
            <Login />
          </div>
        );
      }

      return props.children;
    }}
  </Query>
);

export default PrivatePage;
