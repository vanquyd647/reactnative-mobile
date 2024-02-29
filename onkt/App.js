import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import React from 'react';
import HomeStack from './navigation/homeStack';
import Login from './screens/Login';
import Screen1 from './screens/Screen1';
export default function App() {

  return(
    <HomeStack/>
  )
  
}

