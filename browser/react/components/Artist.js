import React, { Component } from 'react';

import Songs from './Songs';
import Albums from './Albums';
import Artists from './Artists';


export default class Artist extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    const selectArtistInfo = this.props.selectArtistInfo;
    selectArtistInfo(artistId);
  }

  render() {
    console.log("artist render props: ", this.props);
    return (
      <div>


        <h3>{ this.props.selectedArtist.name }</h3>

        <Albums albums={this.props.albums}/>

        <Songs songs={this.props.songs}/>



      </div>
    )
  }
}
