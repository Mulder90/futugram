import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { DEV_API_ENDPOINT, PROD_API_ENDPOINT } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri:
      process.env.NODE_ENV === 'development'
        ? DEV_API_ENDPOINT
        : PROD_API_ENDPOINT,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      });
    }
  });
}

export default withApollo(createClient);
