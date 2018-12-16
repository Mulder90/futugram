import Photos from '../components/Photos';
import User from '../components/User';
import PrivatePage from '../components/PrivatePage';
import { ALL_OTHERS_PHOTOS_QUERY } from '../queries/photo_queries';
import { OTHERS_PAGINATION_QUERY } from '../queries/pagination_queries';

const Wall = props => (
  <PrivatePage>
    <User>
      {({ data: { me } }) => (
        <Photos
          page={parseFloat(props.query.page) || 1}
          user={me}
          photoQuery={ALL_OTHERS_PHOTOS_QUERY}
          paginationQuery={OTHERS_PAGINATION_QUERY}
        />
      )}
    </User>
  </PrivatePage>
);

export default Wall;
