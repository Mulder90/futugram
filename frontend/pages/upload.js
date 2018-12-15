import Upload from '../components/Upload';
import User from '../components/User';
import PrivatePage from '../components/PrivatePage';

const UploadPage = () => (
  <div>
    <PrivatePage>
      <User>{({ data: { me } }) => <Upload user={me} />}</User>
    </PrivatePage>
  </div>
);

export default UploadPage;
