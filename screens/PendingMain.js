import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'

export default class PendingMain extends React.Component {
  static navigationOptions = {
    title: 'Pending',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 60,
      color: '#FFFFFF',
      textAlign: 'left',
      flex: 1,
    },
    headerStyle: {height: 105},
    headerBackground: (
      <Image
        style={StyleSheet.absoluteFill}
        source={require('../assets/images/header.jpg')}
      />
    ),
  };


  render() {
    return (

    <View style = {styles.container}>


      <View style = {styles.containerOne}>

        <View style={styles.textContainer}>
          <Text style= {{fontSize: 50, fontWeight: 'bold'}}> Barters </Text>


          <View style= {{flex: 1,}}>
          </View>
        </View>


        <ScrollView showsVerticalScrollIndicator={true} style = {{height: 140, 
          marginBottom: 50}}>
        <View style = {styles.farmerSnippet1}>

          <View> 
            <Image style = {{height: 100, width: 100, borderRadius: 10, left: 40, 
              borderColor: '#000', borderWidth: 5}}
            source={require('../assets/images/header.jpg')}/>
          </View>

           <View> 

            <Text h1 style= {{fontSize: 30, color: '#96594A', 
            left: 45}}> Farmer John </Text>
            <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#000', 
            margin: 10, left: 40,}}> You Receive: Apples    |    You Send: Pears </Text>
            <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#A9A9A9', 
            margin: 10, left: 40,}}> Note: Hi John! I’m trying to get my hands on... </Text>

          </View>
        </View>

        <View style = {styles.farmerSnippet1}>

          <View> 
            <Image style = {{height: 100, width: 100, borderRadius: 10, left: 40, 
              borderColor: '#000', borderWidth: 5}}
            source={require('../assets/images/header.jpg')}/>
          </View>

           <View> 

            <Text h1 style= {{fontSize: 30, color: '#96594A', 
            left: 45}}> Farmer Tina </Text>
            <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#000', 
            margin: 10, left: 40,}}> You Receive: Yogurt    |    You Send: Chicken </Text>
            <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#A9A9A9', 
            margin: 10, left: 40,}}> Note: Hey Tina! I really want some dairy on... </Text>

          </View>
        </View>
        </ScrollView>
      </View>

      <View style = {styles.containerTwo}>

        <View style={styles.textContainer}>
        <Text style= {{fontSize: 50, fontWeight: 'bold'}}> Carpools </Text>
          <View style= {{flex: 1,}}>
          </View>
        </View> 

        <ScrollView showsVerticalScrollIndicator={true} style = {{height: 140, 
          marginBottom: 60}}>

        <View style = {styles.farmerSnippet1}>

          <View> 
            <Image style = {{height: 100, width: 100, borderRadius: 10, left: 40, 
              borderColor: '#000', borderWidth: 5}}
            source={require('../assets/images/header.jpg')}/>
          </View>

           <View> 

            <Text h1 style= {{fontSize: 30, color: '#96594A', 
            left: 45}}> Farmer John </Text>
            <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#000', 
            margin: 10, left: 40,}}> You Receive: Apples    |    You Send: Pears </Text>
            <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#A9A9A9', 
            margin: 10, left: 40,}}> Note: Hi John! I’m trying to get my hands on... </Text>

          </View>

        </View>

        <View style = {styles.farmerSnippet1}>

          <View> 
            <Image style = {{height: 100, width: 100, borderRadius: 10, left: 40, 
              borderColor: '#000', borderWidth: 5}}
            source={require('../assets/images/header.jpg')}/>
          </View>

           <View> 

            <Text h1 style= {{fontSize: 30, color: '#96594A', 
            left: 45}}> Farmer Tina </Text>
            <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#000', 
            margin: 10, left: 40,}}> You Receive: Yogurt    |    You Send: Chicken </Text>
            <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#A9A9A9', 
            margin: 10, left: 40,}}> Note: Hey Tina! I really want some dairy on... </Text>

          </View>

        </View>

        <View style = {styles.farmerSnippet1}>

          <View> 
            <Image style = {{height: 100, width: 100, borderRadius: 10, left: 40, 
              borderColor: '#000', borderWidth: 5}}
            source={require('../assets/images/header.jpg')}/>
          </View>

           <View> 

            <Text h1 style= {{fontSize: 30, color: '#96594A', 
            left: 45}}> Farmer Tina </Text>
            <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#000', 
            margin: 10, left: 40,}}> You Receive: Yogurt    |    You Send: Chicken </Text>
            <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#A9A9A9', 
            margin: 10, left: 40,}}> Note: Hey Tina! I really want some dairy on... </Text>

          </View>

        </View>

        </ScrollView>

      </View>
      
    </View>
    );
  }
}


const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7EFEC',
  },
  containerOne: {
    flex: 1,
    backgroundColor: '#F7EFEC',

  },
    barterContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F7EFEC',
    justifyContent: 'center',
    textAlign: 'left',
  },
  containerTwo: {
    flex: 1,
    backgroundColor: '#F7EFEC',
  },
  containerThree: {
    flex: 1,
    backgroundColor: '#CCC',
  },
  farmerSnippet1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F7EFEC',

    right: 20
  },
});