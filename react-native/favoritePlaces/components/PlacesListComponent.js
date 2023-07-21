import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PlaceItemComponent from './PlaceItemComponent';

const PlacesListComponent = ({places}) => {
  function renderPlaces({item}) {
    return <PlaceItemComponent place={item} />;
  }

  return (
    <FlatList
      data={places}
      renderItem={renderPlaces}
      keyExtractor={item => item.id}
    />
  );
};

export default PlacesListComponent;

const styles = StyleSheet.create({});
