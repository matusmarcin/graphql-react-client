import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class User extends Component {
  render() {
    const { name, message, friends } = this.props.user;
    return (
      <li>
        <strong>{name}</strong>{ message && message.length ? ` (${message})` : ''} with friends:
        <ul>
          {friends.map(friend => <li>{friend.name}</li>)}
        </ul>
      </li>
    );
  }
}
export default createFragmentContainer(User, graphql`
  fragment User_user on User {
    id
    name
    message
    friends {
      name
    }
  }
`)