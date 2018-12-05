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


        <SearchBar 
        round 
        lightTheme 
        placeholder='Search for all...' 
        containerStyle={{backgroundColor: '#F7EFEC',}}/>


        <View style={{flexDirection: 'row', marginBottom: 10}}>
        
        <View style={styles.buttonContainer}>

        <TouchableOpacity style={{ height: 100, margin: 10,
          backgroundColor: '#b5aaa5', alignItems: 'center', borderRadius: 20,}} 
          title="Button 1">
        <Text style={{color: '#FFFFFF',}}> Markets </Text>
        </TouchableOpacity>

        </View>
        <View style={styles.buttonContainer}>

        <TouchableOpacity 
          style={{ height: 100, margin: 10,
          backgroundColor: '#DDDDDD', alignItems: 'center', 
          borderRadius: 20}} 

          title="Button 2">

        <Text style={{color: '#FFFFFF',}}> Farmers </Text>
        
        </TouchableOpacity>

        </View>

        </View>

        <View style = {styles.textContainer}>
        <Text style= {{fontSize: 40, fontWeight: 'bold'}}> Today </Text>
        <Text style= {{fontSize: 20, fontWeight: 'bold', marginLeft:10, paddingBottom: 15}}> Active Vendors </Text>
        </View>


        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>


        <Category 
        imageUri={require('../assets/images/Farmer_John.png')}
        name="Farmer John"/>


        <Category 
        imageUri={require('../assets/images/Farmer_Tina.png')}
        name="Farmer Tina"/>


        <Category 
        imageUri={require('../assets/images/Farmer_Stacy.png')}
        name="Farmer Stacy"/>
        </ScrollView>


        <View style={styles.containerThree}>
                            

        </View>
        <View style={styles.containerFour}>
        </View>

        <View style = {styles.textContainer}>
        <Text style= {{fontSize: 20, fontWeight: 'bold', marginLeft:10, paddingBottom: 15}}> Farmers you've viewed </Text>
        </View>

        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>


        <Category 
        imageUri={require('../assets/images/Farmer_John.png')}
        name="Farmer John"/>

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
  contentContainer: {
    paddingTop: 30,
  },
});