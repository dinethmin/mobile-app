import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, ScrollView, Dimensions } from 'react-native';
import { Octicons, Entypo, Foundation, Fontisto } from '@expo/vector-icons';
export const { height, width } = Dimensions.get('window');

function SelectionScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.bacground}>
                <Text style={styles.header}>LeafBlast</Text>
            </View>
            <ScrollView style={styles.ScrollViewStyle}>
                <Text style={styles.subHeader}>What is Leaf Blast?</Text>
                <Text style={styles.content}>
                    Leaf Blast, also known as Rice blast, is a destructive fungal disease that affects rice crops.
                    It is caused by the fungus Magnaporthe oryzae.
                    Leaf Blast primarily affects the leaves of rice plants but can also infect other aerial parts,
                    including stems, panicles, and nodes.
                    {"\n"}
                </Text>
                <Text style={styles.subHeader}>Plant parts and life stages affected</Text>
                <Text style={styles.content}>
                    <Octicons name="dot-fill" size={15} color="white" /> Any life stage of the plant could infects by this pathogen.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Plant parts that are infected could be, leaves, nodes, panicles, or seeds.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Rice blast is named as leaf blast, nodael blast, panicle blast, or neck blast, based on the part of the plant infected.{"\n"}
                </Text>
                <Text style={styles.subHeader}>Symptoms</Text>
                <Text style={styles.content}>
                    <Octicons name="dot-fill" size={15} color="white" />  Spindle-shaped leaf spots with brown or reddish margins, ashy centers, and pointed ends are the common symptom.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" />  Fully developed lesions normally measure 1.0-1.5 cm in length and 0.3-0.5cm in breadth.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" />  When nodes are infected, they become black and rot.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" />  Infection of panicle base causes rotten neck or neck rot and causes the panicle to fall off.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" />  When the infection is severe, secondary branches and grains are also affected resulting in partly filled grains, known as “whiteheads”.
                    Characteristics vary with the crop life stage, susceptibility level of the cultivar and environmental factors.
                    {"\n"}
                </Text>
                <Text style={styles.subHeader}>Why and where it occurs</Text>
                <Text style={styles.content}>
                    The disease can develop in areas with high relative humidity (86−100%) and temperature between 16 and 36°C. It is common in unflooded and nutrient-deficient soil, or in soils that accumulate toxic substances.
                    For infection to occur, the leaves must be wet for 8−24 hours.
                    The fungus can survive in the seed for more than four years and can spread from plant to plant through air. Major sources of brown spot in the field include:
                </Text>
                <Text style={styles.content}>
                    {"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> infected seed{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> volunteer rice{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> infected rice debris{"\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> weeds{"\n"}
                </Text>
                <Text style={styles.content}>
                    Brown spot can occur at all crop stages, but the infection is most critical during maximum tillering up to the ripening stages of the crop.
                    {"\n"}
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
        width: width,
        padding: 8
    }
})

export default SelectionScreen;