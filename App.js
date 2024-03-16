import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Platform, Image, SafeAreaView, Button } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SelectionScreen from './app/screens/SelectionScreen';
import ScannerScreen from './app/screens/ScannerScreen'; // Corrected ScannernScreen to ScannerScreen
import NewLogo from './app/screens/newlogo';

export default function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showWelcomeScreen ? (
        <WelcomeScreen />
      ) : (
        <ScannerScreen />
      )}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});
