import React, { Component } from 'react';
import './App.css';
import User from './User';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        App js
        <User
          userName={this.props.user.name}
          userAge={this.props.user.age}
        />
        <input type="text" id="name" placeholder="name"/>
        <input type="text" id="age" placeholder="age" />
        <button onClick={() => this.props.setName(document.getElementById('name').value)} > change name </button>
        <button onClick={() => this.props.setAge(document.getElementById('age').value)} > change age </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    emp: state.emp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "setName",
        payload: name
      })
    },
    setAge: (age) => {
      dispatch({
        type: "setAge",
        payload: age
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
