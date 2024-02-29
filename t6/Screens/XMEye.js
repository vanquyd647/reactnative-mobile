import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../Components/XMEye/Header";
import Body from "../Components/XMEye/Body";
import Footer from "../Components/XMEye/Footer";

import { LinearGradient } from "expo-linear-gradient";

const XMEye = () => {
  return (
    
    <View style={styles.container}>
    <Header/>
    <Body/>
    <Footer/>
  </View>
   
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    
  },
});
export default XMEye;
