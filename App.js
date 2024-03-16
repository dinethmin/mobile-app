import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Platform, Image, SafeAreaView, Button } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SelectionScreen from './app/screens/SelectionScreen';
import ScannernScreen from './app/screens/ScannerScreen';
import NewLogo from './app/screens/newlogo';

export default function App() {
  return (
    //<WelcomeScreen/>
    <SelectionScreen/>
    //<ScannernScreen/>
    //<NewLogo/>
  );
}

const styles = StyleSheet.create({
 
});
