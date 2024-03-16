import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, ScrollView, Dimensions } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
export const { height, width } = Dimensions.get('window');

function SelectionScreen(props) {
    return (
        <ImageBackground
            style={styles.bacground}
            source={require("../assets/SelectionScreen.png")}>
            <View>
                <Text style={styles.header}>Brown Spot</Text>
            </View>
            <View style={styles.container}>
                <ScrollView style={styles.ScrollViewStyle}>
                    <Text style={styles.subHeader}>Plant parts and life stages affected</Text>
                    <Text style={styles.content}>
                        Coleoptiles, leaves, leaf sheath,
                        immature florets, branches of the panicle, glumes, and grains are affected.
                        Spots are present in plants at emergence; however, the disease is more prevalent as the plants approach maturity and the leaves begin to senesce.
                        It is a seed born disease.
                        Yield losses from leaf infection or leaf spots are probably not serious. Economic losses occur when the fungus attacks the panicle, including the grain.
                        {"\n"}
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
                        • infected seed{"\n"}
                        • volunteer rice{"\n"}
                        • infected rice debris{"\n"}
                        • weeds{"\n"}
                    </Text>
                    <Text style={styles.content}>
                        Brown spot can occur at all crop stages, but the infection is most critical during maximum tillering up to the ripening stages of the crop.
                        {"\n"}
                    </Text>
                </ScrollView>
            </View>
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    bacground: {
        flex: 1,
    },
    header: {
        color: 'white',
        fontSize: 40,
        top: 24,
        textAlign: 'center',
        paddingHorizontal: width / 5,
        backgroundColor: 'black',
        
    },
    subHeader: {
        color: 'white',
        fontSize: 20,
        top: 28,
        textAlign: 'left'
    },
    content: {
        color: 'white',
        fontSize: 16,
        top: 30,
        textAlign: 'justify',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ScrollViewStyle: {
        height: height,
        width: width
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