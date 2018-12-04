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
import DiscoverScreenFarmer from './DiscoverScreenFarmer'

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: 'Barter',
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
        <View style={{paddingTop: 40, flexDirection: 'row', marginBottom: 10, justifyContent: 'space-evenly'}}>
          
          <View style = {styles.farmerMeProfile}>
            <Image
              style={{height: 125, width: 125}}
              source={require('../assets/images/Farmer_Me.png')}
              >
            </Image>
          </View>
          
          <View style = {styles.farmerJohnProfile}>
            <Image
              style={{height: 125, width: 125}}
              source={require('../assets/images/Farmer_John.png')}
              >
            </Image>
          </View>
        </View>


        <View style={{flexDirection: 'row', marginBottom: 10}}>
          
          <View style={styles.buttonContainer}>

            <TouchableOpacity 
              style={{ height: 100, margin: 10,
              backgroundColor: '#FFFFFF', alignItems: 'center', borderRadius: 20,}} 
              title="Button 1"

              >
              <Text style={{color: '#b5aaa5',}}> Markets </Text>
              
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
        <Text style= {{fontSize: 20, fontWeight: 'bold', marginLeft:10, paddingBottom: 15}}> What's happening around you today? </Text>
        </View>


        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>


        <Category 
        imageUri={require('../assets/images/home.jpg')}
        name="Burlingame Market"/>


        <Category 
        imageUri={require('../assets/images/home.jpg')}
        name="Palo Alto Market"/>


        <Category 
        imageUri={require('../assets/images/home.jpg')}
        name="San Mateo Market"/>
        </ScrollView>


        <View style={styles.containerThree}>
                            

        </View>
        <View style={styles.containerFour}>
        </View>

        <View style = {styles.textContainer}>
        <Text style= {{fontSize: 20, fontWeight: 'bold', marginLeft:10, paddingBottom: 15}}> Markets you've viewed </Text>
        </View>

        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>


        <Category 
        imageUri={require('../assets/images/home.jpg')}
        name="Burlingame Market"/>


        <Category 
        imageUri={require('../assets/images/home.jpg')}
        name="Palo Alto Market"/>


        <Category 
        imageUri={require('../assets/images/home.jpg')}
        name="San Mateo Market"/>
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
  farmerMeProfile: {
  },
  farmerJohnProfile: {
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