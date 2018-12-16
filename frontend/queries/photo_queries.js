import gql from 'graphql-tag';
import { PER_PAGE } from '../config';

export const ALL_MY_PHOTOS_QUERY = gql`
  query ALL_MY_PHOTOS_QUERY($id: ID!, $skip: Int = 0, $first: Int = ${PER_PAGE}) {
    photos(where: { user: { id: $id } }, first: $first, skip: $skip, orderBy: createdAt_DESC) {
      image
      id
    }
  }
`;

export const ALL_OTHERS_PHOTOS_QUERY = gql`
  query ALL_OTHERS_PHOTOS_QUERY($id: ID!, $skip: Int = 0, $first: Int = ${PER_PAGE}) {
    photos(where: { user: { id_not: $id } }, first: $first, skip: $skip, orderBy: createdAt_DESC) {
      image
      id
    }
  }
`;
