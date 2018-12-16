import { Query } from 'react-apollo';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import Center from './styles/Center';
import {
  MAPS_DEFAULT_ZOOM,
  MAPS_DEFAULT_LATITUDE,
  MAPS_DEFAULT_LONGITUDE
} from '../config';

const Map = withScriptjs(
  withGoogleMap(props => {
    const { photoQuery, user } = props;
    if (user) {
      return (
        <Center>
          <Query
            query={photoQuery}
            variables={{
              id: user.id
            }}
          >
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error: {error.message}.</p>;
              if (data.photos) {
                return (
                  <GoogleMap
                    defaultZoom={MAPS_DEFAULT_ZOOM}
                    defaultCenter={{
                      lat: MAPS_DEFAULT_LATITUDE,
                      lng: MAPS_DEFAULT_LONGITUDE
                    }}
                  >
                    {data.photos.map(photo => {
                      if (photo.location) {
                        return (
                          <Marker
                            position={{
                              lat: photo.location.latitude,
                              lng: photo.location.longitude
                            }}
                            key={photo.id}
                          />
                        );
                      }

                      return null;
                    })}
                  </GoogleMap>
                );
              }

              return null;
            }}
          </Query>
        </Center>
      );
    }
  })
);

export default Map;
