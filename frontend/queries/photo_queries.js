import gql from 'graphql-tag';

export const PHOTOS_QUERY = gql`
  query {
    id
    image
    user {
      id
      name
    }
  }
`;
