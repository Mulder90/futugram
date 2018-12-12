import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Link from 'next/link';
import { LOGIN_MUTATION } from '../mutations/auth_mutations';
import { CURRENT_USER_QUERY } from '../queries/auth_queries';
import Form from './styles/Form';
import FormAlternative from './styles/FormAlternative';

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
      // TODO: Handle errors
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(singin, { error, loading }) => (
          <React.Fragment>
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await singin();
                this.setState({ email: '', password: '' });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Login to Futugram</h2>
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
            <FormAlternative>
              Or
              <br />
              <Link href="/register">
                <a> Create a new account</a>
              </Link>
            </FormAlternative>
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default Login;
