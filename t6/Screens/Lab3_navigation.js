import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../Components/Lab3_navigation/Header";
import Body from "../Components/XMEye/Body";
import Footer from "../Components/XMEye/Footer";

import { LinearGradient } from "expo-linear-gradient";

const Lab3navigation = () => {
  return (
    
    <View style={styles.container}>
    <Header/>
  
  </View>
   
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    
  },
});
export default Lab3navigation;
