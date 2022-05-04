
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView, FlatList } from 'react-native'
import { createTheme } from '@material-ui/core/styles'
//import { ITEM_HEIGHT } from './ResultQuizz';
import BackIcon from 'react-native-vector-icons/Feather';
import InfoIcon from 'react-native-vector-icons/Feather';
import FilmIcon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const TOP_HEADER_HEIGHT = height * 0.25

const ITEM_HEIGHT = height * 0.18

const theme = createTheme({
    spacing: 4,
    //height:
});

export const Videos = [
    //stress books:
    {
        id: 1,
        image: require('../ressourcesImg/ameliorer.jpg'),
        title: '6 Habitudes Simples Pour Améliorer Votre Bien Être Mental ',
    },
    {
        id: 2,
        image: require('../ressourcesImg/anti-stress.jpg'),
        title: ' Affirmations Positives pour la paix de l’esprit. THÉRAPIE Anti-Stress',
    },
    {
        id: 3,
        image: require('../ressourcesImg/hypnose.jpg'),
        title: 'Hypnotherapie: hypnose pour gérer le stress, l’anxiété, les troubles du sommeil',
    },
    {
        id: 4,
        image: require('../ressourcesImg/moins-anxieux.jpg'),
        title: '6 Façons d’être moins anxieux et plus présent. Apprenez à vous libérez de l’anxiété',
    },
    {
        id: 5,
        image: require('../ressourcesImg/affirmation.jpg'),
        title: 'Affirmations Positives contre la dépression. Dépassement de soi, amour de soi',    
    },
    {
        id: 6,
        image: require('../ressourcesImg/regeneration.jpg'),
        title: 'Puissante Guérison Émotionnelle. Régénération Cellulaire et Paix Intérieure',    
    },


]

const RessourcesVideos = ({ navigation }) => {

    return (
        <SafeAreaView>
            <ScrollView  >
                <View >
                    <View style={[{ backgroundColor: '#fde2e4', borderRadius: 15, height: TOP_HEADER_HEIGHT + 700 }]}>
                        <BackIcon style={styles.Icon} name="arrow-left" size={30} color={"#1a2e35"} onPress={() => {
                            navigation.goBack();
                        }} />
                        <Text style={styles.name}>Vidéos recommandés</Text>
                        <View style={styles.bg}>
                            <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn' >
                            <InfoIcon  style={{ paddingLeft: 110 }} name="info" size={30} color={"#ffaaaf"} />
                                            <FilmIcon  style={{ paddingLeft: 50 }} name="film" size={32} color={"#385a64"} />
                                            <Icons  style={{ paddingLeft: 50 }} name="play-circle" size={30} color={"#ff4f5a"} />
                            </Animatable.View>
                            <Text style={{marginTop:30, marginLeft:10, fontSize:17, fontWeight:'400'}}> Vidéos proposée par la chaîne DeveloppementPerso sur YouTube qui calme le stresse, l'anxieté et la dépression:	</Text>
                            {Videos.map((detail, index) => {
                                return (
                                    <View key={detail.id}>
                                        <Animatable.View animation='fadeInUp' key={detail} >
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image style={styles.emojie} source={detail.image} />
                                                    <Text style={styles.title} >{detail.title}</Text>
                                            </View>
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
        width: ITEM_HEIGHT * 0.9,
        height: ITEM_HEIGHT * 0.9,
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
        marginTop:35,
        paddingLeft:10,
        maxWidth:'70%'
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

export default RessourcesVideos;

/*import { View, Text, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView, FlatList } from 'react-native'
import { createTheme } from '@material-ui/core/styles'
import { ITEM_HEIGHT } from './ResultQuizz';
import BackIcon from 'react-native-vector-icons/Feather';
import InfoIcon from 'react-native-vector-icons/Feather';
import FilmIcon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const TOP_HEADER_HEIGHT = height * 0.3

const theme = createTheme({
    spacing: 4,
    //height:
});

export const Videos = [
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


const RessourcesVideos = ({ navigation }) => {

    return (
        <SafeAreaView>
            <ScrollView  >
                <View >
                    <View style={[{ backgroundColor: '#fde2e4', borderRadius: 15, height: TOP_HEADER_HEIGHT + 700 }]}>
                        <BackIcon style={styles.Icon} name="arrow-left" size={30} color={"#1a2e35"} onPress={() => {
                            navigation.goBack();
                        }} />
                        <Text style={styles.name}>Vidéos recommandés</Text>
                        <View style={styles.bg}>
                            {Videos.map((detail, index) => {
                                return (
                                    <View >
                                        <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn' >
                                            <InfoIcon  style={{ paddingLeft: 110 }} name="info" size={30} color={"#ffaaaf"} />
                                            <FilmIcon  style={{ paddingLeft: 50 }} name="film" size={32} color={"#385a64"} />
                                            <Icons  style={{ paddingLeft: 50 }} name="play-circle" size={30} color={"#ff4f5a"} />
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

export default RessourcesVideos;
*/