import PropTypes from 'prop-types';
import styled from 'styled-components';

const PhotoStyle = styled.div`
  background: white;

  img {
    width: 100%;
    object-fit: cover;
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
