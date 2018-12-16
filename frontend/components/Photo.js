import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Fragment } from 'react';

const PhotoStyle = styled.div`
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 10px;

  img {
    width: 100%;
    object-fit: contain;
    background: black;
    max-height: 350px;
    height: auto;
  }

  div {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const Photo = props => {
  const { photo } = props;
  return (
    <PhotoStyle>
      {photo && (
        <Fragment>
          <img src={photo.image} alt="" />
          <div>{photo.location && photo.location.city}</div>
        </Fragment>
      )}
    </PhotoStyle>
  );
};

Photo.propTypes = {
  photo: PropTypes.object.isRequired
};

export default Photo;
