import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function SelectionScreen(props) {
    return (
        <ImageBackground
        style={styles.bacground}
        source={require("../assets/SelectionScreen.png")}
        ></ImageBackground>
    );
}

const styles = StyleSheet.create({
    bacground: {
        flex: 1
    }
})

export default SelectionScreen;