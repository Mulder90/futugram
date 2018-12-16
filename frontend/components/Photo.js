import PropTypes from 'prop-types';
import styled from 'styled-components';

const PhotoStyle = styled.div`
  background: white;

  img {
    width: 100%;
    height: 306px;
    object-fit: contain;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Photo = props => {
  const { photo } = props;
  return (
    <PhotoStyle>{photo.image && <img src={photo.image} alt="" />}</PhotoStyle>
  );
};

Photo.propTypes = {
  photo: PropTypes.object.isRequired
};

export default Photo;
