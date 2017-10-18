import React, { Component } from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import environment from './Environment';
import User from './User';

const AllUsersQuery = graphql`
query UserListQuery {
  allUsers {
    ...User_user
  }
}
`;

class UserList extends Component {
  render() {
    return (
      <div>
        <p>This is a list of users:</p>
        <QueryRenderer
          environment={environment}
          query={AllUsersQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return props.allUsers.length ? props.allUsers.map(user => <User key={user.id} user={user} />) : ''
            }
            return <div>Loading</div>
          }}
        />
      </div>
    );
  }
}
export default UserList;
