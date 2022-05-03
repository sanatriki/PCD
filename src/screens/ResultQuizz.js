// ResultQuizz Est comme onboarding (tji baad splashafterquizz)
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Salon from './Salon'
//import { height, SPACING } from '@mui/system';
import { createTheme } from '@material-ui/core/styles'
import niceColors from 'nice-color-palettes'

const colors = [
    ...niceColors[1].slice(1, niceColors[1].length),
    ...niceColors[55].slice(0, 3),
];


const theme = createTheme({
    spacing: 4,
    //height:
});

const { width, height } = Dimensions.get('window');

export const ITEM_HEIGHT = height * 0.18

export const maladies = [
    {
        id: 1,
        title: 'Stresse',
        subtitle: 'Consultez votre état concernant le Stresse',
        image: require('../images/stresse1.png'),
    },
    {
        id: 2,
        title: 'Anxieté',
        subtitle: 'Consultez votre état concernant l’Anxieté',
        image: require('../images/anxiete1.png')
    },
    {
        id: 3,
        title: 'Dépression',
        subtitle: 'Consultez votre état concernant la Dépression',
        image: require('../images/dépression1.png'),

    }
]


const ResultQuizz = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 2 }}>
            <ScrollView horizontal={false}>
                <TouchableOpacity >
                    <Image source={require('../images/resultQuizz.png')} style={{ width: 200, height: 200, alignSelf: 'center', borderRadius: 5 }} />
                    <Text style={styles.title}>Votre Bilan de Santé Mentale</Text>
                    <Text style={styles.miniTitle}>Nous allons par la suite vous aider pour que vous puissiez bénificier d'un suivi quotidien.</Text>
                </TouchableOpacity>


                {/* AFFICHAGE DU BILAN 1er ESSAI */}
                <SafeAreaView style={{ flex: 3 }} >
                    <FlatList
                        data={maladies}
                        keyExtractor={item => item.key}
                        contentContainerStyle={{ padding: theme.spacing(2) }}
                        renderItem={({ item }) => {
                            return <TouchableOpacity onPress={() => {
                                navigation.navigate('SalonListDetails', { item });
                            }}
                                style={{ marginBottom: theme.spacing(2), height: ITEM_HEIGHT }}>
                                <View style={{ flex: 1, padding: theme.spacing(2) }}>
                                    <View style={[StyleSheet.absoluteFillObject, { backgroundColor: colors[item.id % colors.length - 1], borderRadius: 16 }]} />
                                    <Text style={styles.name}>{item.title}</Text>
                                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                                    {/*<Text style={styles.jobTtile}>{item.jobTitle}</Text>*/}
                                    <Image style={styles.image} source={item.image} />
                                </View>
                            </TouchableOpacity>
                        }}
                    />
                    <View style={styles.bg} />
                </SafeAreaView>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', width: '70%', backgroundColor: '#385a64', height: 40, marginBottom: 5, marginTop: 10, borderRadius: 10 }}
                        onPress={() => navigation.navigate("MainContainer")}>
                        <Text style={{ fontSize: 15, letterSpacing: 1.5, textAlign: 'center', position: 'relative', fontWeight: 'bold', color: '#ededed' }} >Consulter votre journal</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        paddingTop: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#385a64'
    },
    miniTitle: {
        fontSize: 16,
        paddingTop: 10,
        alignSelf: 'center',
        maxWidth: '70%',
        color: '#1a2e35'
    },
    name: {
        fontWeight: '700',
        fontSize: 25,
        marginTop: 20,
        paddingLeft: 20

    },
    subtitle: {
        fontWeight: '200',
        fontSize: 18,
        marginTop: 10,
        paddingLeft: 20,
        maxWidth: '75%'

    },
    image: {
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        //width: 200,
        //height: 200,
        //width : width * 0.18,
        //height: height * 0.18,
        resizeMode: 'contain',
        position: 'absolute',
        //bottom: 0,
        right: theme.spacing(2)
    },
    bg: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'red',
        transform: [{ translateY: height }],
        borderRadius: 32,

    }

})

export default ResultQuizz