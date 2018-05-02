import React, { Component } from 'react';
import {Link}  from 'react-router-dom';

class DatagrapherLink extends Component {
  render() {
    let path = `/datagrapher/?c=${encodeURIComponent(this.props.file)}`

    return ( <Link className={this.props.className}
                to={path}>{this.props.children}</Link> );
  }
}

export default DatagrapherLink;
