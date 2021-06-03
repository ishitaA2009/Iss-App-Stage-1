import * as React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MeteorScreen from './screens/MeteorScreen';
import IssLocationScreen from './screens/IssLocationScreen';
import UpdateScreen from './screens/UpdateScreen';
import {StatusBar} from 'expo-status-bar';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
function App(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Home'>
          <Stack.Screen name = 'Home' component = {HomeScreen}/>
          <Stack.Screen name = 'IssLocation' component = {IssLocationScreen}/>
          <Stack.Screen name = 'Meteors' component = {MeteorScreen}/>
          <Stack.Screen name = 'Updates' component = {UpdateScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}
export default App;