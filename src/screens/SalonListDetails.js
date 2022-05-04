import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import { createTheme } from '@material-ui/core/styles'
import { ITEM_HEIGHT } from './ResultQuizz';
import BackIcon from 'react-native-vector-icons/Feather';
import InfoIcon from 'react-native-vector-icons/Entypo';
import TbibIcon from 'react-native-vector-icons/FontAwesome';
import HandIcon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

const DURATION = 400;

import Salon from './Salon'

const { width, height } = Dimensions.get('window');

const TOP_HEADER_HEIGHT = height * 0.3

const theme = createTheme({
    spacing: 4,
    //height:
});


export const Emojies = [
    {
        id: 4,
        image: require('../images/normal.png'),
        title: 'Normal',
        miniTitle: 'Tout va bien! Ne vous inquiétez pas vous êtes sur le bon chemin. En effet vous n`avez aucun trouble, continuez comme ça! Vous allez trouver toutes les ressources dans votre journal pour entretenir cet état.'
    },
    {
        id: 5,
        image: require('../images/légère.png'),
        title: 'Légère',
        miniTitle: 'Ne vous inquiétez pas, nous allons vous aider pour ne pas tomber encore plus dans ce trouble là. Vous allez trouver toutes les ressources nécessaires dans votre journal. '
    },
    {
        id: 6,
        image: require('../images/modéré.png'),
        title: 'Modéré',
        miniTitle: 'Ne vous inquiétez pas, vous avez un petit soucis mais nous allons vous aider pour ne pas tomber encore plus dans ce trouble là. Vous allez trouver toutes les ressources nécessaires dans votre journal.'
    },
    {
        id: 7,
        image: require('../images/sévére.png'),
        title: 'Sévère',
        miniTitle: 'En effet, vous devez suivre le traitement que nous allons vous proposer. Vous allez trouver toutes les ressources nécessaires dans votre journal.'
    },
    {
        id: 8,
        image: require('../images/extrêmeSévére.png'),
        title: 'Extêmement sévère',
        miniTitle: 'En effet, votre état nécessite en urgence le suivi quotidien du traitement que nous allons vous proposer. Vous allez trouver toutes les ressources nécessaires dans votre journal.'
    },
];



const SalonListDetails = ({ navigation, route }) => {
    const { item } = route.params
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 0, height: TOP_HEADER_HEIGHT + 32 }]} />
                <BackIcon style={styles.Icon} name="arrow-left" size={30} color={"#1a2e35"} onPress={() => {
                    navigation.goBack();
                }} />
                <Text style={styles.name}>{item.name}</Text>
                <Image source={item.image} style={styles.image} />
                {/* EMOJI SELON SON RESULTAT PSYCHOLOGIQUE*/}
                <View style={styles.bg} >
                    {Emojies.map((detail, index) => {
                        return (
                            <View key={detail.id}>
                                <Animatable.View style={{ flexDirection: 'row'}} animation='bounceIn' delay={0.0001} >
                                    <InfoIcon /*style={styles.Icon}*/ style={{ paddingLeft: 110 }} name="light-bulb" size={30} color={"#ffaaaf"} />
                                    <TbibIcon /*style={styles.Icon}*/ style={{ paddingLeft: 50 }} name="user-md" size={30} color={"#385a64"} />
                                    <HandIcon /*style={styles.Icon}*/ style={{ paddingLeft: 50 }} name="hand-holding-medical" size={30} color={"#ff4f5a"} />
                                </Animatable.View>
                                <Animatable.View animation='fadeInUp'  >
                                <Image style={styles.emojie}   source={detail.image}/>
                                <Text style={styles.title}   >{detail.title}</Text>
                                <Text style={styles.miniTitle}  >{detail.miniTitle}</Text>
                                </Animatable.View>
                            </View>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    name: {
        fontWeight: '700',
        fontSize: 20,
        position: 'absolute',
        top: TOP_HEADER_HEIGHT - theme.spacing(2) * 5,
        left: theme.spacing(2) * 4
    },
    image: {
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        //width: 200,
        //height: 200,
        //width : width * 0.18,
        //height: height * 0.18,
        top: TOP_HEADER_HEIGHT - ITEM_HEIGHT * 0.8 +10,
        right: theme.spacing(2),
        resizeMode: 'contain',
        position: 'absolute',
        alignSelf: 'center'
        /*flexWrap: 'wrap',
        flex: 1,
        flexDirection: 'row',*/
    },
    bg: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'white',
        transform: [{ translateY: TOP_HEADER_HEIGHT }],
        borderRadius: 32,
        padding: theme.spacing(2),
        paddingTop: 32 + theme.spacing(2),
    },
    emojie: {
        width: ITEM_HEIGHT * 0.5,
        height: ITEM_HEIGHT * 0.5,
        resizeMode: 'contain',
        alignSelf: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 40
    },
    title:{
        fontSize: 20,
        fontWeight: '500',
        alignSelf:'center',
        marginTop:8,
        color: '#1a2e35'
    },
    miniTitle: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: '300',
        fontSize: 18,
        paddingLeft: 15
        //position: 'absolute'

    },

    Icon: {
        marginLeft: 15,
        marginTop: 45
    }

})

export default SalonListDetails