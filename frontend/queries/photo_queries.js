import gql from 'graphql-tag';

export const ALL_PHOTOS_QUERY = gql`
  query ALL_PHOTOS_QUERY {
    photos {
      id
      image
      user {
        id
        name
      }
    }
  }
`;
