import PrivatePage from '../components/PrivatePage';
import Map from '../components/Map';
import User from '../components/User';
import { ALL_MY_PHOTOS_QUERY } from '../queries/photo_queries';
import { GOOGLE_MAPS_URL } from '../config';

const MapPage = () => (
  <div>
    <PrivatePage>
      <User>
        {({ data: { me } }) => (
          <Map
            user={me}
            photoQuery={ALL_MY_PHOTOS_QUERY}
            googleMapURL={GOOGLE_MAPS_URL}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        )}
      </User>
    </PrivatePage>
  </div>
);

export default MapPage;
