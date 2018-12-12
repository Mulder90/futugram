import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
    }
  }
`;
