import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import Home from '../screens/Home';
import Screen1 from '../screens/Screen1';
import Login from '../screens/Login';
import Screen2 from '../screens/Screen2';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Screen1' component={Screen1}/>
            <Stack.Screen name='Screen2' component={Screen2}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeStack

const styles = StyleSheet.create({})