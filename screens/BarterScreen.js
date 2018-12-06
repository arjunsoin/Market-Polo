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



        <View style={{paddingTop: 20, flexDirection: 'row', marginBottom: 10, justifyContent: 'center',}}>
          
          <View style = {styles.farmerMeProfile}>
            <Image
              style={{height: 75, width: 75, borderRadius: 10, borderWidth: 2,borderColor: 'black',}}
              source={require('../assets/images/Farmer_Me.png')}
              >
            </Image>
          </View>

          <View style = {styles.farmerJohnProfile}>
            <Image
              style={{height: 75, width: 75, borderRadius: 10, paddingLeft: 30, borderRadius: 10, borderWidth: 2,borderColor: 'black',}}
              source={require('../assets/images/Farmer_John.png')}
              >
            </Image>
          </View>
        </View>

        <View style={{}}>
          <Text style= {{color: '#96594A', fontSize: 30, fontWeight: 'bold'}}> I send: </Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>


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

        <View style={{flexDirection: 'row', marginBottom: 10}}>

        </View>
        
        <View style={{}}>
          <Text style= {{color: '#96594A',fontSize: 30, fontWeight: 'bold'}}> I ask for: </Text>
        </View>
       
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>


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

        <View style={styles.barterButton}>    
            <TouchableOpacity
              onPress={() => navigate('Pending')}
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
    paddingTop: 15,
    paddingLeft: 20,
  },
  barterText:{
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  farmerMeProfile: {
    paddingRight: 30,
  },
  farmerJohnProfile: {
    paddingLeft: 30,
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