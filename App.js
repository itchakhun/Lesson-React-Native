import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header>Albums</Header>
        <AlbumList />
      </View>
    );
  }
}
