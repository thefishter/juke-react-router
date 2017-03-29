import React, { Component } from 'react';
import Songs from '../components/Songs';

export default class Album extends Component {

  constructor (props) {
    super(props);

    this.state = {
      album: props.album,
      currentSong: props.currentSong,
      isPlaying: props.isPlaying,
      toggleOne: props.toggleOne
    }
  }

  componentDidMount() {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;
    selectAlbum(albumId);
  }

  render() {
    console.log(this.state, this.props);
    return (
      <div className="album">
        <div>
          <h3>{ this.state.album.name }</h3>
          <img src={ this.state.album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={this.state.album.songs}
          currentSong={this.state.currentSong}
          isPlaying={this.state.isPlaying}
          toggleOne={this.state.toggleOne} />
      </div>
    );    
  }
}
