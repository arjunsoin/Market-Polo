import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={{uri:'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c418e71dff67b8b39d175cae180cca1f&auto=format&fit=crop&w=668&q=80'}}>
        <Image source={{uri:'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c418e71dff67b8b39d175cae180cca1f&auto=format&fit=crop&w=668&q=80'}} 
        style={{width: 370, height: 360, bottom: 100}}/>

        <Button
        large
        title='LET US START!'
        style={{borderRadius: 30}}
        backgroundColor = '#F7EFEC'
        color = '#96594A'
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