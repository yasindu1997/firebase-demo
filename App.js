import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import Home from './screens/HomeScreen'
import SignUp from './screens/SignupScreen'
import InsertBook from './screens/InsertBook'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={
            { headerShown: false }
          }
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="InsertBook" component={InsertBook} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
