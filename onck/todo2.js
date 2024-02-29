import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, TextInput, Pressable, 
    FlatList, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
var url = 'https://65673f8564fcff8d73100765.mockapi.io/api'
const Todo2 = () => {
    const job = useSelector((state) => state.job);
    const data = useSelector((state) => state.data);
    const [selectedJob, setSelectedJob] = useState({ id: '', job: '' });
    const dispatch = useDispatch();
    const fc = () => {
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            dispatch({ type: 'SET_DATA', payload: json });
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      };
      useEffect(() => {
        fc();
      }, []);
  console.log(data);
 const btnadd = () => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      job: job,
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log('Registration response:', json);
      Alert.alert('Registration Successful', 'Account created successfully!');
      dispatch({ type: 'SET_JOB', payload: '' }); // Resetting the input field
      fc();
    })
    .catch((error) => {
      console.error('Error registering user:', error);
      Alert.alert('Registration Failed', 'Unable to create an account. Please try again.');
    });
}
  const btndelete = (itemId) => {
    fetch(`${url}/${itemId}`, { // Use `${url}/${itemId}` to specify the item's URL
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log('Deletion response:', json);
      Alert.alert('Deletion Successful', 'Item deleted successfully!');
      fc(); // Refresh data after deletion
    })
    .catch((error) => {
      console.error('Error deleting item:', error);
      Alert.alert('Deletion Failed', 'Unable to delete the item. Please try again.');
    });
  };
  const btnchoseText = (selectedItem) => {
    setSelectedJob({ id: selectedItem.id, job: selectedItem.job }); // Update selectedJob
  };

  const btnUpdate = () => { // Remove itemId parameter, use selectedJob.id instead
    if (!selectedJob.job || !selectedJob.id) {
      console.log('Update Failed', 'Please select an item to update.');
      return;
    }

    fetch(`${url}/${selectedJob.id}`, { // Use selectedJob.id for update
      method: 'PUT',
      body: JSON.stringify({
        job: selectedJob.job,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('Update response:', json);
        Alert.alert('Update Successful', 'Item updated successfully!');
        fc(); // Refresh data after updating
        setSelectedJob({ id: '', job: '' }); // Reset selected job after update
      })
      .catch((error) => {
        console.error('Error updating item:', error);
        Alert.alert('Update Failed', 'Unable to update the item. Please try again.');
      });
  };
  return (
    <View style={styles.container}>
     
      <View style={styles.v1}>
          <TextInput
            style={styles.textip1}
            placeholder='...'
            value={job}
            onChangeText={(text) => dispatch({ type: 'SET_JOB', payload: text })}
          />
          <Pressable style={styles.pr1} onPress={btnadd}>
            <Text style={styles.textpr1}>Add</Text>
          </Pressable>
      </View>
      <ScrollView>
      <View style={styles.v2} >
        <FlatList
          data={data}
          renderItem={({item})=>(
            <Pressable onPress={() => btnchoseText(item)}>
            <View style={styles.vflat} key={item.id}>
            <Text style={styles.textflat}>{item.job}</Text>
            <Pressable style={styles.pressDel} onPress={() => btndelete(item.id)}> 
              <Text style={{textAlign:'center'}}>delete</Text>
            </Pressable>
            </View>
            </Pressable>
          )}
        >
        </FlatList>
      </View>
      </ScrollView>
      <View style={styles.v3}>
      <TextInput style={styles.textInputV3} value={selectedJob.job} 
      onChangeText={(text) => setSelectedJob({ ...selectedJob, job: text })} />

        <Pressable style={styles.pr1} onPress={() => btnUpdate(selectedJob.id)}>
            <Text style={styles.textpr1}>Update</Text>
          </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    textip1: {
      fontSize: 16,
      height: 50,
      width: 300,
      borderWidth: 1,
      borderColor: "black",
      paddingLeft: 40,
    },
    v1:{
      flexDirection:'row',
      marginTop:10,
      width: '100%',
      height:50,
      backgroundColor: 'white',
      alignItems: 'center', 
      justifyContent: 'center'
    },
    pr1:{
      padding:10,
      height:50,
      width:60,
      marginLeft:10,
      backgroundColor: 'blue',
    },
    textpr1:{
      textAlign:'center',
      alignItems:'center',
      fontWeight:500,
      color: 'white'
    },
    v2:{
      marginTop:20,
      width:'100%',
      height: 480,
    },
    textflat:{
      padding:12,
      width:290,
      textAlign:'center',
    },
    vflat:{
      flexDirection:'row',
      // borderRadius:20,
      width:380,
      height:40,
      backgroundColor:'aqua',
      marginTop:10,
    },
    pressDel:{
      backgroundColor:'red',
      width:60,
      height:40,
    },
    v3: {
        flexDirection:'row',
        marginTop:10,
        width: '100%',
        height:200,
        backgroundColor: 'white',
        alignItems: 'center', 
        justifyContent: 'center'
      },
      textInputV3: {
        fontSize: 16,
        height: 150,
        width: 300,
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 40,
        marginBottom: 50,
      },
  });
  
export default Todo2