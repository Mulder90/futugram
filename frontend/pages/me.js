import PrivatePage from '../components/PrivatePage';
import Photos from '../components/Photos';
import User from '../components/User';
import { ALL_MY_PHOTOS_QUERY } from '../queries/photo_queries';
import { MY_PAGINATION_QUERY } from '../queries/pagination_queries';

const ProfilePage = props => (
  <div>
    <PrivatePage>
      <User>
        {({ data: { me } }) => (
          <Photos
            page={parseFloat(props.query.page) || 1}
            user={me}
            photoQuery={ALL_MY_PHOTOS_QUERY}
            paginationQuery={MY_PAGINATION_QUERY}
          />
        )}
      </User>
    </PrivatePage>
  </div>
);

export default ProfilePage;
