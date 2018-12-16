import React, { Component } from 'react';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import { withTheme } from 'styled-components';
import { BounceLoader } from 'react-spinners';
import { css } from 'react-emotion';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { UPLOAD_PHOTO_MUTATION } from '../mutations/photo_mutations';
import { ALL_MY_PAGINATED_PHOTOS_QUERY } from '../queries/photo_queries';
import { CLOUDINARY_PRESET_NAME, CLOUDINARY_UPLOAD_API } from '../config';

const overrideBounceLoaderCSS = css`
  margin: 40px auto;
`;

class Upload extends Component {
  state = {
    image: '',
    location: '',
    uploading: false,
    uploadingError: false
  };

  handleFileChange = async e => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', CLOUDINARY_PRESET_NAME);

    this.setState({
      uploading: true,
      uploadingError: false
    });

    const response = await fetch(CLOUDINARY_UPLOAD_API, {
      method: 'POST',
      body: data
    });

    try {
      const file = await response.json();

      if (file.error) {
        this.setState({
          uploading: false,
          uploadingError: true
        });
      } else {
        this.setState({
          image: file.secure_url,
          uploading: false
        });
      }
    } catch (error) {
      this.setState({
        uploading: false,
        uploadingError: true
      });
    }
  };

  handleLocationChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { image, location, uploading, uploadingError } = this.state;
    const { user } = this.props;
    return (
      <Mutation
        mutation={UPLOAD_PHOTO_MUTATION}
        variables={this.state}
        refetchQueries={[
          {
            query: ALL_MY_PAGINATED_PHOTOS_QUERY,
            variables: user
          }
        ]}
        awaitRefetchQueries={true}
      >
        {(uploadPhoto, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await uploadPhoto();
              Router.push('/me');
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>{uploading ? 'Uploading' : 'Upload an Image'}</h2>
              <Error error={error} />
              {uploadingError && (
                <Error
                  error={{
                    message:
                      'A problem occurs while uploading your photo. Please check that the file size is under 10MB'
                  }}
                />
              )}
              {uploading && (
                <BounceLoader
                  className={overrideBounceLoaderCSS}
                  color={this.props.theme.green}
                  loading={uploading}
                />
              )}
              {image && <img width="350" src={image} alt="Upload Preview" />}
              <label htmlFor="image">
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  required
                  onChange={this.handleFileChange}
                />
              </label>
              <label htmlFor="location">
                City
                <input
                  type="text"
                  name="location"
                  placeholder="Florence"
                  onChange={this.handleLocationChange}
                  value={location}
                />
              </label>
              <button type="submit" disabled={image.length === 0}>
                {loading ? 'Saving' : 'Save'}
              </button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default withTheme(Upload);
