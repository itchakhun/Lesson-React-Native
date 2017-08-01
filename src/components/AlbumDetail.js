import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ detail }) => (
  <Card>
    {console.log(detail)}
    <CardSection>
      <Text>{detail.title}</Text>
    </CardSection>
    <CardSection>
      <Text>{detail.artist}</Text>
    </CardSection>
    <CardSection>
      <Button onPress={() => console.log('action')} title="view" />
    </CardSection>
  </Card>
);

export default AlbumDetail;
