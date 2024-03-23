import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, ScrollView, Dimensions } from 'react-native';
import {Octicons, Entypo, Foundation, Fontisto } from '@expo/vector-icons';
export const { height, width } = Dimensions.get('window');

function SelectionScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.bacground}>
                <Text style={styles.header}>Hispa</Text>
            </View>
            <ScrollView style={styles.ScrollViewStyle}>
                <Text style={styles.subHeader}> What is Hispa?</Text>
                <Text style={styles.content}>
                    Hispa (also known as Hispa atra or rice hispa) is a common pest that affects rice crops.
                    It is a small beetle belonging to the family Chrysomelidae.
                    The scientific name of the rice hispa is Dicladispa armigera.
                    {"\n"}
                </Text>
                <Text style={styles.subHeader}>Plant parts and life stages affected</Text>
                <Text style={styles.content}>
                    The female rice hispa lays single eggs towards the tip on the ventral surface of rice leaves.
                    The hatched yellow larvae immediately burrow into the leaf tissues. Rice hispa scrapes the upper surface of leaf blades leaving only
                    the lower epidermis as white streaks parallel to the midrib. Translucent white patches that are parallel to the leaf veins form.
                    When severely attacked, the leaves turn yellow and wither, resulting in damaged leaves. Growth may be greatly delayed.
                    {"\n"}
                </Text>
                <Text style={styles.subHeader}>Symptoms</Text>
                <Text style={styles.content}>
                    <Octicons name="dot-fill" size={15} color="white" /> scraping of the upper surface of the leaf blade leaving only the lower epidermis as white streaks parallel to the midrib{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> irregular translucent white patches that are parallel to the leaf veins caused by tunneling of larvae through leaf tissue causes{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> withering of damaged leaves{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> whitish and membranous leaves{"\n"}
                </Text>
                <Text style={styles.subHeader}>Why and where it occurs</Text>
                <Text style={styles.content}>
                    Hispa infestation is particularly common in rice-growing regions, especially in Asia.
                    Hispa infestation typically occurs during the rice-growing season, particularly in the early stages of plant growth.
                    The adult beetles and their larvae feed on rice plants, causing damage to leaves and stems.
                    They create characteristic 'window-pane' feeding damage by scraping the leaf surface, resulting in translucent patches.
                    Severe infestations can lead to reduced plant vigor, stunted growth, and even crop loss if not controlled.
                </Text>
                <Text style={styles.subHeader}>If the crop is infected, apply these for the next season</Text>
                <Text style={styles.content1}>
                    {"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Application of organic fertilizer will increase the soil quality{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Use of certified seed paddy free from the disease{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Addition of burnt paddy husk (250 kg per acre) to the soil during land preparation.{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Abstain addition of disease infected straw.{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Treatment of seed paddy by dipping in hot water (53-54OC) for 10-12 minutes{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Treatment of seeds with a seed-protectant fungicide{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Crop rotation{"\n"}
                </Text>
                <Text style={styles.subHeader}>For more details contact Department of Agriculture</Text>
                <Text style={styles.content1}>
                    {"\n"}
                    <Foundation name="telephone" size={20} color="white" /> +94 812 388331 / 32/ 34{"\n"}
                    <Fontisto name="email" size={20} color="white" /> info@doa.gov.lk{"\n"}
                    <Entypo name="location-pin" size={20} color="white" />Department of Agriculture, P.O.Box. 01,Peradeniya{"\n"}
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    bacground: {
        flex: 0.1,
        width: '100%',
        height: 40,
        backgroundColor: '#013220'
    },
    header: {
        color: 'white',
        fontSize: 40,
        top: 10,
        textAlign: 'center',
    },
    subHeader: {
        color: 'white',
        fontSize: 20,
        top: 20,
        textAlign: 'left',
        fontWeight: 'bold',

    },
    content: {
        color: 'white',
        fontSize: 16,
        top: 22,
        textAlign: 'justify',
        fontStyle: 'italic'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#025217'
    },
    ScrollViewStyle: {
        flex: 1,
        height: height,
        width: width
    }
})

export default SelectionScreen;