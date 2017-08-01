import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

class AlbumList extends Component {
  state = {
    albums: ds.cloneWithRows([]),
  };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(e => {
      this.setState({ albums: ds.cloneWithRows(e.data) })
    });
  }

  renderAlbums() {
    return this.state.albums.map((album, i) => (
      <AlbumDetail key={i} detail={album} />
    ));
  }

  render() {
    // return (
    //   <View>
    //     {
    //       // this.renderAlbums()
    //     }
    //   </View>
    // );
    return (
      <ListView
        dataSource={this.state.albums}
        renderRow={(record) => <Text>{record.title}</Text>}
        />
    )
  }
}

export default AlbumList;
