import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import DiscoverScreenFarmer from '../screens/DiscoverScreenFarmer'
import FarmerJohnProfile from '../screens/FarmerJohnProfile'
import FarmerMeProfile from '../screens/FarmerMeProfile'
import PendingMain from '../screens/PendingMain';
import searchScreen from '../screens/searchScreen';
import BarterScreen from '../screens/BarterScreen'
import SignUpScreen from '../screens/SignUpScreen';
import CarpoolScreen from '../screens/CarpoolScreen';

const SplashStack = createStackNavigator({
  Discover: DiscoverScreen,
  Pending: PendingMain,
  FarmerJohn: FarmerJohnProfile,
  DiscoverFarmer: DiscoverScreenFarmer
});

SplashStack.navigationOptions = {
  tabBarLabel: 'Farmer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
}

const PendingStack = createStackNavigator({
  Pending: PendingMain,
})

PendingStack.navigationOptions = {
  tabBarLabel: 'Pending',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
}


SplashStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};


const HomeStack = createStackNavigator({
  Home: searchScreen,
});


HomeStack.navigationOptions = {
  tabBarLabel: 'Pending',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: FarmerMeProfile,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  SplashStack,
  PendingStack,
  LinksStack,
});
