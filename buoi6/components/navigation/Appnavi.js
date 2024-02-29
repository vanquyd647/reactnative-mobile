import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; // Use createStackNavigator
import React from "react";
import Home from "../../screens/home";
import Set from "../../screens/setPhone";

const Stack = createStackNavigator(); // Use createStackNavigator
const Appnavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Set" component={Set} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Appnavigation;
