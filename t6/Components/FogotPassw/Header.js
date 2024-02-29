import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/lock.png")}
        style={styles.imgLock}
      ></Image>

      <Text style={styles.text1}>
        FORGET <br /> PASSWORD
      </Text>

      <Text style={styles.text2}>
        Provide your account’s email for which you want to reset your password
      </Text>
      <View style={styles.mail}>
        <Image
          source={require("../../assets/mail.png")}
          style={styles.imgMail}
        ></Image>
        <TextInput style={styles.textInput} placeholder="Email"></TextInput>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imgLock: {
    width: 140,
    height: 160,
    marginTop: 70,
  },
  text1: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
    margin: 15,
    marginTop: 20,
  },
  text2: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
    margin: 15,
    marginTop: 20,
  },
  mail: {
    flexDirection: "row",
  },
  imgMail: {
    width: 48,
    height: 45,
  },
  textInput: {
    width:300,
    height:45,
    backgroundColor:'#c4c4c4',
  },
});

export default Header;
