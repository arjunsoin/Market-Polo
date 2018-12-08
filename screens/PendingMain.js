import * as React from 'react';
import { View, Animated, TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';
import emails from '../data/farmerData';
import SanthuVistaProfile from '../screens/SanthuVistaProfile';
import FarmerSanthuPic from '../assets/images/Santhu.jpg'
import { withNavigation } from 'react-navigation';
import Cheyenne from '../assets/images/CheyenneCarter.jpg'

import ChrisMontgomeryPicture from '../assets/images/Chris.jpg'





export default class PendingMain extends React.Component {
    static navigationOptions = {
    title: 'Pending',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30,
      color: '#FFFFFF',
      textAlign: 'center',
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


  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Barters' },
      { key: 'second', title: 'Carpools' },
    ],
  };



  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(
              inputIndex => (inputIndex === i ? '#96594A' : '#222')
            ),
          });
          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color, 
              fontSize: 30 }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render() {
    const {navigate} = this.props.navigation;
    const farmerName = this.props.navigation.getParam('farmerName', 'Cheyenne Carter')
    const imageName = this.props.navigation.getParam('imageName', Cheyenne)
    const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#F7EFEC' }]}>
          <View style = {styles.containerOne}>

        <ScrollView showsVerticalScrollIndicator={true} style = {{height: 200, 
          marginBottom: 50}}>
          <View style = {styles.farmerSnippet1}>

            <View> 
              <Image style = {{height: 90, width: 90, borderRadius: 45, left: 20, 
                borderColor: '#96594a', borderWidth: 3}}
              source={imageName}/>
            </View>

             <View> 

              <Text h1 style= {{fontSize: 26, color: '#96594A', 
              left: 30, top: 5}}> {farmerName} </Text>

              <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#000', 
              margin: 10, left: 28, flexWrap: "wrap"}}> My ask: Apples   |   My offer: Pears </Text>

              <Text h2 style= {{fontSize: 10, fontWeight: 'bold', color: '#A9A9A9', 
              left: 39, flexWrap: "wrap", bottom: 6}}> Note: Hi there! I’m trying to get my hands on... </Text>

            </View>
          </View>

          <View style = {styles.farmerSnippet2}>

            <View> 
              <Image style = {{height: 90, width: 90, borderRadius: 45, left: 20, 
                borderColor: '#96594a', borderWidth: 3}}
              source={require('../assets/images/Chris.jpg')}/>
            </View>

             <View> 

              <Text h1 style= {{fontSize: 26, color: '#96594A', 
              left: 30, top: 5}}> Chris Montgomery </Text>

              <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#000', 
              margin: 10, left: 28,}}> My ask: Yogurt  |  My offer: Chicken </Text>

              <Text h2 style= {{fontSize: 10, fontWeight: 'bold', color: '#A9A9A9', 
              left: 39, bottom: 6}}> Note: Hey there! I really want some dairy on... </Text>

            </View>
          </View>
        </ScrollView>
        </View>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#F7EFEC' }]}>

            <View style = {styles.containerOne}>

        <ScrollView showsVerticalScrollIndicator={true} style = {{height: 200, 
          marginBottom: 50}}>
          <View style = {styles.farmerSnippet1}>

            <View> 
              <Image style = {{height: 90, width: 90, borderRadius: 45, left: 20, 
                borderColor: '#96594a', borderWidth: 3}}
              source={imageName}/>
            </View>

             <View> 

              <Text h1 style= {{fontSize: 26, color: '#96594A', 
              left: 30, top: 5}}> {farmerName} </Text>

              <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#000', 
              margin: 10, left: 28, flexWrap: "wrap"}}> From: Palo Alto FM   |   To: Cal Ave FM </Text>

              <Text h2 style= {{fontSize: 10, fontWeight: 'bold', color: '#A9A9A9', 
              left: 39, flexWrap: "wrap", bottom: 6}}> Note: Hi there! I’m trying to go from this Pa... </Text>

            </View>
          </View>

          <View style = {styles.farmerSnippet2}>

            <View> 
              <Image style = {{height: 90, width: 90, borderRadius: 45, left: 20, 
                borderColor: '#96594a', borderWidth: 3}}
              source={require('../assets/images/Ian.jpg')}/>
            </View>

             <View> 

              <Text h1 style= {{fontSize: 26, color: '#96594A', 
              left: 30, top: 5}}> Ian Pratt </Text>
              <Text h2 style= {{fontSize: 12, fontWeight: 'bold', color: '#000', 
              margin: 10, left: 28,}}> From: Palo Alto FM   |   To: San Mateo FM </Text>
              <Text h2 style= {{fontSize: 10, fontWeight: 'bold', color: '#A9A9A9', 
              left: 39, bottom: 6}}> Note: Hey there! I'm planning to go to San M... </Text>

            </View>
          </View>
        </ScrollView>
        </View>



  </View>

);
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute
        })}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EFEC',
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 10, 
    backgroundColor: 'rgba(0,0,0,.25)'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
    textContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  containerOne: {
    flex: 1,
    backgroundColor: '#F7EFEC',
    padding: 20
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
    farmerSnippet2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F7EFEC',
    right: 50,
    margin: 30
  },
});
