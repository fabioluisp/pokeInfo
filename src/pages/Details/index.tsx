import React from 'react';
import {View} from 'react-native';

import DetailsHeader from '../../components/DetailsHeader';
import DetailsBottom from '../../components/DetailsBottom';

interface PokemonData {
  id: number;
  name: string;
  image: string;
  types: string[];
  weight: number;
  height: number;
}
export default function Details(props: PokemonData) {
  console.log('props de details', props.route.params.props);
  const pokemonInfo: PokemonData = props.route.params.props;
  return (
    <View>
      <DetailsHeader data={pokemonInfo} />
      <DetailsBottom data={pokemonInfo} />
    </View>
  );
}
