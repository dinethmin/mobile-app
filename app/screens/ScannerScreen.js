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
import Constants from 'expo-constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Alert } from 'react-native';
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';


export const { height, width } = Dimensions.get('window');

export const configureUrl = url => {
  let authUrl = url;
  if (url && url[url.length - 1] === '/') {
    authUrl = url.substring(0, url.length - 1);
  }
  return authUrl;
};

const App = () => {
  const [result, setResult] = useState('');
  const [label, setLabel] = useState('');
  const [image, setImage] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [permission, setPermission] = useState(null);
  const [fontsLoaded] = useFonts({ Lato_900Black, });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  const apiUrl = Constants.expoConfig.extra?.URL;

  const getPrediction = async params => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(params),
      });
      const responseText = await response.text();
      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (error) {
        console.error('Error parsing JSON response:', error);
        return null;
      }


      return await response.json();
    } catch (error) {
      setLabel('Failed to predict');
      console.error('Prediction error:', error);
      return null;
    }
  };

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

      const cameraResult = await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
      if (!cameraResult.canceled && cameraResult.assets.length > 0 && cameraResult.assets[0].uri) {
        const uri = cameraResult?.assets[0]?.uri;
        const path = uri.startsWith('file://') ? uri : 'file://' + uri;
        getResult(path, cameraResult);
      } else {
        console.log('User cancelled image picker or no image selected');
      }
    } catch (error) {
      console.error('Failed to launch camera:', error.message);
      Alert.alert('Error', 'Failed to launch camera');
    }
  };

  const manageCamera = async () => {
    if (!permission) {
      console.log('Permission not granted for camera');
      return;
    }

    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Permission denied for media library');
      }

      const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
      if (!result.canceled && result.assets.length > 0 && result.assets[0].uri) {
        const uri = result.assets[0].uri;
        const path = uri.startsWith('file://') ? uri : 'file://' + uri;
        getResult(path, result);
      } else {
        console.log('User cancelled image picker or no image selected');
      }
    } catch (error) {
      console.error('Failed to launch image library:', error.message);
      Alert.alert('Error', 'Failed to launch image library');
    }
  };


  const getResult = async (path, response) => {
    try {
      setImage(path);
      setLabel('Predicting...');
      setResult('');
      const resizedImage = await manipulateAsync(
        path,
        [{ resize: { width: 256, height: 256 } }],
        { compress: 1, format: 'jpeg', base64: true }
      );
      const params = {
        uri: resizedImage.uri,
        name: response.assets[0].fileName,
        type: response.assets[0].type,
      };
      const res = await getPrediction(params);
      if (res?.data?.class) {
        setLabel(res.data.class);
        setResult(res.data.confidence);
      } else {
        setLabel('Failed to predict');
      }
    } catch (error) {
      console.error('Error resizing image:', error);
      setLabel('Failed to predict');
    }
  };
  

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }


  return (
    <View style={[backgroundStyle, styles.outer]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ImageBackground
        source={require("../assets/SelectionScreen.png")}
        style={{ height: height, width: width }}
      />
      <Text style={styles.title}>{'Rice Disease \nPrediction'}</Text>
      {(image?.length && (
        <Image source={{ uri: image }} style={styles.imageStyle} />
      )) || null}
      {(result && label && (
        <View style={styles.mainOuter}>
          <Text style={[styles.space, styles.labelText]}>
            {'Label: \n'}
            <Text style={styles.resultText}>{label}</Text>
          </Text>
          <Text style={[styles.space, styles.labelText]}>
            {'Confidence: \n'}
            <Text style={styles.resultText}>
              {parseFloat(result).toFixed(2) + '%'}
            </Text>
          </Text>
        </View>
      )) || (image && <Text style={styles.emptyText}>{label}</Text>) || (
          <Text style={styles.emptyText}></Text>
        )}
      <View style={styles.btn}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={handleCameraPress}
          style={styles.btnStyle}>
          <Image source={require("../assets/camera.png")} style={styles.imageIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={manageCamera}
          style={styles.btnStyle}>
          <Image source={require("../assets/image.png")} style={styles.imageIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontFamily: 'Lato_900Black',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
    top: 30
  },
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16521F'
  },
  clearImage: { height: 40, width: 40, tintColor: '#FFF' },
  btn: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnStyle: {
    backgroundColor: '#FFF',
    opacity: 0.8,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 20,
  },
  ctext: {
    color: 'black',
    bottom: 10,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 50,
    textAlign: 'center'
  },
  mainOuter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: height / 1.6,
    alignSelf: 'center',
  },
  clearStyle: {
    position: 'relative',
    alignContent: 'center',
    bottom: 10,
    justifyContent: 'center',
    tintColor: '#FFF',
    zIndex: 10,
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
  space: { marginVertical: 10, marginHorizontal: 10 },
  labelText: { color: '#FFF', fontSize: 20 },
  resultText: { fontSize: 32 },
  imageIcon: { height: 40, width: 40, tintColor: '#000' },
  emptyText: {
    position: 'absolute',
    top: height / 1.4,
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    maxWidth: '70%',
  },
});

export default App;
