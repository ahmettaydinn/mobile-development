import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function List({listData}) {
  return listData.map(data => {
    return (
      <View key={data} style={styles.listItem}>
        <Text style={styles.itemText}>{data}</Text>
      </View>
    );
  });
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 4,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
