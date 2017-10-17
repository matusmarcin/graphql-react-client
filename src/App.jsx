import React, { Component } from 'react';
import User from './User.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello there.</h1>
        <p>This is a list of users:</p>
        {[{id: 1, name: "John", message: "Enjoy your beer! 🍺"}, {id: 2, name: "Jack"}, {id: 3, name: "James"}].map(user => <User key={user.id} {...user} />)}
      </div>
    );
  }
}
export default App;
