import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { StackNavigator } from 'react-navigation';
import emails from '../data/farmerData';
import { SearchBar, Button} from 'react-native-elements';
const KEYS_TO_FILTERS = ['user.name', 'subject'];
import { Icon } from 'react-native-elements';

export default class App extends Component {
  static navigationOptions = {
    title: 'Search',
    headerTitleStyle: {
      color: '#FFFFFF',
      fontSize: 30,
      textAlign: 'center',
    },

    headerTintColor: 'white',
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
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>

        <SearchBar 
          round 
          lightTheme 
          placeholder='Search for all...' 
          containerStyle={{backgroundColor: '#F7EFEC',}}
          onChangeText={
            (term) => { this.searchUpdated(term) }
          }
        />

        <ScrollView style= {{backgroundColor: '#F7EFEC',}}>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={() => navigate(email.navKey)} key={email.id} style={styles.emailItem}>

                <View style= {{flexDirection: 'row'}}>
                  <View>
                    <Image source={email.image}
                    style = {{height: 50, width: 50, borderRadius: 25, 
                    borderColor: '#96594a', borderWidth: 2,}}
                    />
                  </View>
                  <View style = {{left: 20}}>
                    <Text style = {{fontSize: 15}}>{email.user.name}</Text>
                    <Text style={styles.emailSubject}>{email.subject}</Text>
                  </View>
                  <View style = {{left: 20}}>
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
    justifyContent: 'flex-start',
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
    backgroundColor: '#FFF',
    borderRadius: 5,

  }
});