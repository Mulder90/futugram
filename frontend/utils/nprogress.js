import Router from 'next/router';
import NProgress from 'nprogress';

const initNProgress = () => {
  Router.onRouteChangeStart = () => {
    NProgress.start();
  };

  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };

  Router.onRouteChangeError = () => {
    NProgress.done();
  };
};

export default initNProgress;
