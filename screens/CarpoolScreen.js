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

import DropdownMenu from 'react-native-dropdown-menu';

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
     var data = [["Request from", "Paicines", "Monterey", "Placerville", 
     "Nevada City","Other"], ["Request to", "San Mateo Market", "Burlingame Market", 
     ,"Palo Alto (Downtown) Market", "Other"]];
      return (
        <View>

        <View style={{flex: 1, top: 120}}>
        <View style={{height: 64}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'brown'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          maxHeight={150} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        > 
        </DropdownMenu>
      </View>

           
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
      textAlign: 'center',
      flex: 1,
    },
    headerTintColor: 'white',
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
    const farmerName = this.props.navigation.getParam('farmerName', 'Farmer X')
    const imageName = this.props.navigation.getParam('imageName', 'Farmer X')
    return (
      <View style={styles.container}>      
 
        <View style={{paddingTop: 20, flexDirection: 'row', marginBottom: 10, justifyContent: 'center',}}>
          
          <View style = {styles.farmerMeProfile}>
            <Image
              style={{height: 115, width: 115, borderRadius: 55, borderWidth: 2,borderColor: 'black',}}
              source={require('../assets/images/Farmer_Me.png')}
              >
            </Image>
          </View>

          <View style = {styles.farmerJohnProfile}>
            <Image
              style={{height: 115, width: 115, paddingLeft: 30, borderRadius: 55, borderWidth: 2,borderColor: 'black',}}
              source={require('../assets/images/Farmer_John.png')}
              >
            </Image>
          </View>
        </View>

        <PickerExample/>

    
        <View style={styles.carpoolButton}>    
          <TouchableOpacity
              onPress={
                () => navigate('Pending',{
                  farmerName: farmerName,
                  imageName: imageName,
                  otherParam: 'Ben is the best',
                })
              }
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
              top: 15
            }}
          >
            <View style={styles.barterText}>    
              <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold'}}> Carpool! </Text>
            </View>  
          </TouchableOpacity>
        </View>  
        
<View style = {{margin:5}}>
<View style={styles.bioContainer}>
<TextInput multiline style={{textAlign: 'left'}} placeholder="Add a Note..."></TextInput>
</View>
</View>

      </View>
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
    paddingTop: 50,
    paddingRight: 20,
    bottom: 50,
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
  bioContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 40,
    borderWidth: 2,
    borderColor: 'black',
    elevation: 1,
  },
});