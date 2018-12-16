import React from 'react';
import { Query } from 'react-apollo';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PaginationStyle from './styles/PaginationStyle';
import { PER_PAGE } from '../config';

const Pagination = props => {
  const { query, user, page, router } = props;
  return (
    <Query query={query} variables={user}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        const { count } = data.photosConnection.aggregate;
        const pages = Math.ceil(count / PER_PAGE);
        return (
          <PaginationStyle>
            <Link
              prefetch
              href={{
                pathname: router.pathname,
                query: { page: page - 1 }
              }}
            >
              <a aria-disabled={page <= 1}>←</a>
            </Link>
            <p>
              Page {page} of {pages}
            </p>
            <Link
              prefetch
              href={{
                pathname: router.pathname,
                query: { page: page + 1 }
              }}
            >
              <a aria-disabled={page >= pages}>→</a>
            </Link>
          </PaginationStyle>
        );
      }}
    </Query>
  );
};

export default withRouter(Pagination);
