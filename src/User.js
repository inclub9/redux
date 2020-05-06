import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <>
        <h1>Hello {this.props.userName}</h1>
        <h1>Age {this.props.userAge}</h1>
      </>
    );
  }
}

export default User;
