import Photos from '../components/Photos';
import User from '../components/User';
import PrivatePage from '../components/PrivatePage';
import { ALL_OTHERS_PHOTOS_QUERY } from '../queries/photo_queries';

const Wall = () => (
  <PrivatePage>
    <User>
      {({ data: { me } }) => (
        <Photos user={me} query={ALL_OTHERS_PHOTOS_QUERY} />
      )}
    </User>
  </PrivatePage>
);

export default Wall;
