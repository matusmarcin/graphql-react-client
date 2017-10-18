import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <li><strong>{this.props.name}</strong>{ this.props.message && this.props.message.length ? `: ${this.props.message}` : ''}</li>
    );
  }
}
export default User;