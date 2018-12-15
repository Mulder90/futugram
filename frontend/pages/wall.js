import Photos from '../components/Photos';
import User from '../components/User';
import PleaseSignIn from '../components/PleaseSignIn';
import { ALL_OTHERS_PHOTOS_QUERY } from '../queries/photo_queries';

const Wall = () => (
  <PleaseSignIn>
    <User>
      {({ data: { me } }) => (
        <Photos user={me} query={ALL_OTHERS_PHOTOS_QUERY} />
      )}
    </User>
  </PleaseSignIn>
);

export default Wall;
