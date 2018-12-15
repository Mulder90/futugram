import gql from 'graphql-tag';

export const ALL_MY_PHOTOS_QUERY = gql`
  query ALL_MY_PHOTOS_QUERY($id: ID!) {
    photos(where: { user: { id: $id } }) {
      image
      id
    }
  }
`;

export const ALL_OTHERS_PHOTOS_QUERY = gql`
  query ALL_OTHERS_PHOTOS_QUERY($id: ID!) {
    photos(where: { user: { id_not: $id } }) {
      image
      id
    }
  }
`;
