import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  GoMention,
  GoLocation,
  GoPackage,
  GoOrganization,
  GoStar,
  GoPerson,
  GoMail,
} from 'react-icons/go';

import logo from '../../assets/logo.png';
import {
  Container,
  Header,
  Profile,
  Search,
  List,
  RepositoryItem,
} from './styles';

import api from '../../services/api';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    user: [],
    repositories: [],
  };

  async componentDidMount() {
    const { user } = this.props.match.params;

    const [userData, repositories] = await Promise.all([
      api.get(`/${user}`),
      api.get(`/${user}/repos`),
    ]);

    this.setState({
      user: userData.data,
      repositories: [repositories.data],
    });

    this.funcSortedRepository();
  }

  funcSortedRepository() {
    const { repositories } = this.state;

    const sortedRepositories = repositories.map(repo =>
      repo.sort((a, b) => (a.stargazers_count > b.stargazers_count ? -1 : 1))
    );

    var formatedRepo = [];

    sortedRepositories.map(repo => repo.map(r => formatedRepo.push(r)));

    this.setState({ repositories: [formatedRepo] });
  }

  render() {
    const { user, repositories } = this.state;
    const {
      avatar_url,
      login,
      location,
      public_repos,
      followers,
      following,
      bio,
      email,
    } = user;

    return (
      <Container>
        <Header>
          <img src={logo} alt="logo" />
          <div>
            <span>{login}</span>
          </div>
        </Header>
        <Search>
          <div>
            <Profile>
              <img src={avatar_url} alt="avatar" />
              <div>
                <p>{bio}</p>
              </div>

              <div>
                <GoMention />
                <span>{login}</span>
              </div>

              {email && (
                <div>
                  <GoMail />
                  <span>{email}</span>
                </div>
              )}

              <div>
                <GoLocation />
                <small>{location ? location : 'no location'}</small>
              </div>

              <div>
                <GoPackage />
                <small>{public_repos}</small>
              </div>

              <div>
                <GoOrganization />
                <small>{followers}</small>
              </div>

              <div>
                <GoPerson />
                <small>{following}</small>
              </div>
            </Profile>
          </div>

          <List>
            {repositories.map(repository =>
              repository.map(r => (
                <RepositoryItem key={r.id}>
                  <li>
                    <span>{r.name}</span>
                    <div>
                      <GoStar />
                      <span>{r.stargazers_count}</span>
                    </div>
                  </li>
                </RepositoryItem>
              ))
            )}
          </List>
        </Search>
      </Container>
    );
  }
}
