import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';

import HomeHeader from '../../components/HomeHeader';
import PokemonCard from '../../components/PokemonCard';

import pokemonLogo from '../../assets/pokemon-logo.png';
import pokemonBall from '../../assets/pokeball.png';

interface PokemonRootData {
  name: string;
  url: string;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const urlPokemonList = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0)';

  console.log('pokemonList', pokemonList);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get(urlPokemonList);

        if (response.status === 200) {
          console.log('response data', response.data);
          const pokemonDataList: PokemonRootData[] = response.data.results;
          const list = async () => {
            return Promise.all(
              pokemonDataList.map(async item => {
                const result: Object = await axios.get(item.url);
                return result.data;
              }),
            );
          };

          list().then(data => {
            console.log('resultado map', data);
            setPokemonList(data);
            setLoading(false);
          });

          return response.data;
        } else {
          console.log('erro api');

          throw new Error("Failed to fetch Pokemon's list");
        }
      } catch (error) {
        return error;
      }
    };
    fetchPokemonList();
  }, []);

  if (loading === true) {
    return (
      <View style={styles.containerLoading}>
        <Image style={styles.imgLogoLoading} source={pokemonLogo} />
        <Image style={styles.imgBallLoading} source={pokemonBall} />
        <Text style={styles.textLoading}>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <HomeHeader />
      <View style={styles.container}>
        <Text style={styles.title}>Qual pokémon você escolheria?</Text>

        <FlatList
          data={pokemonList}
          keyExtractor={item => item.name}
          numColumns={2}
          horizontal={false}
          renderItem={({item}) => {
            return <PokemonCard data={item} />;
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 30,
    marginVertical: 20,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imgLogoLoading: {
    width: 150,
    height: 70,
    resizeMode: 'stretch',
  },
  imgBallLoading: {
    width: 70,
    height: 70,
    resizeMode: 'stretch',
  },
  textLoading: {
    fontSize: 30,
  },
});
