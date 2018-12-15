import PleaseSignIn from '../components/PleaseSignIn';
import Photos from '../components/Photos';
import User from '../components/User';
import { ALL_MY_PHOTOS_QUERY } from '../queries/photo_queries';

const ProfilePage = () => (
  <div>
    <PleaseSignIn>
      <User>
        {({ data: { me } }) => <Photos user={me} query={ALL_MY_PHOTOS_QUERY} />}
      </User>
    </PleaseSignIn>
  </div>
);

export default ProfilePage;
