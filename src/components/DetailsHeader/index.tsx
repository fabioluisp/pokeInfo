import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Image,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';

interface PokemonHeadData {
  data: {name: string; id: number; types: []; image: string};
}

export default function DetailsHeader(data: PokemonHeadData) {
  const navigation = useNavigation();

  const types = data.data.types.map(item => {
    return item.type.name;
  });
  console.log(' bkg ', data.bkg);

  return (
    <View style={styles2(data.bkg).container}>
      <StatusBar barStyle={'light-content'} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={26} color="#FFFFFF" />
      </TouchableOpacity>
      <View style={styles.titleArea}>
        <Text style={styles.title}>{data.data.name.toUpperCase()}</Text>
        <Text style={styles.subtitle}>{`#${data.data.id}`}</Text>
      </View>
      <View style={styles.typesView}>
        <FlatList
          data={types}
          keyExtractor={item => item}
          horizontal={true}
          renderItem={({item}) => {
            return (
              <View style={styles2(data.bkg).typeView}>
                <Text style={styles.type}>{item.toUpperCase()}</Text>
              </View>
            );
          }}
        />
      </View>
      <Image
        style={styles.image}
        source={{
          uri: data.data.sprites.other.home.front_default,
        }}
      />
    </View>
  );
}

const styles2 = (props: string) =>
  StyleSheet.create({
    container: {
      height: 300,
      backgroundColor: props,
      paddingHorizontal: 30,
      paddingTop: 40,
    },
    typeView: {
      width: 80,
      backgroundColor: '#FFFFFF',
      opacity: 0.3,
      borderRadius: 20,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

const styles = StyleSheet.create({
  titleArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  typesView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  type: {
    color: '#000000',
    margin: 5,
  },
  image: {
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
});
