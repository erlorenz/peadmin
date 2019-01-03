import React, { Component } from 'react';

class NotFound extends Component {
  componentDidMount() {
    setTimeout(() => this.props.history.push('/'), 3000);
  }
  render() {
    return <h1>NOT FOUND</h1>;
  }
}

export default NotFound;
