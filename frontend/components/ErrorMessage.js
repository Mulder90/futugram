import styled from 'styled-components';
import React from 'react';

import PropTypes from 'prop-types';

const ErrorStyles = styled.div`
  padding: 1rem;
  background: white;
  margin: 2rem 0;
  border-left: 5px solid ${props => props.theme.red};

  p {
    margin: 0;
    font-weight: 100;
  }
`;

const DisplayError = ({ error }) => {
  if (!error || !error.message) {
    return null;
  }

  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((networkError, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          {networkError.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ));
  }

  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};

DisplayError.defaultProps = {
  error: {}
};

DisplayError.propTypes = {
  error: PropTypes.object
};

export default DisplayError;
