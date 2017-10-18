import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  render() {
    return (
      <div>
        <p>This is a list of users:</p>
        {typeof this.props.users !== 'undefined' && this.props.users ? this.props.users.map(user => <User key={user.id} {...user} />) : ''}
      </div>
    );
  }
}
export default UserList;
