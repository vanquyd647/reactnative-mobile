import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../Components/Login1.js/Header";
import Footer from "../Components/Login1.js/Footer";
import { LinearGradient } from "expo-linear-gradient";

const Login1 = () => {
  return (
    <LinearGradient
      style={styles.a}
      colors={["#c7f4f6", "#d1f4f6", "#e5f4f5", "#00ccf9"]}
    > 
    <View style={styles.container}>
    <Header />
    <Footer />
    <Text style={styles.text3}>HOW WE WORK?</Text>
  </View>
  </LinearGradient>
   
  );
};
const styles = StyleSheet.create({
  a: {
    display: "flex",
    flex: 1,
   
  },
  text3:{
    marginTop:50,
    textAlign:'center',
    fontSize:"16px",
    fontWeight: 'bold',
  }
});
export default Login1;
