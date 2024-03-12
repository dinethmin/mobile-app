import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons'

function SelectionScreen(props) {
    return (
        <ImageBackground
            style={styles.bacground}
            source={require("../assets/SelectionScreen.png")}>

            <Image style={styles.logo} source={require("../assets/Text.png")}/>

            <View style={styles.icon}>
                <MaterialIcons name="image-search" size={100} color="white" />

                <View>
                    <AntDesign name="camera" size={100} color="white" />
                </View>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bacground: {
        flex: 1,
    },
    logo: {
        width: 230,
        height: 170,
        top: '2%',
        margin: '15%'
    },
    icon: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        marginBottom: 30,
    },

})

export default SelectionScreen;