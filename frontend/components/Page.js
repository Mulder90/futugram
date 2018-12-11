import Header from './Header';
import Meta from './Meta';
import initNProgress from '../utils/nprogress';

initNProgress();

const Page = props => (
  <div>
    <Meta />
    <Header />
    {props.children}
  </div>
);

export default Page;
