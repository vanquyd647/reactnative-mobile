import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Header = () => {
  return (
    
    <View style={styles.container}>
      <Image
        source={require("../../assets/Ellipse 8.png")}
        style={styles.Ellipse}
      ></Image>
      <Text style={styles.text1}>
        GROW <br />
        YOUR BUSINESS
      </Text>
      <Text style={styles.text2}>We will help you to grow your business using online server</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },
    Ellipse: {
    width: 140,
    height: 140,
    marginTop:70,
  },
  text1: {
    marginTop: 50,
    textAlign: "center",
    color: "#000000",
    fontFamily: "Roboto-Bold",
    fontSize: "25px",
    fontWeight: "700",
  },
  text2:{
    marginTop:50,
    textAlign:'center',
    fontSize:"16px",
    fontWeight: 'bold',
  }
});

export default Header;
