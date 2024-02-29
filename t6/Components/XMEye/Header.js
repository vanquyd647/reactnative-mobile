import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Header = () => {
  return (
    
    <View style={styles.container}>
      <Image
        source={require("../../assets/Eyecam.png")}
        style={styles.Ellipse}
      ></Image>
      
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
