import React, { Component } from 'react';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import { UPLOAD_PHOTO_MUTATION } from '../mutations/photo_mutations';
import Form from './styles/Form';
import { CLOUDINARY_PRESET_NAME, CLOUDINARY_UPLOAD_API } from '../config';

class Upload extends Component {
  state = {
    image: '',
    uploading: false
  };

  handleFileChange = async e => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', CLOUDINARY_PRESET_NAME);

    this.setState({
      uploading: true
    });

    const response = await fetch(CLOUDINARY_UPLOAD_API, {
      method: 'POST',
      body: data
    });

    const file = await response.json();
    this.setState({
      image: file.secure_url,
      uploading: false
    });
  };

  render() {
    const { image, uploading } = this.state;
    return (
      // TODO: Handle errors
      <Mutation mutation={UPLOAD_PHOTO_MUTATION} variables={this.state}>
        {(uploadPhoto, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await uploadPhoto();
              Router.push('/wall');
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Upload an Image</h2>
              {uploading && <p>Loading...</p>}
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

export default Upload;
