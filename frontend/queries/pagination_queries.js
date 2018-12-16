import gql from 'graphql-tag';

export const MY_PAGINATION_QUERY = gql`
  query MY_PAGINATION_QUERY($id: ID!) {
    photosConnection(where: { user: { id: $id } }) {
      aggregate {
        count
      }
    }
  }
`;

export const OTHERS_PAGINATION_QUERY = gql`
  query OTHERS_PAGINATION_QUERY($id: ID!) {
    photosConnection(where: { user: { id_not: $id } }) {
      aggregate {
        count
      }
    }
  }
`;
