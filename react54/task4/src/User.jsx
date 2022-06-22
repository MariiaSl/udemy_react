import React, { Component } from 'react';

class User extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = (userId) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          user: data,
        });
      });
  };

  render() {
    const { user } = this.state;

    if (!user) {
      return null;
    }

    const { avatar_url, name, location } = user;

    return (
      <div className="user">
        <img className="user__avatar" alt="User_Avatar" src={avatar_url}></img>
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
