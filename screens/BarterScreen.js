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
  TouchableHighlight,
  TextInput,
} from 'react-native';

import { SearchBar, Button, CheckBox} from 'react-native-elements';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import BarterCategory from '../components/BarterCategory'
import DiscoverScreenFarmer from './DiscoverScreenFarmer'

var sendArray = [];
var receiveArray = [];
    var dried_fruit = 'Dried fruit'
    var apricots = 'apricots'
    var apples = 'apples'
    var kabob = 'kabobs'
    var chicken = 'chicken'
    var ribs = 'ribs'


export default class DiscoverScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { Send: [], askFor: [], }
  }

  AddItemsToSendArray=(item)=>{
      //Adding Items To Array.
      sendArray.length < 3 ? sendArray.push( item ) : null;
      // Showing the complete Array on Screen Using Alert.
      this.setState({ Send : sendArray })
  }

  AddItemsToReceiveArray=(item)=>{
      //Adding Items To Array.
      receiveArray.length < 3 ? receiveArray.push( item ) : null;
      
      this.setState({ askFor : receiveArray })
  }

  RemoveSendItemsFromArray = (array) => {
    array.pop();
    this.setState({Send: array})
  }

  RemoveReceiveItemsFromArray = (array) => {
    array.pop();
    this.setState({askFor: array})
  }

  static navigationOptions = {
    title: 'Barter',
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
      <ScrollView style={styles.container}>



        <View style={{paddingTop: 20, flexDirection: 'row', marginBottom: 10, justifyContent: 'center',}}>
          
          <View style = {styles.farmerMeProfile}>
            <Image
              style={{height: 75, width: 75, borderRadius: 37, borderWidth: 2, borderColor: 'black',}}
              source={require('../assets/images/Terry.jpg')}
              >
            </Image>
          </View>

          <View style = {styles.farmerJohnProfile}>
            <Image
              style={{height: 75, width: 75, borderRadius: 37, borderWidth: 2,borderColor: 'black',}}
              source={imageName}
              >
            </Image>
          </View>
        </View>
        



        <View style={{}}>
          <Text style= {{color: '#96594A', fontSize: 30, fontWeight: 'bold', margin: 15}}> I send: </Text>
        </View>


        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>

        
          <BarterCategory 
          imageUri={require('../assets/products/dried_fruit.png')}
          name="Burlingame Market"
          productcaption='Dried fruit'
          method={() => {this.AddItemsToSendArray('Dried fruit') }}
          />

          <BarterCategory 
          imageUri={require('../assets/products/apples.png')}
          name="Palo Alto Market"
          productcaption='Apples'
          method={() => {this.AddItemsToSendArray('Apples') }}
          />


          <BarterCategory 
          imageUri={require('../assets/products/apricots.png')}
          name="San Mateo Market"
          productcaption='Apricots'
          method={() => {this.AddItemsToSendArray('Apricots') }}/>
        </ScrollView>

        <View style={{}}>
          <Text style= {{color: '#96594A',fontSize: 20, fontWeight: 'bold', margin: 15}}> Your selected items: </Text>
        </View>
        
        <View style={{flexDirection: 'row'}}>
            {
                sendArray.map((y) => {
                    return (
                    <TouchableOpacity style={{backgroundColor: "#96594A", borderColor: "transparent",width: 100, 
                    height: 25, borderWidth: 0,borderRadius: 10, margin: 10, shadowColor: '#000', 
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5,shadowRadius: 5,}}
                    onPress={() => {this.RemoveSendItemsFromArray(sendArray)}}
                    >
                      <View style={styles.barterText}>
                        <Text style= {{color: '#FFFFFF',fontSize: 16, fontWeight: 'bold',}}>{y}</Text>
                      </View>
                    </TouchableOpacity>
                    );
                })
            }
        </View>

        <View style={{}}>
          <Text style= {{color: '#96594A',fontSize: 30, fontWeight: 'bold', margin: 15}}> I ask for: </Text>
        </View>
      


        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>


          <BarterCategory 
          imageUri={require('../assets/products/kabob.png')}
          name="Burlingame Market"
          productcaption='Pork Kabobs'
          method={() => {this.AddItemsToReceiveArray('Pork Kabobs') }}
          />


          <BarterCategory 
          imageUri={require('../assets/products/ribs.png')}
          name="Palo Alto Market"
          productcaption='Fresh Ribs'
          method={() => {this.AddItemsToReceiveArray('Ribs') }}
          />


          <BarterCategory 
          imageUri={require('../assets/products/chicken.png')}
          name="San Mateo Market"
          productcaption='Chicken'
          method={() => {this.AddItemsToReceiveArray('Chicken') }}
          />
        </ScrollView>

        <View style={{}}>
          <Text style= {{color: '#96594A',fontSize: 20, fontWeight: 'bold', margin: 15}}> Your selected items: </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
            {
                receiveArray.map((y) => {
                    return (
                    <TouchableOpacity style={{backgroundColor: "#96594A", borderColor: "transparent",width: 100, 
                    height: 25, borderWidth: 0,borderRadius: 10, margin: 10, shadowColor: '#000', 
                    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5,shadowRadius: 5,}}
                    onPress={() => {this.RemoveReceiveItemsFromArray(receiveArray)}}
                    >
                      <View style={styles.barterText}>
                        <Text style= {{color: '#FFFFFF',fontSize: 16, fontWeight: 'bold',}}>{y}</Text>
                      </View>
                    </TouchableOpacity>
                    );
                })
            }
        </View>



<View style = {{margin:20}}>
<View style={styles.bioContainer}>
<TextInput multiline style={{textAlign: 'left'}} placeholder="Add a Note..."></TextInput>
</View>
</View>


        <View style={styles.barterButton}>    
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
    alignItems: 'center',
    margin: 20,
  },
  barterText:{
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    flex: 1,
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
  farmerMeProfile: {
    paddingRight: 5,
  },
  farmerJohnProfile: {
    paddingLeft: 5,
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