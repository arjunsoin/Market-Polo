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

import { createStackNavigator, createAppContainer } from 'react-navigation';

import { SearchBar, Button} from 'react-native-elements';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import Category from '../components/Category';

import { StackNavigator } from 'react-navigation';

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: 'Discover',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 40,
      color: '#FFFFFF',
      textAlign: 'left',
      flex: 1,
    },
    headerStyle: {height: 75},
    headerTintColor: 'white',
    headerLeft: null,
    headerBackground: (
      <Image
        style={{ backgroundColor: 'transparent' , flex: 1, height: 70 }} blurRadius={5}
        source={require('../assets/images/header.jpg')}
      />
    ),
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>


        <SearchBar 
        round 
        lightTheme 
        placeholder='Search for all...' 
        containerStyle={{backgroundColor: '#F7EFEC',}}
        onChangeText={
          () => navigate('Search')
        }/>

        

        <View style={{flexDirection: 'row', marginBottom: 10}}>
        
        <View style={styles.buttonContainer}>

        <TouchableOpacity style={{ height: 25, margin: 10,
          backgroundColor: '#DDDDDD', alignItems: 'center', borderRadius: 20, textAlignVertical: 'center',justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 5,}} 
          title="Button 1"
          onPress={() => navigate('Discover')}
          >
        <Text style={{color: '#96594A',}}> Markets </Text>
        </TouchableOpacity>

        </View>
        <View style={styles.buttonContainer}>

        <TouchableOpacity 
          style={{ height: 25, margin: 10,
          backgroundColor: '#FFFFFF', alignItems: 'center', textAlignVertical: 'center',justifyContent: 'center',
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 5,}} 

          title="Button 2">

        <Text style={{color: '#96594A',}}> Farmers </Text>
        
        </TouchableOpacity>

        </View>

        </View>

        <View style = {styles.textContainer}>
        <Text style= {{fontSize: 26, fontWeight: 'bold', color: '#96594A'}}>  Browse Vendors </Text>
        <Text style= {{fontSize: 20, fontWeight: 'bold', marginTop: 5, marginLeft:10, paddingBottom: 15, color: '#96594A'}}> Active Vendors </Text>

        </View>


        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>


        <Category 
        imageUri={require('../assets/images/Chris_Montgomery_Card.png')}
        name="Chris Montgomery">
        </Category>

        


        <Category 
        imageUri={require('../assets/images/Clarissa_Woods_Card.png')}
        name="Clarissa Woods"/>


        <Category 
        imageUri={require('../assets/images/Evan_Stokes_Card.png')}
        name="Evan Stokes"/>
        </ScrollView>


        <View style={styles.containerThree}>
                            

        </View>
        <View style={styles.containerFour}>
        </View>

        <View style = {styles.textContainer}>
        <Text style= {{fontSize: 20, fontWeight: 'bold', marginTop: 20, marginLeft:10, paddingBottom: 15, color: '#96594A'}}> Most Visited Vendors</Text>
        </View>

        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>


        <Category 
        imageUri={require('../assets/images/Ian_Pratt_Card.png')}
        name="Ian Pratt"/>

        <Category 
        imageUri={require('../assets/images/Jimothy_Neal_Card.png')}
        name="Jimothy Neal"/>

        </ScrollView>


        <View style={styles.containerThree}>
                          
        </View>
        <View style={styles.containerFour}>
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
  rectangle: {
    flex: 1,
    alignItems: 'center',
    width: 110 * 2,
    height: 180,
    backgroundColor: '#FFFFFF',
    left: 10,
    margin: 15
},
  contentContainer: {
    paddingTop: 30,
  },
});