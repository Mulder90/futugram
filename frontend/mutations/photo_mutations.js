import gql from 'graphql-tag';

export const UPLOAD_PHOTO_MUTATION = gql`
  mutation UPLOAD_PHOTO_MUTATION($image: String!) {
    uploadPhoto(image: $image) {
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
