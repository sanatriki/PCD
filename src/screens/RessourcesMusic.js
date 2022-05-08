
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView, FlatList } from 'react-native'
import { createTheme } from '@material-ui/core/styles'
//import { ITEM_HEIGHT } from './ResultQuizz';
import BackIcon from 'react-native-vector-icons/Feather';
import InfoIcon from 'react-native-vector-icons/Feather';
import HeadphonesIcon from 'react-native-vector-icons/Feather';
import MusicIcon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const TOP_HEADER_HEIGHT = height * 0.25

const ITEM_HEIGHT = height * 0.18

const theme = createTheme({
    spacing: 4,
    //height:
});

export const Musiques = [
    //stress books:
    {
        id: 1,
        image: require('../ressourcesImg/mediation.jpg'),
        title: 'Méditation - Monoman',
    },
    {
        id: 2,
        image: require('../ressourcesImg/soulagement.jpg'),
        title: ' Soulagement du stress -Monoman',
    },
    {
        id: 3,
        image: require('../ressourcesImg/In-the-green.jpg'),
        title: 'In the Green -Monoman',
    },
    {
        id: 4,
        image: require('../ressourcesImg/cozy-time.jpg'),
        title: 'Cozy Time -Monoman',
    },
    {
        id: 5,
        image: require('../ressourcesImg/dust-galaxy.jpg'),
        title: 'Dust Galaxy -Monoman',    
    },


]

const RessourcesMusic = ({ navigation }) => {

    return (
        <SafeAreaView>
                <View >
                    <View style={[{ backgroundColor: '#ffd6a5', borderRadius: 15, height: TOP_HEADER_HEIGHT + 700 }]}>
                        <BackIcon style={styles.Icon} name="arrow-left" size={30} color={"#1a2e35"} onPress={() => {
                            navigation.goBack();
                        }} />
                        <Text style={styles.name}>Musiques recommandés</Text>
                        <ScrollView style={styles.bg}>
                            <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn' >
                            <InfoIcon style={{ paddingLeft: 110 }} name="info" size={30} color={"#ffaaaf"} />
                                            <HeadphonesIcon  style={{ paddingLeft: 50 }} name="headphones" size={30} color={"#385a64"} />
                                            <MusicIcon  style={{ paddingLeft: 50 }} name="music" size={30} color={"#ff4f5a"} />
                            </Animatable.View>
                            <Text style={{marginTop:30, marginLeft:10, fontSize:17, fontWeight:'400'}}> playlist proposée par Monoman sur YouTube qui calme le stresse, l'anxieté et la dépression:	</Text>
                            {Musiques.map((detail, index) => {
                                return (
                                    <View key={detail.id}>
                                        <Animatable.View animation='fadeInUp' key={index} >
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image style={styles.emojie} source={detail.image} />
                                                    <Text style={styles.title} >{detail.title}</Text>
                                            </View>
                                        </Animatable.View>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    Icon: {
        marginLeft: 15,
        marginTop: 45
    },
    name: {
        fontWeight: '700',
        fontSize: 20,
        position: 'absolute',
        top: TOP_HEADER_HEIGHT - theme.spacing(2) * 5,
        left: theme.spacing(2) * 4
    },
    emojie: {
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        resizeMode: 'contain',
        alignSelf: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 10,
        borderRadius:10
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: '#1a2e35',
        marginTop:50,
        paddingLeft:10,
        maxWidth:'90%'
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 20,
        color: '#1a2e35',
        maxWidth:'90%'
    },
    bg: {
        position: 'absolute',
        width,
        backgroundColor: 'white',
        transform: [{ translateY: TOP_HEADER_HEIGHT }],
        borderRadius: 32,
        padding: theme.spacing(2),
        paddingTop: 32 + theme.spacing(2),
    },

})

export default RessourcesMusic;


/*import { View, Text, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView, FlatList } from 'react-native'
import { createTheme } from '@material-ui/core/styles'
import { ITEM_HEIGHT } from './ResultQuizz';
import BackIcon from 'react-native-vector-icons/Feather';
import InfoIcon from 'react-native-vector-icons/Feather';
import HeadphonesIcon from 'react-native-vector-icons/Feather';
import MusicIcon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const TOP_HEADER_HEIGHT = height * 0.3

const theme = createTheme({
    spacing: 4,
    //height:
});

export const Musiques = [
    {
        id:1,
        image: require('../images/modéré.png'),
        title: 'titre du musique 1'
    },
    {
        id:2,
        image: require('../images/sévére.png'),
        title: 'titre du musique 2'
    },
]
/*export const musiques = [
    {
        id:1,
        image: require('../images/modéré.png'),
        title: 'titre du musique 1'
    },
    {
        id:2,
        image: require('../images/sévére.png'),
        title: 'titre du musique 2'
    },
]

export const activites =[
    {
        id:1,
        image: require('../images/extrêmeSévére.png'),
        title: 'titre du musique 1'
    },
    {
        id:2,
        image: require('../images/normal.png'),
        title: 'titre du musique 2'
    },
]

export const videos = [
    {
        id:1,
        image: require('../images/modéré.png'),
        title: 'titre du vidéo 1'
    },
    {
        id:2,
        image: require('../images/sévére.png'),
        title: 'titre du vidéo 2'
    },
]

*/
/*
const RessourcesMusic = ({ navigation }) => {

    return (
        <SafeAreaView>
            <ScrollView  >
                <View >
                    <View style={[{ backgroundColor: '#ffd6a5', borderRadius: 15, height: TOP_HEADER_HEIGHT + 700 }]}>
                        <BackIcon style={styles.Icon} name="arrow-left" size={30} color={"#1a2e35"} onPress={() => {
                            navigation.goBack();
                        }} />
                        <Text style={styles.name}>Musiques recommandées</Text>
                        <View style={styles.bg}>
                            {Musiques.map((detail, index) => {
                                return (
                                    <View >
                                        <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn' >
                                            <InfoIcon style={{ paddingLeft: 110 }} name="info" size={30} color={"#ffaaaf"} />
                                            <HeadphonesIcon  style={{ paddingLeft: 50 }} name="headphones" size={30} color={"#385a64"} />
                                            <MusicIcon  style={{ paddingLeft: 50 }} name="music" size={30} color={"#ff4f5a"} />
                                        </Animatable.View>
                                        <Animatable.View animation='fadeInUp' key={detail}>
                                            <Image style={styles.emojie} source={detail.image} />
                                            <Text  style={styles.title} >{detail.title}</Text>
                                        </Animatable.View>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    Icon: {
        marginLeft: 15,
        marginTop: 45
    },
    name: {
        fontWeight: '700',
        fontSize: 20,
        position: 'absolute',
        top: TOP_HEADER_HEIGHT - theme.spacing(2) * 5,
        left: theme.spacing(2) * 4
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
    title: {
        fontSize: 20,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: 8,
        color: '#1a2e35'
    },
    bg: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'white',
        transform: [{ translateY: TOP_HEADER_HEIGHT  }],
        borderRadius: 32,
        padding: theme.spacing(2),
        paddingTop: 32 + theme.spacing(2),
    },

})

export default RessourcesMusic;

*/