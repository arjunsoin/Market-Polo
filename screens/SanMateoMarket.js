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
      fontSize: 30,
      color: '#FFFFFF',
      textAlign: 'center',
      flex: 1,
    },
    headerStyle: {height: 75},    headerTintColor: 'white',
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
        
        <View style = {styles.textContainer}>
        <Text style= {{fontSize: 26, fontWeight: 'bold', color: '#96594A'}}>  San Mateo Market </Text>
        <Text style= {{fontSize: 13, fontWeight: 'bold', marginLeft:10, paddingBottom: 0}}> Where:           262 Marian Dirt Road </Text>
        <Text style= {{fontSize: 13, fontWeight: 'bold', marginLeft:10, paddingBottom: 15}}>                          San Mateo, CA 94305 </Text>

        <Text style= {{fontSize: 13, fontWeight: 'bold', marginLeft:10, paddingBottom: 0}}>  When:           Tuesdays 1-4pm </Text>
        <Text style= {{fontSize: 13, fontWeight: 'bold', marginLeft:10, paddingBottom: 15}}>                          Thursdays 2-5pm </Text>
        </View>

        <View style={styles.buttonContainer}>

        <TouchableOpacity 
          onPress={() => navigate('Map')}
          style={{ height: 30, margin: 10,
          backgroundColor: '#96594a', alignItems: 'center', 
          borderRadius: 20}} 

          title="Button 2">
        <View style = {{alignItems: 'center', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center', flex:1}}>
          <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}> Market Map </Text>
        </View>
        </TouchableOpacity>

        </View>

        </View>

        <View style = {styles.textContainer}>
        <Text style= {{fontSize: 26, fontWeight: 'bold', color: '#96594A'}}>  Browse Vendors </Text>
        <Text style= {{fontSize: 20, fontWeight: 'bold', marginTop: 5, marginLeft:10, paddingBottom: 15, color: '#96594A'}}> Active Vendors </Text>
        </View>


        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>

        <TouchableOpacity
          onPress={() => navigate('JimothyNeal')}
        >
          <Category 
          imageUri={require('../assets/images/Jimothy_Neal_Card.png')}
          name="Jimothy Neal"/>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigate('IanPratt')}
        >
          <Category 
          imageUri={require('../assets/images/Ian_Pratt_Card.png')}
          name="Ian Pratt"/>
        </TouchableOpacity>


        
        <TouchableOpacity
          onPress={() => navigate('CheyenneCarter')}
        >
          <Category 
          imageUri={require('../assets/images/Charlene_Carter_Card.png')}
          name="Charlene Carter"/>
        </TouchableOpacity>

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


        <TouchableOpacity
          onPress={() => navigate('SanthuVista')}
        >
          <Category 
          imageUri={require('../assets/images/Santhu_Vista_Card.png')}
          name="Santhu Vista"/>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigate('ClarissaWoods')}
        >
          <Category 
          imageUri={require('../assets/images/Clarissa_Woods_Card.png')}
          name="Clarissa Woods"/>
        </TouchableOpacity>



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