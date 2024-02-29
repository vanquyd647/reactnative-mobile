import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cake from "../screens/cake";
import CakePopup from "../screens/cakepopup";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Cake" component={Cake} options={{ headerShown: false }} />
        <Stack.Screen name="CakePopup" component={CakePopup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
