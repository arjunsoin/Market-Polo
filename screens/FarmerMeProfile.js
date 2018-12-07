import React, { Component } from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

import { SearchBar, Button} from 'react-native-elements';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import Category from '../components/Category';
import BarterCategory from '../components/BarterCategory'
import ProfileCategory from '../components/ProfileCategory'

import { StackNavigator } from 'react-navigation';

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: 'My Profile',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 40,
      color: '#FFFFFF',
      textAlign: 'left',
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
        Alert.alert(
              'Change your story..',
              'Tap on text to edit!',
              [
                {text: 'Okay', onPress: () => console.log('Cancel Pressed!')},
              ],
          { cancelable: false }
        )
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>

        <View style = {styles.textContainer}>
        <TextInput style= {{fontSize: 32, fontWeight: 'bold', color: '#96594A', paddingTop: 5, margin: 12}}> Terry McGuire </TextInput>        
        </View>
        
        <View style={styles.profilePic}>

          <Image 
            style={{flex:1, height: 200, width: 200, borderRadius: 100, borderWidth: 3, borderColor: 'black',}}
            source={require('../assets/images/Terry.jpg')}
          />
        </View>
        <View style={styles.c1}>
          <View style={styles.bioContainer}>
            <TextInput multiline style={styles.bioText}>
              I started Wild West in 1978, after I began learning how to farm from my dad. I tried to show others around me the unique experience of how wonderful unsulfured apricots taste. They taste amazing!
              </TextInput>
          </View>
        </View>
        
        <ScrollView style = {{marginRight:20}} horizontal={true} showsHorizontalScrollIndicator={false}>




        <View style={styles.rectangle}>
            <Text style = {{color: '#96594A', fontWeight: 'bold', textDecorationLine: 'underline', textAlign: 'center', paddingTop: 10, }}> Personal Info </Text>
            <View style={{height:40, width:200, textAlign: 'center', flexDirection: 'row'}}>
              <Text style = {{color: '#96594A', right: 46, textAlign: 'center', paddingTop: 8, paddingLeft: 115}}> Age: </Text>
              <TextInput style = {{paddingLeft: 4, color: '#96594A', bottom: 3, right: 48, width:40}}>62</TextInput>
            </View>
        </View>

         <View style={styles.rectangle}>
            <Text style = {{textAlign: 'center', color: '#96594A', fontWeight: 'bold',textDecorationLine: 'underline', right: 30, paddingTop: 10, paddingLeft:30 }}>      Car Info </Text>
            <View style={{height:40, width:200,}}>
              <TextInput multiline style = {{paddingLeft: 20, color: '#96594A', alignContent: 'center', top: 3, left: 15, width:200}}>Make: Toyota Camry </TextInput>
              <TextInput multiline style = {{paddingLeft: 0, color: '#96594A', alignContent: 'center', top: 3, left: 15, width:200}}>Space: 400 Liters Available </TextInput>
            </View>
        </View>
        <View style={styles.rectangle}>
            <Text style = {{textAlign: 'center', color: '#96594A', fontWeight: 'bold',textDecorationLine: 'underline', right: 30, paddingTop: 10, paddingLeft:30 }}>         Product Genre </Text>
            <View style={{height:40, width:200,}}>
              <TextInput multiline style = {{paddingLeft: 20, color: '#96594A', alignContent: 'center', top: 3, left: 40, width:150}}>Mixed Fruits </TextInput>
            </View>
        </View>

       






        </ScrollView>

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
    margin: 15,
  },
  c1: {
    paddingLeft: 23,
    paddingRight: 23,
  },
  bioContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
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
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 16,

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
  rectangle: {
    flex: 1,
    alignItems: 'center',
    width: 110 * 2,
    height: 90,
    backgroundColor: '#FFFFFF',
    left: 10,
    margin: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },containerTwo: {
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