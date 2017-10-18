import React, { Component } from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from './Environment'
import UserList from './UserList';

const AppAllUsersQuery = graphql`
  query AppAllUsersQuery {
    allUsers {
      id
      name
      message
    }
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello there.</h1>
        <QueryRenderer
          environment={environment}
          query={AppAllUsersQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <UserList users={props.allUsers} />
            }
            return <div>Loading</div>
          }}
        />
      </div>
    );
  }
}
export default App;
