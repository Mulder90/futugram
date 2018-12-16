import React from 'react';
import { Query } from 'react-apollo';
import Link from 'next/link';
import PaginationStyle from './styles/PaginationStyle';
import { PER_PAGE } from '../config';

const Pagination = props => {
  const { query, user, page, path } = props;
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
                pathname: path,
                query: { page: page - 1 }
              }}
            >
              <a aria-disabled={page <= 1}>Prev</a>
            </Link>
            <p>
              Page {page} of {pages}
            </p>
            <Link
              prefetch
              href={{
                pathname: path,
                query: { page: page + 1 }
              }}
            >
              <a aria-disabled={page >= pages}>Next</a>
            </Link>
          </PaginationStyle>
        );
      }}
    </Query>
  );
};

export default Pagination;
