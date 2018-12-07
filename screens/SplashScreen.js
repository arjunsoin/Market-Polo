import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Alert } from 'react-native';
import { Button } from 'react-native-elements'

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground style={styles.container} source={require('../assets/images/home.jpg')}>
        <Image source={require('../assets/images/logo.jpg')} 
        style={{width: 370, height: 360, bottom: 100}}/>

        <Button
        large
        title='GET STARTED!' 
        borderRadius = '30'
        backgroundColor = '#F7EFEC'
        color = '#96594A'
        onPress={() => navigate('Discover')}
        />

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});