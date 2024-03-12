import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function scannerScreen(props) {
    return (
        <ImageBackground
        style={styles.bacground}
        source={require("../assets/ScannerScreen.png")}
        ></ImageBackground>
    );
}

const styles = StyleSheet.create({
    bacground: {
        flex: 1
    }
})

export default scannerScreen;