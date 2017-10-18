import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class User extends Component {
  render() {
    const { name, message } = this.props.user;
    return (
      <li><strong>{name}</strong>{ message && message.length ? `: ${message}` : ''}</li>
    );
  }
}
export default createFragmentContainer(User, graphql`
  fragment User_user on User {
    id
    name
    message
  }
`)