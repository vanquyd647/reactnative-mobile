import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";

var url = "https://65673f8564fcff8d73100765.mockapi.io/user";

const Screen1 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    setDate(formattedDate);
  }, []);
  const btnHome = () => {
    navigation.navigate("Home", { user });
  };
 const btnAdd = async () => {  
      // Generate a unique ID for the new note
      const maxId = user.note.reduce((max, note) => (note.id > max ? note.id : max), 0);
      const newNoteId = maxId + 1;
      // Create a new note object
      const newNote = {
        id: newNoteId,
        title: title,
        content: content,
        date: date,
      };  
      // Update the user's notes by creating a new array with the new note
      const updatedNotes = [...user.note, newNote];  
      // Update the user object with the new notes array
      const updatedUser = { ...user, note: updatedNotes }; 
      // Navigate back to the Home screen with the updated user object
      navigation.navigate("Home", { user: updatedUser });
      // Update the API with the new data
      fetch(`${url}/${user.id}`, {
        method: "PUT",
        body: JSON.stringify({ note: updatedNotes }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          // Check the response to determine if the update was successful
          console.log("Update response:", json);
          Alert.alert("Note Added", "Note added successfully!");
        })
        .catch((error) => {
          console.error("Error updating note:", error);
          Alert.alert("Update Failed", "Unable to add the note. Please try again.");
        });  
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textip1}
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.textip2}
          placeholder="Content"
          value={content}
          multiline
          onChangeText={(text) => setContent(text)}
        />
      </View>
      <View>
        <Pressable onPress={btnAdd}
         style={styles.Press1}> 
          <Text>add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textip1: {
    fontSize: 16,
    height: 40,
    width: 300,
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    paddingLeft: 40,
    justifyContent: "center"
  },
  textip2: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    minHeight: 100,
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
});
