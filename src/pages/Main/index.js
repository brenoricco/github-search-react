import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.png';

import api from '../../services/api';

export default class Main extends Component {
  state = {
    user: '',
    userExists: null,
  };

  handleChange = e => {
    this.setState({ user: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { user } = this.state;

      if (user === '') throw new Error('Você precisa indicar um usuário');

      const response = await api.get(`/${user}`);

      const username = response.data.login;

      this.setState({ user: username, userExists: true });
    } catch (err) {
      this.setState({ userExists: null, user: '' });
    }
  };

  render() {
    const { user, userExists } = this.state;

    return (
      <Container>
        <img src={logo} alt="logo" />
        <form onSubmit={this.handleSubmit} user={user}>
          <input
            type="text"
            placeholder="Enter with yout github username"
            onChange={this.handleChange}
          />
          {userExists && (
            <Redirect
              to={{
                pathname: `/repository/${user}`,
                state: { user },
              }}
            />
          )}
        </form>
      </Container>
    );
  }
}
