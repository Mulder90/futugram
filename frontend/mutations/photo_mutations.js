import gql from 'graphql-tag';

export const UPLOAD_PHOTO_MUTATION = gql`
  mutation UPLOAD_PHOTO_MUTATION($image: String!, $location: String) {
    uploadPhoto(image: $image, location: $location) {
      id
      image
      user {
        id
        name
        email
      }
    }
  }
`;
