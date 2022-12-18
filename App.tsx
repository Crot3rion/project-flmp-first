import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import {} from 'react-native-dotenv';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from "./components/auth/Landing";

const firebaseConfig = {
    apiKey: "tstedf",
    authDomain: "project-flmp.firebaseapp.com",
    projectId: "project-flmp",
    storageBucket: "project-flmp.appspot.com",
    messagingSenderId: "195556986039",
    appId: "1:195556986039:web:3e5678d1de964576c65132",
    measurementId: "G-R5LZH7BHQP"
};

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name = "Landing" component={Landing} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
