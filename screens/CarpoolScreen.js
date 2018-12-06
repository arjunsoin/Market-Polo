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
  Picker,
  TextInput,
} from 'react-native';

import { SearchBar, Button} from 'react-native-elements';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Category from '../components/Category'
import DiscoverScreenFarmer from './DiscoverScreenFarmer'


class PickerExample extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Text style= {{color: '#96594A',fontSize: 30, fontWeight: 'bold'}}> Requesting ride from: </Text>
            <Text style= {{color: '#000000',fontSize: 20, fontWeight: 'bold'}}> Markets you frequent: </Text>
            <View style= {{borderRadius: 10, borderWidth: 2,borderColor: '#DDDADA',}}>
              <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                 <Picker.Item label = "Palo Alto Market" value = "Palo Alto Market" />
                 <Picker.Item label = "Burlingame Market" value = "Burlingame Market" />
                 
              </Picker>
            </View>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
      )
   }
}


export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: 'Carpool',
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

        <PickerExample />
        <View style = {{alignItems: 'center'}}>
          <Text style = {{fontSize: 20, color: '#96594A'}}>Location not listed above? </Text>
        </View>

        <View style = {{alignItems: 'center',}}>

          <View style = {{height: 50, width: 300, flex: 1, flexDirection: 'row', alignItems: 'center', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center', paddingTop: 40, paddingBottom: 40}}>   
            <TextInput
              placeholder= '      Enter other location here' style={{fontSize: 15, flex: 1, height: 40, width: 140, borderRadius: 20, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,  justifyContent: 'flex-end',}}
              onChangeText={(text) => this.setState({text})}
            />   
          </View>
        </View>


       <PickerExample />
        <View style = {{alignItems: 'center'}}>
          <Text style = {{fontSize: 20, color: '#96594A'}}>Location not listed above? </Text>
        </View>

        <View style = {{alignItems: 'center',}}>

          <View style = {{height: 50, width: 300, flex: 1, flexDirection: 'row', alignItems: 'center', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center', paddingTop: 40, paddingBottom: 40}}>   
            <TextInput
              placeholder= '      Enter other location here' style={{fontSize: 15, flex: 1, height: 40, width: 140, borderRadius: 20, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,  justifyContent: 'flex-end',}}
              onChangeText={(text) => this.setState({text})}
            />   
          </View>
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


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
      fontSize: 30,
      alignSelf: 'center',
      color: '#96594A'
  },
  container: {
    flex: 1,
    backgroundColor: '#F7EFEC',
  },
  carpoolButton:{
    paddingTop: 15,
    paddingRight: 20,
    justifyContent: 'center',
        alignItems: 'center',

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