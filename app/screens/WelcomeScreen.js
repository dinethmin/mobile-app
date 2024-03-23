import React from 'react';
import { ImageBackground, ProgressBarAndroid, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.bacground}
            source={require("../assets/WelcomeScreen.png")}
        >
            <View style={styles.progressbarView}>
                <Text style={styles.text}>loading...</Text>
                <ProgressBarAndroid
                    style={styles.progressbar}
                    styleAttr='Horizontal'
                    color='black'
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bacground: {
        flex: 1
    },
    text: {
        color: 'white',
        top: 10
    },
    progressbarView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: '10%'
    },
    progressbar: {
        width: '50%',
        height: 40,
    }
})

export default WelcomeScreen;