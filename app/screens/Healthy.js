import React from 'react';
import { StyleSheet, View, Text, Linking, ScrollView, Dimensions } from 'react-native';
import { Octicons, Entypo, Foundation, Fontisto } from '@expo/vector-icons';
export const { height, width } = Dimensions.get('window');

function SelectionScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.bacground}>
                <Text style={styles.header}>Healthy</Text>
            </View>
            <ScrollView style={styles.ScrollViewStyle}>
                <Text style={styles.subHeader}>The plant has no Disease and it is in a good condition{'\n'}</Text>
                <Text style={styles.subHeader}>Cultivation Practices for Promoting Rice Health</Text>
                <Text style={styles.content}>
                    <Octicons name="dot-fill" size={15} color="white" /> Use high-quality seeds of healthy rice varieties with proven genetic traits for disease resistance, pest tolerance,
                    and abiotic stress resilience. Certified seeds free from contaminants and pathogens ensure uniform germination and vigorous crop establishment.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Practice crop rotation with non-host crops to break disease cycles, suppress weed growth, and improve soil health.
                    Rotate rice with legumes, cereals, or oilseeds to mitigate disease and pest pressure while enhancing soil fertility and structure.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Implement balanced fertilization practices based on soil nutrient analysis and crop nutrient requirements.
                    Apply organic amendments, compost, and biofertilizers to improve soil fertility, enhance nutrient availability, and promote healthy plant growth.
                    {"\n\n"}
                    <Octicons name="dot-fill" size={15} color="white" /> Optimize water management practices to meet the moisture needs of rice plants while preventing waterlogging or drought stress.
                    Implement efficient irrigation techniques such as flood irrigation, furrow irrigation, or
                    drip irrigation to conserve water and minimize disease risks.
                    {"\n"}
                </Text>
                <Text style={styles.subHeader}>For more details contact Department of Agriculture</Text>
                <Text style={styles.content1}>
                    {"\n"}
                    <Foundation name="telephone" size={20} color="white" /> +94 812 388331 / 32/ 34{"\n"}
                    <Fontisto name="email" size={20} color="white" />
                    <Text
                        onPress={() => Linking.openURL('mailto:info@doa.gov.lk')}
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