import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, ScrollView, Dimensions } from 'react-native';
import { Octicons } from '@expo/vector-icons';
export const { height, width } = Dimensions.get('window');

function SelectionScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.bacground}>
                <Text style={styles.header}>Brown Spot</Text>
            </View>
            <ScrollView style={styles.ScrollViewStyle}>
                <Text style={styles.subHeader}>Plant parts and life stages affected</Text>
                <Text style={styles.content}>
                    Coleoptiles, leaves, leaf sheath,
                    immature florets, branches of the panicle, glumes, and grains are affected.
                    Spots are present in plants at emergence; however, the disease is more prevalent as the plants approach maturity and the leaves begin to senesce.
                    It is a seed born disease.
                    Yield losses from leaf infection or leaf spots are probably not serious. Economic losses occur when the fungus attacks the panicle, including the grain.
                </Text>
                <Text style={styles.subHeader}>Symptoms</Text>
                <Text style={styles.content}>
                    The fungus causes brown, circular to oval spots on the coleoptiles which may lead to seedling blight.
                    Seedling blight may cause sparse or inadequate stands and feeble plants.
                    The spots are smaller on young leaves, than on upper leaves.
                    Size and shape of the spots may vary from minute dark (dark brown to reddish brown) spots to large oval to circular spots (having dark brown margin and a light, reddish-brown or gray center).
                    The spots on the leaf sheath and hulls are similar to those on the leaves.
                    When the glumes are infected,  a general black discoloration could be observed.
                    When the immature florets are attacked, grain development might het hindered or kernels that are of light weight or chalky may result.
                    {"\n"}
                </Text>
                <Text style={styles.subHeader}>Why and where it occurs</Text>
                <Text style={styles.content}>
                    The disease can develop in areas with high relative humidity (86−100%) and temperature between 16 and 36°C. It is common in unflooded and nutrient-deficient soil, or in soils that accumulate toxic substances.
                    For infection to occur, the leaves must be wet for 8−24 hours.
                    The fungus can survive in the seed for more than four years and can spread from plant to plant through air. Major sources of brown spot in the field include:
                </Text>
                <Text style={styles.content}>
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
        fontStyle:'italic'
    },
    content: {
        color: 'white',
        fontSize: 16,
        top: 22,
        textAlign: 'justify',
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