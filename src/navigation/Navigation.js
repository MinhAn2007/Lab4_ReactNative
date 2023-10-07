// AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../component/LoginScreen";
import BuyScreen from "../component/BuyScreen";
import FeedbackScreen from "../component/FeedbackScreen";
import PassWordScreen from "../component/PassWordScreen";


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="BuyScreen" component={BuyScreen} />
        <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
        <Stack.Screen name="PassWordScreen" component={PassWordScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
