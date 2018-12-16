import React, { Component } from 'react';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import Link from 'next/link';
import { LOGIN_MUTATION } from '../mutations/auth_mutations';
import { CURRENT_USER_QUERY } from '../queries/auth_queries';
import Form from './styles/Form';
import FormFooter from './styles/FormFooter';
import Error from './ErrorMessage';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        awaitRefetchQueries={true}
      >
        {(signin, { error, loading }) => (
          <React.Fragment>
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signin();
                Router.push('/me');
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Login to futugram</h2>
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
                <button type="submit">Login</button>
              </fieldset>
            </Form>
            <FormFooter>
              Or
              <br />
              <Link href="/register">
                <a> Create a new account</a>
              </Link>
            </FormFooter>
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default Login;
