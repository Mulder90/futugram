import { Query } from 'react-apollo';
import Link from 'next/link';
import styled from 'styled-components';
import Photo from './Photo';
import Pagination from './Pagination';
import { PER_PAGE } from '../config';
import Center from './styles/Center';
import { Fragment } from 'react';

const NoPhotos = styled.div`
  font-size: 1.5rem;

  a {
    text-decoration: underline;
    font-weight: 600;
  }
`;

const PhotosList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 40px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const Photos = props => {
  const { photoQuery, paginationQuery, user, page } = props;
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
                <Fragment>
                  {data.photos.length === 0 && (
                    <NoPhotos>
                      To start share your photos please go to the
                      <Link href="/upload">
                        <a> upload </a>
                      </Link>
                      section.
                    </NoPhotos>
                  )}
                  {data.photos.length > 0 && (
                    <Fragment>
                      <PhotosList>
                        {data.photos.map(photo => (
                          <Photo photo={photo} key={photo.id} />
                        ))}
                      </PhotosList>
                      <Pagination
                        query={paginationQuery}
                        user={user}
                        page={page}
                      />
                    </Fragment>
                  )}
                </Fragment>
              );

            return null;
          }}
        </Query>
      </Center>
    );
  }

  return null;
};

export default Photos;
