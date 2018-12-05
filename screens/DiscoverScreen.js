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


import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { SearchBar, Button} from 'react-native-elements';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Category from '../components/Category'
import DiscoverScreenFarmer from './DiscoverScreenFarmer'


// import { createStackNavigator, createAppContainer } from 'react-navigation'; 

// const RootStack = createStackNavigator(
// {
//     Farmer: DiscoverScreenFarmer,
//   },
// );

// const AppContainer = createAppContainer(RootStack);

import HomeScreen from '../screens/HomeScreen';

import { MonoText } from '../components/StyledText';

import Category from '../components/Category';

import searchScreen from '../screens/searchScreen';
import FarmerJohnProfile from '../screens/FarmerJohnProfile';



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
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>


        <SearchBar 
        round 
        lightTheme 
        placeholder='Search for all...' 
        containerStyle={{backgroundColor: '#F7EFEC',}}
        onChangeText={
          () => {Alert.alert('You tapped the button!');
        }}
        />


        <View style={{flexDirection: 'row', marginBottom: 10}}>
          
          <View style={styles.buttonContainer}>

            <TouchableOpacity 
              style={{ height: 100, margin: 10,
              backgroundColor: '#FFFFFF', alignItems: 'center', borderRadius: 20,}} 
              title="Button 1"
              onPress={
                () => {Alert.alert('You tapped the button!');
              }}
              >
              <Text style={{color: '#b5aaa5',}}> Markets </Text>
              
            </TouchableOpacity>

          </View>

          <View style={styles.buttonContainer}>

            <TouchableOpacity 
              style={{ height: 100, margin: 10,
              backgroundColor: '#DDDDDD', alignItems: 'center', 
              borderRadius: 20}} 
              onPress={
                () => this.props.navigation.navigate('DiscoverFarmer')
              }
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