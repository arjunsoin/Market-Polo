import React, { Component } from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { SearchBar, Button} from 'react-native-elements';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import Category from '../components/Category'

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
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
        <Text style= {{fontSize: 30, fontWeight: 'bold', color: '#000000', paddingTop: 30,}}> Personal Info </Text>      
        </View>

        <View style = {{height: 50, width: 400, flex: 1, flexDirection: 'row', alignItems: 'center', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center'}}>   
          <Text style= {{fontSize: 20, fontWeight: 'normal', color: '#000000', paddingLeft: 30, justifyContent: 'flex-start',}}> First Name* </Text>    
          <TextInput
            placeholder= '      John' style={{fontSize: 20, flex: 1, height: 40, width: 140, borderRadius: 20, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,  justifyContent: 'flex-end',}}
            onChangeText={(text) => this.setState({text})}
          />   
        </View>

        <View style = {{paddingTop: 30, height: 70, width: 400, flex: 1, flexDirection: 'row', alignItems: 'center', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center'}}>   
          <Text style= {{fontSize: 20, fontWeight: 'normal', color: '#000000', paddingLeft: 30, justifyContent: 'flex-start',}}> Last Name* </Text>    
          <TextInput
            placeholder= '      Doe' style={{fontSize: 20, flex: 1, height: 40, width: 140, borderRadius: 20, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,  justifyContent: 'flex-end',}}
            onChangeText={(text) => this.setState({text})}
          />   
        </View>
        

        <View style = {styles.textContainer}>
        <Text style= {{fontSize: 20, fontWeight: 'normal', color: '#000000', paddingTop: 30, paddingLeft: 35}}> Get Picture </Text>        
        </View>

        <View style = {styles.textContainer}>
        <Text style= {{fontSize: 30, fontWeight: 'bold', color: '#000000', paddingTop: 80}}> Account Info </Text>        
        </View>

        <View style = {{paddingTop: 30, height: 70, width: 400, flex: 1, flexDirection: 'row', alignItems: 'center', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center'}}>   
          <Text style= {{fontSize: 20, fontWeight: 'normal', color: '#000000', paddingLeft: 30, justifyContent: 'flex-start',}}> Username* </Text>    
          <TextInput
            placeholder= '      jdoe' style={{fontSize: 20, flex: 1, height: 40, width: 140, borderRadius: 20, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,  justifyContent: 'flex-end',}}
            onChangeText={(text) => this.setState({text})}
          />   
        </View>

        <View style = {{paddingTop: 30, height: 70, width: 400, flex: 1, flexDirection: 'row', alignItems: 'center', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center'}}>   
          <Text style= {{fontSize: 20, fontWeight: 'normal', color: '#000000', paddingLeft: 30, justifyContent: 'flex-start',}}> Password* </Text>    
          <TextInput
            placeholder= '     choose something strong!' style={{fontSize: 20, flex: 1, height: 40, width: 140, borderRadius: 20, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,  justifyContent: 'flex-end',}}
            onChangeText={(text) => this.setState({text})}
          />   
        </View>

        <View style = {{paddingTop: 0, height: 90, width: 400, flex: 1, flexDirection: 'row', alignItems: 'center', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center'}}>   
        <Text style= {{fontSize: 20, fontWeight: 'normal', color: '#000000', paddingLeft: 44, textAlign: 'left', justifyContent: 'flex-start'}}> Confirm* </Text>        
        <TextInput
            placeholder= '     re-enter your password' style={{fontSize: 20, flex: 1, height: 40, width: 140, borderRadius: 20, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,  justifyContent: 'flex-end',}}
            onChangeText={(text) => this.setState({text})}
          />   
        </View>

        <View style={{flexDirection: 'row', paddingTop: 0, marginBottom: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
          
          <View style={styles.barterButton}>    
            <TouchableOpacity
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              style={{
                backgroundColor: "#96594A",
                borderColor: "transparent",
                width: 200,
                height: 70,
                borderWidth: 0,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
              }}

            >
              <View style={styles.barterText}>    
                <Text style={{color: '#FFFFFF', fontSize: 40, fontWeight: 'bold'}}> Sign Up! </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'row',
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