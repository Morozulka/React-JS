import React from 'react';
import PropTypes from 'prop-types';

export default class MenuItem extends React.Component {
  render() {
    return <li><a href={this.props.href}>{this.props.children}</a></li>
  }
}

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.number.isRequired
}