import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";

var url = "https://65673f8564fcff8d73100765.mockapi.io/user";

const Login = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [note, setNote] = useState('');
  const [id, setId] = useState('');
  
 
  function fc() {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., show an error message to the user
      });
  }
  

  useEffect(fc, []);
  console.log(data);
  const btnLogin = () => {
    const user = data.find(item => item.user === username && item.pass === password);

    if (user) {
      console.log('Login successful:', user);
      Alert.alert('Login Successful', 'Welcome!');
      navigation.navigate("Home", { user });
      // Handle successful login, e.g., navigate to another screen
    } else {
      console.error('Login failed');
      Alert.alert('Login Failed', 'Username or password is incorrect. Please try again.');
    }
  };
  const btnDangKy = () => {
    const existingUser = data.find(item => item.user === username);

    if (existingUser) {
      // If the username exists, show an alert and return
     Alert.alert('Registration Failed', 'Username already exists. Please choose a different username.');
     console.log('Registration Failed', 'Username already exists. Please choose a different username.')
      return;
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        user: username,
        pass: password,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // Check the response to determine if registration was successful
        console.log('Registration response:', json);
        Alert.alert('Registration Successful', 'Account created successfully!');
        fc();
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        Alert.alert('Registration Failed', 'Unable to create an account. Please try again.');
      });
      
  };
  useEffect(fc, []);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Image 95.png')} style={styles.imgnote}/>
      <TextInput
        style={styles.textip1}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.textip1}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Pressable onPress={btnLogin} style={styles.Press1}>
        <Text style={styles.textPress}>Dang Nhap</Text>
      </Pressable>
      <Pressable onPress={btnDangKy} style={styles.Press1}>
        <Text style={styles.textPress}>Dang Ky</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textip1: {
        fontSize: 16,
        height: 40,
        width: 300,
        marginTop: 40,
        borderWidth: 1,
        borderColor: "#fff",
        borderBottomColor: "gray",
        padding: 10,
        paddingLeft: 40,
        justifyContent:"center"
      },
      Press1: {
        borderWidth: 1,
        borderRadius: 20,
        height: 50,
        width: 300,
        padding: 10,
        backgroundColor: '#00BDD6',
        borderStyle:"dotted",
        justifyContent:"center",
        marginTop: 20,
      },
      textPress:{
        textAlign:"center"
      },
      imgnote:{
        height:271,
        width: 271,
        
      }
})