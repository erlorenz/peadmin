import { Component } from 'react';
import ReactDom from 'react-dom';

const portalRoot = document.querySelector('#portal');

export default class Portal extends Component {
  el = document.createElement('div');

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    return ReactDom.createPortal(this.props.children, this.el);
  }
}
