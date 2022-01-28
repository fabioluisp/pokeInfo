import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface PokemonCardData {
  data: {name: string; url: string};
}

export default function PokemonCard(data: PokemonCardData) {
  const navigation = useNavigation();

  console.log(' data do PokemonCard', data);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Details', {props: data.data})}>
      <Text style={styles.title}>{data.data.name.toUpperCase()}</Text>
      <Image
        style={styles.image}
        source={{uri: data.data.sprites.front_default}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 140,
    backgroundColor: '#CACACA',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    margin: 10,
  },
  title: {
    fontSize: 16,
    color: '#555555',
    marginTop: 10,
  },
  image: {
    height: 80,
    width: 80,
  },
});
