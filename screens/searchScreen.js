import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { StackNavigator } from 'react-navigation';
import emails from '../data/farmerData';
const KEYS_TO_FILTERS = ['user.name', 'subject'];
import { Icon } from 'react-native-elements';

export default class App extends Component {
  static navigationOptions = {
    title: 'Discover',
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
 constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Search for farmers here.."
          />
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
                <View style= {{flexDirection: 'row'}}>
                  <View>
                    <Image source={require('../assets/images/header.jpg')}
                    style = {{height: 50, width: 50, borderRadius: 25, 
                    borderColor: '#000', borderWidth: 5,}}
                    />
                  </View>
                  <View style = {{left: 20}}>
                    <Text style = {{fontSize: 15}}>{email.user.name}</Text>
                    <Text style={styles.emailSubject}>{email.subject}</Text>
                  </View>
                  <View style = {{left: 20}}>
                    <Icon
                    name="forward"/>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EFEC',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)', 
    fontSize: 20, 
  },
  searchInput:{
    padding: 10,
    borderColor: '#DDD',
    borderWidth: 3
  }
});