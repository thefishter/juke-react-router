import React, { Component } from 'react';

import Songs from './Songs';
import Albums from './Albums';
import Artists from './Artists';


export default class Artist extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {


  }

  render() {
    console.log(this.props);
    return (
            <div>
              <h3>ARTIST NAME</h3>
              <h4>ALBUMS</h4>
              <h4>SONGS</h4>
            </div>

            )


  }
}
