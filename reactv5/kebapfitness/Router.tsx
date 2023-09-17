
import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import WelcomeScreen from "./src/WelcomeScreen";
import MemberSign from "./src/MemberSign";
import MemberResult from "./src/MemberResult";

const Stack = createNativeStackNavigator()

function Router(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="MemberSign" component={MemberSign} />
        <Stack.Screen name="MemberResult" component={MemberResult} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default Router;
