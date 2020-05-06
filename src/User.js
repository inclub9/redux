import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
    <h1>Hello {this.props.userName}</h1>
    );
  }
}

export default User;
