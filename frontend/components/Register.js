import React, { Component } from 'react';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import Link from 'next/link';
import { REGISTER_MUTATION } from '../mutations/auth_mutations';
import { CURRENT_USER_QUERY } from '../queries/auth_queries';
import Form from './styles/Form';
import FormFooter from './styles/FormFooter';
import Error from './ErrorMessage';

class Register extends Component {
  state = {
    email: '',
    name: '',
    password: ''
  };

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Mutation
        mutation={REGISTER_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        awaitRefetchQueries={true}
      >
        {(signup, { error, loading }) => (
          <React.Fragment>
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signup();
                Router.push('/me');
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Creare a Futugram Account</h2>
                <Error error={error} />
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g., example@mail.com"
                    value={email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g., Mario Rossi"
                    value={name}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="e.g., ••••••••"
                    value={password}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Create New Account</button>
              </fieldset>
            </Form>
            <FormFooter>
              Or
              <br />
              <Link href="/login">
                <a> login to your account</a>
              </Link>
            </FormFooter>
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default Register;
