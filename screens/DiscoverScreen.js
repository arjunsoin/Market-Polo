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
    headerTintColor: 'white',
    headerLeft: null,
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
          () => navigate('Search')
        }
        />


        <View style={{flexDirection: 'row', marginBottom: 10}}>
          
          <View style={styles.buttonContainer}>

            <TouchableOpacity 
              style={{ height: 25, margin: 10,
              backgroundColor: '#FFFFFF', alignItems: 'center', borderRadius: 20, textAlignVertical: 'center', justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 5,
              }} 
              title="Button 1"
              >
              <Text style={{color: '#96594A',}}> Markets </Text>
              
            </TouchableOpacity>

          </View>

          <View style={styles.buttonContainer}>

            <TouchableOpacity 
              style={{ height: 25, margin: 10,
              backgroundColor: '#DDDDDD', alignItems: 'center', textAlignVertical: 'center', justifyContent: 'center',
              borderRadius: 20,              
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 5,}}
              title="Button 2"
              onPress={() => navigate('DiscoverFarmer')}
              >


            <Text style={{color: '#96594A',}}> Farmers </Text>
            
            </TouchableOpacity>

          </View>

        </View>

        <View style = {styles.textContainer}>
        <Text style= {{fontSize: 40, fontWeight: 'bold', color: '#96594A'}}> Today </Text>
        <Text style= {{fontSize: 20, fontWeight: 'bold', marginLeft:10, paddingBottom: 15, color: '#96594A'}}> What's happening around you today? </Text>
        </View>


        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>

            <View style={styles.rectangle}>
            <Text style = {{color: '#000', fontWeight: 'bold', right: 30}}> Burlingame Market </Text>
            <Text style = {{color: '#000', right: 46}}> Burlingame, CA </Text>
            <Image style = {{width: 140, height: 105, top: 10}} source={require('../assets/images/map.png')}/>
            <TouchableOpacity
            style={{alignItems: 'center', backgroundColor: '#96594A', top: 15,
            borderRadius: 6, width: 120, height: 20}}
            onPress={() => navigate('Burlingame')}
            >
              <Text style = {{color: '#FFFFFF'}}> Visit Market! </Text>
            </TouchableOpacity>

        </View>

                    <View style={styles.rectangle}>
            <Text style = {{color: '#000', fontWeight: 'bold', right: 30}}> San Mateo Market </Text>
            <Text style = {{color: '#000', right: 46}}> Burlingame, CA </Text>
            <Image style = {{width: 140, height: 105, top: 10}} source={require('../assets/images/map.png')}/>
            <TouchableOpacity
            style={{alignItems: 'center', backgroundColor: '#96594A', top: 15,
            borderRadius: 6, width: 120, height: 20}}
            onPress={() => navigate('SanMateo')}
            >
              <Text style = {{color: '#FFFFFF'}}> Visit Market! </Text>
            </TouchableOpacity>

        </View>

                    <View style={styles.rectangle}>
            <Text style = {{color: '#000', fontWeight: 'bold', right: 30}}> Palo Alto Market </Text>
            <Text style = {{color: '#000', right: 46}}> Burlingame, CA </Text>
            <Image style = {{width: 140, height: 105, top: 10}} source={require('../assets/images/map.png')}/>
            <TouchableOpacity
            style={{alignItems: 'center', backgroundColor: '#96594A', top: 15,
            borderRadius: 6, width: 120, height: 20}}
            onPress={() => navigate('PaloAlto')}
            >
              <Text style = {{color: '#FFFFFF'}}> Visit Market! </Text>
            </TouchableOpacity>

        </View>

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



                    <View style={styles.rectangle}>
            <Text style = {{color: '#000', fontWeight: 'bold', right: 30}}> Burlingame Market </Text>
            <Text style = {{color: '#000', right: 46}}> Burlingame, CA </Text>
            <Image style = {{width: 140, height: 105, top: 10}} source={require('../assets/images/map.png')}/>
            <TouchableOpacity
            style={{alignItems: 'center', backgroundColor: '#96594A', top: 15,
            borderRadius: 6, width: 120, height: 20}}
            onPress={() => navigate('Burlingame')}
            >
              <Text style = {{color: '#FFFFFF'}}> Visit Market! </Text>
            </TouchableOpacity>

        </View>

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
  barterButton:{
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  barterText:{
    textAlignVertical: 'center',
    margin: 10,
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
    rectangle: {
    flex: 1,
    alignItems: 'center',
    width: 110 * 2,
    height: 180,
    backgroundColor: '#FFFFFF',
    left: 10,
    margin: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
},
  contentContainer: {
    paddingTop: 30,
  },
});