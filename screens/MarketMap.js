
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { SearchBar, Button} from 'react-native-elements';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import Category from '../components/Category';

import { StackNavigator } from 'react-navigation';
import map from '../assets/images/market_map.png'
export default class MarketMap extends React.Component {
  static navigationOptions = {
    title: 'Market Map',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 40,
      color: '#FFFFFF',
      textAlign: 'left',
      flex: 1,
    },
    headerStyle: {height: 75},    
    headerTintColor: 'white',
    headerBackground: (
      <Image
        style={{ backgroundColor: 'transparent' , flex: 1}}
        source={require('../assets/images/header.jpg')}
      />
    ),
  };

  render() {
    const {navigate} = this.props.navigation;
    return (

      <ImageBackground style={styles.container} source={map} resizeMode="contain"> 

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
height: '100%',
  },
  containerOne: {
    flex: 1,
    backgroundColor: '#F7EFEC',
    margin: 0
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerThree: {
    flex: 1,
    backgroundColor: '#CCC',
  },
  containerFour: {
    flex: 1,
    backgroundColor: '#BBB',
  },

  textContainer: {
    flex: 2,
    backgroundColor: '#F7EFEC',
    textAlign: 'left',
  }, 
    buttonContainer: {
    flex: 1,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
});