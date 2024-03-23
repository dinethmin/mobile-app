import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SelectionScreen from './app/screens/SelectionScreen';
import ScannerScreen from './app/screens/ScannerScreen';
import Healthy from './app/screens/Healthy';
import LeafBlast from './app/screens/LeafBlast';
import Hispa from './app/screens/Hispa';

const Stack = createStackNavigator();

export default function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showWelcomeScreen ? (
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }} // Hide header for WelcomeScreen
          />
        ) : (
          <>
            <Stack.Screen
              name="ScannerScreen"
              component={ScannerScreen}
              options={{ headerShown: false }} // Hide header for ScannerScreen
            />
            <Stack.Screen
              name="SelectionScreen"
              component={SelectionScreen}
              options={{ headerShown: false }} // Hide header for SelectionScreen
            />
            <Stack.Screen
              name="Healthy"
              component={Healthy}
              options={{ headerShown: false }} // Hide header for SelectionScreen
            />
            <Stack.Screen
              name="LeafBlast"
              component={LeafBlast}
              options={{ headerShown: false }} // Hide header for SelectionScreen
            />
            <Stack.Screen
              name="Hispa"
              component={Hispa}
              options={{ headerShown: false }} // Hide header for SelectionScreen
            />
          </>
        )}
      </Stack.Navigator>
      <StatusBar style="auto" /> 
    </NavigationContainer>
  );
}
