import React from 'react';
import {Image, Text, View, StyleSheet, StatusBar} from 'react-native';

import profilePicture from '../../assets/profile_picture.png';

export default function HomeHeader() {
  const user = {name: 'Ash Ketchum'};

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.textArea}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>Olá,</Text>
          <Text style={[styles.title, {fontWeight: 'bold'}]}>{user.name}</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Bem vindo!</Text>
        </View>
      </View>
      <Image style={styles.image} source={profilePicture} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: '#494949',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  textArea: {
    width: '80%',
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  image: {
    height: 50,
    width: 50,
  },
});
