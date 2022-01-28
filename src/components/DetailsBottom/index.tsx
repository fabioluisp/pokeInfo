import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

interface PokemonHeadData {
  data: {height: number; id: number; types: []; weight: number};
}

export default function DetailsBottom(data: PokemonHeadData) {
  console.log('data from header details', data);

  const types = data.data.types.map(item => {
    return item.type.name;
  });
  console.log(' tipos ', types);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weight: {data.data.weight} kg</Text>
      <Text style={styles.title}>Height: {data.data.height} mt</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    color: '#999999',
  },
});
