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
  console.log(' tipos ', types);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={26} color="#a7a7a9" />
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
              <View style={styles.typeView}>
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

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#CACACA',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
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
    color: '#FFFFFF',
    margin: 5,
  },
  typeView: {
    width: 80,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
});
