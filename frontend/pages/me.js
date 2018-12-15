import PrivatePage from '../components/PrivatePage';
import Photos from '../components/Photos';
import User from '../components/User';
import { ALL_MY_PHOTOS_QUERY } from '../queries/photo_queries';

const ProfilePage = () => (
  <div>
    <PrivatePage>
      <User>
        {({ data: { me } }) => <Photos user={me} query={ALL_MY_PHOTOS_QUERY} />}
      </User>
    </PrivatePage>
  </div>
);

export default ProfilePage;
