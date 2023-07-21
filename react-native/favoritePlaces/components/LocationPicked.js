import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Colors} from '../constants/colors';
import Geolocation from '@react-native-community/geolocation';

const LocationPicked = () => {
  const [location, setLocation] = useState(null);
  function getLocationHandler() {
    Geolocation.getCurrentPosition(info => {
      setLocation(info);
    });
    console.log(location);
  }
  function pickOnMapHandler() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <Button title="locate user" onPress={getLocationHandler} />
        <Button title="pick on map" onPress={pickOnMapHandler} />
      </View>
    </View>
  );
};

export default LocationPicked;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
