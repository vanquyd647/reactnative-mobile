import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user, selectedNote } = route.params;
  const [note, setNote] = useState(selectedNote);
  const [formattedDate, setFormattedDate] = useState(note.date);
  useEffect(() => {
    // Khi `note` state thay đổi, cập nhật formattedDate để re-render component
    const currentDate = new Date();
    const newFormattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
setFormattedDate(newFormattedDate);
  }, [note]);
  // Function to handle the delete button press
  const handleDelete = () => {
    // Filter out the selectedNote from the user's notes  
    const updatedNotes = user.note.filter((n) => n.id !== note.id);
    // Send a PUT request to update the user's notes
    fetch(`https://65673f8564fcff8d73100765.mockapi.io/user/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify({ note: updatedNotes }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Note deleted successfully');
          Alert.alert('Delete Successful', 'Note deleted successfully!');
          // Navigate back to the Home screen with the updated user object
          navigation.navigate('Home', { user: { ...user, note: updatedNotes } });
        } else {
          console.error('Failed to delete note');
          Alert.alert('Delete Failed', 'Unable to delete the note. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error deleting note:', error);
        Alert.alert('Delete Failed', 'Unable to delete the note. Please try again.');
      });
  };
  const handleUpdate = () => {
    const updatedNotes = user.note.map((n) => (n.id === note.id ? note : n));
    // Send a PUT request to update the user's notes
    fetch(`https://65673f8564fcff8d73100765.mockapi.io/user/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify({ note: updatedNotes }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Note updated successfully');
          Alert.alert('Update Successful', 'Note updated successfully!');
          // Navigate back to the Home screen with the updated user object
          navigation.navigate('Home', { user: { ...user, note: updatedNotes } });
        } else {
          console.error('Failed to update note');
          Alert.alert('Update Failed', 'Unable to update the note. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error updating note:', error);
        Alert.alert('Update Failed', 'Unable to update the note. Please try again.');
      });
  };
  

  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
      <View key={note.id}>
      <TextInput
          style={styles.input1}
          placeholder="Title"
          value={note.title}
          onChangeText={(text) => setNote({ ...note, title: text })}
        />
        <TextInput
          style={styles.input2}
          placeholder="Content"
          value={note.content}
          multiline
          onChangeText={(text) => setNote({ ...note, content: text })}
        />
        {/* <Text>Date: {formattedDate}</Text> */}
        <Text>
            Date: {note.date}
        </Text>
      </View>
        <Pressable onPress={handleUpdate}style={styles.Press1}>
            <Text>
                update
            </Text>
        </Pressable>
        <Pressable onPress={handleDelete} style={styles.Press1}>
          <Text>Delete</Text>
        </Pressable>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  grp1: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input1: {
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
  input2:{
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

export default Screen2;
