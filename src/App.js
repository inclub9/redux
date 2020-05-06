import React, { Component } from 'react';
import './App.css';
import User from './User';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        App js
        <User userName={this.props.user.name} />
        <button onClick = { () => this.props.setName('tester') } > change name </button>
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
        type:"setName",
        payload:name
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
