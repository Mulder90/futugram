import { Query } from 'react-apollo';
import styled from 'styled-components';
import Photo from './Photo';
import Pagination from './Pagination';
import { PER_PAGE } from '../config';

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

const Photos = props => {
  const { photoQuery, paginationQuery, user, page, path } = props;
  if (user) {
    return (
      <Center>
        <Query
          query={photoQuery}
          variables={{
            id: user.id,
            skip: page * PER_PAGE - PER_PAGE
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}.</p>;
            if (data.photos)
              return (
                <PhotosList>
                  {data.photos.map(photo => (
                    <Photo photo={photo} key={photo.id} />
                  ))}
                </PhotosList>
              );

            return null;
          }}
        </Query>
        <Pagination
          query={paginationQuery}
          user={user}
          page={page}
          path={path}
        />
      </Center>
    );
  }

  return null;
};

export default Photos;
