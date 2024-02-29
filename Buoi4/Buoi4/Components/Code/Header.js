import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        CODE
      </Text>

      <Text style={styles.text1}>
      VERIFICATION
      </Text>

      <Text style={styles.text2}>
      Enter ontime password sent on <br/>
++849092605798
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
  text: {
   
    textAlign: "center",
    fontSize: "76px",
    fontWeight: "bold",
    margin: 15,
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
