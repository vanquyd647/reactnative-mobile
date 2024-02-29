import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../Components/FirstScreen/Header";
import Footer from "../Components/FirstScreen/Footer";
import { LinearGradient } from "expo-linear-gradient";

const FirstScreen = () => {
  return (
    
    <View style={styles.container}>
    <Header />
    <Footer />
  </View>
   
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "rgba(0, 204, 249, 1), rgba(0, 204, 249, 1)",
  },
});
export default FirstScreen;
