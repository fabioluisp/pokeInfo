import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface PokemonCardData {
  data: {name: string; url: string};
}

export default function PokemonCard(data: PokemonCardData) {
  const navigation = useNavigation();

  console.log(' data do PokemonCard', data);
  console.log(' type do PokemonCard', data.data.types[0].type.name);

  let backgdColor = '##CACACA';
  switch (data.data.types[0].type.name) {
    case 'grass':
      backgdColor = '#46A487';
      break;
    case 'fire':
      backgdColor = '#FB6C6C';
      break;
    case 'flying':
      backgdColor = '#46C5D7';
      break;
    case 'water':
      backgdColor = '#4676A4';
      break;
    case 'eletric':
      backgdColor = '#FFCE4B';
      break;
    case 'bug':
      backgdColor = '#46D7AB';
      break;
    default:
      backgdColor = '#CACACA';
  }
  return (
    <TouchableOpacity
      style={styles2(backgdColor).container}
      onPress={() =>
        navigation.navigate('Details', {props: data.data, bkg: backgdColor})
      }>
      <Text style={styles.title}>{data.data.name.toUpperCase()}</Text>
      <Image
        style={styles.image}
        source={{uri: data.data.sprites.front_default}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 10,
  },
  image: {
    height: 80,
    width: 80,
  },
});

const styles2 = (props: string) =>
  StyleSheet.create({
    container: {
      height: 100,
      width: 140,
      backgroundColor: props,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      margin: 10,
    },
  });
