import *as React from 'react';
import HomeScreen from './screens/Home';
import StarScreen from "./screens/Star";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer  } from "@react-navigation/native";

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Star' component={StarScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}