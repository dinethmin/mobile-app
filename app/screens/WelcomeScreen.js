import React from 'react';
import { ImageBackground, ProgressBarAndroid, ProgressBarAndroidBase, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.bacground}
            source={require("../assets/WelcomeScreen.png")}
        >
            <View style={styles.progressbarView}>
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
    progressbarView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: '10%'
    },
    progressbar: {
        width: '50%',
        height: '5%',
    }
})

export default WelcomeScreen;