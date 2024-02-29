import { Pressable, StyleSheet, Text, View, FlatList, Image, ScrollView, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params;
  useEffect(() => {
    console.log('Data in Home screen:', user);
  }, [user]);
  const btnScr1 = () => {
    navigation.navigate('Screen1', { user });
  };
  const btnScr2 = (selectedNote) => {
    navigation.navigate("Screen2", { user, selectedNote });
  };
  const screenHeight = Dimensions.get('window').height;
  const scrollViewHeight = screenHeight * 0.5; // Set to 50% of the screen height
  return (
    <View style={styles.container}>
      <View>
        <Text>Hi</Text>
      </View>
      {/* FlatList */}
      <ScrollView style={[styles.flatListContainer, { height: scrollViewHeight }]}>
        <FlatList
          data={user.note}
          renderItem={({ item }) => (
            <Pressable style={styles.PresNote} onPress={() => btnScr2(item)}>
              <View key={item.id}>
                <Text>Title: {item.title}</Text>
                <Text>Content: {item.content}</Text>
                <Text>Date: {item.date}</Text>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </ScrollView>
      {/* "Add" button */}
      <Pressable style={styles.PreAdd} onPress={btnScr1}>
        <Image style={styles.imgaddnote} source={require('../assets/Group 13.png')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  flatListContainer: {
    width: '100%',
  },
  flatListContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PresNote: {
    borderWidth: 1,
    borderRadius: 20,
    height: 100,
    width: 300,
    padding: 10,
    backgroundColor: '#00BDD6',
    borderStyle: 'dotted',
    justifyContent: 'center',
    marginTop: 20,
  },
  imgaddnote: {
    height: 69,
    width: 69,
  },
  PreAdd: {
    marginTop: 20,
    position: 'absolute',
    bottom: 30,
    zIndex: 1,
  },
});

export default Home;
