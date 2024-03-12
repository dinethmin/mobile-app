import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons'

function SelectionScreen(props) {
    return (
        <ImageBackground
            style={styles.bacground}
            source={require("../assets/SelectionScreen.png")}>

            <View style={styles.icon}>
                <MaterialIcons name="image-search" size={100} color="black" />

                <View>
                    <AntDesign name="camera" size={100} color="black" />
                </View>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bacground: {
        flex: 1
    },
    icon: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        marginBottom: '10%'
    }
})

export default SelectionScreen;