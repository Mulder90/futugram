import { Query } from 'react-apollo';
import styled from 'styled-components';
import Photo from './Photo';
import { ALL_PHOTOS_QUERY } from '../queries/photo_queries';

const Center = styled.div`
  text-align: center;
`;

const PhotosList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 40px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const Photos = props => (
  <Center>
    <Query query={ALL_PHOTOS_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        return (
          <PhotosList>
            {data.photos.map(photo => (
              <Photo photo={photo} key={photo.id} />
            ))}
          </PhotosList>
        );
      }}
    </Query>
  </Center>
);

export default Photos;
