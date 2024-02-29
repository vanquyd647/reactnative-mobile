import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
    var [username, setUsername] = useState('');
    var [password, setpassword] = useState('');

    var [username1, setUsername1] = useState('');
    var [password1, setpassword1] = useState('');

    var array=[{
        username:'Quy',
        password:'123'
    }]
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
  };
  function check(){
        setUsername1(username);
        setpassword1(password);
        Alert.alert("success")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>LOGIN</Text>
      <Text style={styles.label}>User name:</Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#333" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="  Name"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      <Text style={styles.label}>Password:</Text>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#333" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder=" Password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="#333" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText2}>LOGIN</Text> {/* Đổi màu cho chữ "Login" */}
      </TouchableOpacity>
      <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: 'black', // Đổi màu nền của nút Login 2 sang trắng
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 45, // Tăng kích thước chữ "Login 1" và di chuyển lên trên
    color: 'black', // Đặt màu đen
    alignSelf: 'flex-start', // Đặt vị trí sang bên trái màn hình
    marginBottom: 60,
    marginTop: -60, // Di chuyển lên trên thêm
  },
  loginText2: {
    fontSize: 24, // Tăng kích thước chữ "Login 2"
    color: 'white', // Đổi màu cho chữ "Login 2" thành màu xanh
  },
  createAccount: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 60,
  },
});

export default LoginScreen;