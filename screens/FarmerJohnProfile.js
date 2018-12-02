import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { SearchBar, Button} from 'react-native-elements';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import Category from '../components/Category'

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: 'Community',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 40,
      color: '#FFFFFF',
      textAlign: 'left',
      flex: 1,
    },
    headerStyle: {height: 75},
    headerBackground: (
      <Image
        style={{ backgroundColor: 'transparent' , flex: 1, height: 70 }} blurRadius={5}
        source={require('../assets/images/header.jpg')}
      />
    ),
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style = {styles.textContainer}>
        <Text style= {{fontSize: 40, fontWeight: 'bold', color: '#96594A', paddingTop: 30}}> Farmer John </Text>        
        </View>
        
        <View style={styles.profilePic}>

          <Image 
            style={{flex:1, height: 300, width: 300}}
            source={require('../assets/images/Farmer_John.png')}
          />
        </View>

        <View style={styles.c1}>
          <View style={styles.bioContainer}>
            <Text style={styles.bioText}>
              I started Wild West Farms in 1978, after learning how to farm from my dad. 
              I wanted others around me to experience how wonderful unsulfured apricots taste.
              </Text>
          </View>
        </View>

 

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EFEC',
  },
  profilePic: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  c1: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  bioContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  bioText:{
    color: '#96594A',
    flex: 1,
    alignItems: 'center',
  },
  containerOne: {
    flex: 1,
    backgroundColor: '#F7EFEC',
    margin: 0
  },
  containerTwo: {
    flex: 1,
    backgroundColor: '#DDD',
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