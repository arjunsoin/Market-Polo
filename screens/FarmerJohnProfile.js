import React, { Component } from 'react';
import {
  Alert,
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
        <Text style= {{fontSize: 32, fontWeight: 'bold', color: '#96594A', paddingTop: 30}}> Farmer John </Text>        
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
       
        <View style={{flexDirection: 'row', marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
          
          <View style={styles.barterButton}>    
            <TouchableOpacity
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              style={{
                backgroundColor: "#96594A",
                borderColor: "transparent",
                width: 125,
                height: 50,
                borderWidth: 0,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
              }}

            >
              <View style={styles.barterText}>    
                <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}> Barter! </Text>
              </View>  
            </TouchableOpacity>
          </View>  

          <View style={styles.carpoolButton}>    
            <TouchableOpacity
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              style={{
                backgroundColor: "#96594A",
                borderColor: "transparent",
                width: 125,
                height: 50,
                borderWidth: 0,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
              }}

            >
              <View style={styles.barterText}>    
                <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}> Carpool! </Text>
              </View>  
            </TouchableOpacity>
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
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderColor: 'black',
    elevation: 1,
  },
  bioText:{
    color: '#96594A',
    flex: 1,
    alignItems: 'center',
    fontSize: 20,

  },
  barterButton:{
    paddingTop: 15,
    paddingLeft: 20,
  },
  carpoolButton:{
    paddingTop: 15,
    paddingRight: 20,
  },
  barterText:{
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    flex: 1,
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