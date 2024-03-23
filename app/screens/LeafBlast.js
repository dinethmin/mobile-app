import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Linking, ScrollView, Dimensions } from 'react-native';
import { Octicons, Entypo, Foundation, Fontisto } from '@expo/vector-icons';
export const { height, width } = Dimensions.get('window');

function SelectionScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.bacground}>
                <Text style={styles.header}>Leaf Blast</Text>
            </View>
            <ScrollView style={styles.ScrollViewStyle}>
                <Text style={styles.subHeader}>What is Leaf Blast?</Text>
                <Text style={styles.content}>
                    Leaf Blast, also known as Rice blast, is a destructive fungal disease that affects rice crops.
                    It is caused by the fungus Magnaporthe oryzae.
                    Leaf Blast primarily affects the leaves of rice plants but can also infect other aerial parts,
                    including stems, panicles, and nodes.
                    {"\n\n"}
                </Text>
                <Text style={styles.subHeader}>Plant parts and life stages affected</Text>
                <Text style={styles.content}>
                    <Octicons name="dot-fill" size={15} color="white" /> Any life stage of the plant could infects by this pathogen.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Plant parts that are infected could be, leaves, nodes, panicles, or seeds.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Rice blast is named as leaf blast, nodael blast, panicle blast, or neck blast, based on the part of the plant infected.
                    {"\n\n"}
                </Text>
                <Text style={styles.subHeader}>Symptoms</Text>
                <Text style={styles.content}>
                    <Octicons name="dot-fill" size={15} color="white" /> Spindle-shaped leaf spots with brown or reddish margins, ashy centers, and pointed ends are the common symptom.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Fully developed lesions normally measure 1.0-1.5 cm in length and 0.3-0.5cm in breadth.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> When nodes are infected, they become black and rot.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Infection of panicle base causes rotten neck or neck rot and causes the panicle to fall off.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> When the infection is severe, secondary branches and grains are also affected resulting in partly filled grains.
                    Characteristics vary with the crop life stage, susceptibility level of the cultivar and environmental factors.
                    {"\n\n"}
                </Text>
                <Text style={styles.subHeader}>Conditions that favour the disease</Text>
                <Text style={styles.content1}>
                    {"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Low temperature during night (17-20OC){"\n "}
                    <Octicons name="dot-fill" size={15} color="white" /> High humidity{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Excessive application of nitrogen fertilizer{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Foggy and dark climatic conditions{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> High densities of plants in the field{"\n"}
                </Text>
                <Text style={styles.subHeader}>How to manage Leaf Blast infection</Text>
                <Text style={styles.content1}>
                    {"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Use of resistant varieties, Plant rice varieties that exhibit resistance or tolerance to Leaf Blast.
                    Breeding programs have developed resistant varieties with genetic traits that confer protection against the disease.
                    (Bg 403, Bg 406, Bg 366, Bg 359, Bw 361, Bg 250)
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Practice crop rotation with non-host crops to break the disease cycle and reduce the buildup of fungal inoculum in the soil.
                    Maintain proper field hygiene by removing crop debris and volunteer rice plants after harvest to minimize sources of infection.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Addition of burnt paddy husk (250 kg per acre) to the soil during land preparation.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Regularly monitor rice fields for symptoms of Leaf Blast, especially during periods of high humidity and temperature.
                    Early detection allows for timely intervention and implementation of control measures to prevent disease spread and minimize yield losses.
                    {"\n"}
                </Text>
                <Text style={styles.subHeader}>For more details contact Department of Agriculture</Text>
                <Text style={styles.content1}>
                    {"\n"}
                    <Foundation name="telephone" size={20} color="white" /> +94 812 388331 / 32/ 34{"\n"}
                    <Fontisto name="email" size={20} color="white" />
                    <Text
                        onPress={() => Linking.openURL('info@doa.gov.lk')}
                        style={{ color: 'white' }}
                    >
                        {" "}info@doa.gov.lk{"\n"}
                    </Text>
                    <Entypo name="location-pin" size={20} color="white" /> Department of Agriculture, P.O.Box. 01, Peradeniya{"\n\n"}
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
    content1: {
        color: 'white',
        fontSize: 16,
        top: 22,
        textAlign: 'left',
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
        width: width,
        padding: 8
    }
})

export default SelectionScreen;