import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Alert } from 'react-native';
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';

export const { height, width } = Dimensions.get('window');

const App = () => {
  const [image, setImage] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [permission, setPermission] = useState(null);
  const [fontsLoaded] = useFonts({ Lato_900Black });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  const handleCameraPress = async () => {
    if (!permission) {
      console.log('Permission not granted for camera');
      return;
    }
  
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Permission denied for camera');
      }
  
      const cameraResult = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      console.log('Camera result:', cameraResult);
      if (cameraResult.assets && cameraResult.assets.length > 0) {
        const { uri } = cameraResult.assets[0];
        if (uri) {
          setImage(uri);
        } else {
          console.log('User cancelled image picker or no image selected');
        }
      } else {
        console.log('User cancelled image picker or no image selected');
      }
    } catch (error) {
      console.error('Failed to launch camera:', error.message);
      Alert.alert('Error', 'Failed to launch camera');
    }
  };  

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[backgroundStyle, styles.outer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ImageBackground
        source={require('../assets/SelectionScreen.png')}
        style={{ height: height, width: width }}
      />
      <Text style={styles.title}>{'Rice Disease \nPrediction'}</Text>
      {image ? (
        <Image source={{ uri: image }} style={styles.imageStyle} />
      ) : null}
      <View style={styles.btn}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleCameraPress}
          style={styles.btnStyle}>
          <Image
            source={require('../assets/camera.png')}
            style={styles.imageIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontFamily: 'Lato_900Black',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
    top: 30,
  },
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnStyle: {
    backgroundColor: '#FFF',
    opacity: 0.8,
    padding: 20,
    borderRadius: 20,
  },
  imageStyle: {
    marginBottom: 50,
    width: width / 1.5,
    height: width / 1.5,
    borderRadius: 20,
    position: 'absolute',
    borderWidth: 0.3,
    borderColor: '#FFF',
    top: height / 4.5,
  },
  imageIcon: { height: 40, width: 40, tintColor: '#000' },
});

export default App;
