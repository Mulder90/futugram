import Upload from '../components/Upload';
import User from '../components/User';
import PleaseSignIn from '../components/PleaseSignIn';

const UploadPage = () => (
  <div>
    <PleaseSignIn>
      <User>{({ data: { me } }) => <Upload user={me} />}</User>
    </PleaseSignIn>
  </div>
);

export default UploadPage;
