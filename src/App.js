import React, { Component } from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from './Environment'
import User from './User';

const AppAllUsersQuery = graphql`
  query AppAllUsersQuery {
    user(id: "3") {
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
            console.log(error, props);
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <User {...props.user} />
            }
            return <div>Loading</div>
          }}
        />
      </div>
    );
  }
}
export default App;
