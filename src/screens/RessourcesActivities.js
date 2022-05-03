
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView, FlatList } from 'react-native'
import { createTheme } from '@material-ui/core/styles'
//import { ITEM_HEIGHT } from './ResultQuizz';
import BackIcon from 'react-native-vector-icons/Feather';
import InfoIcon from 'react-native-vector-icons/Feather';
import ChildIcon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const TOP_HEADER_HEIGHT = height * 0.25

const ITEM_HEIGHT = height * 0.18

const theme = createTheme({
    spacing: 4,
    //height:
});

export const Activities = [
    //stress books:
    {
        id: 1,
        title: '1/ Lire un bon livre',
        subtitle:'Imagines-toi confortablement installé à l’ombre d’un arbre, une légère brise dans les cheveux et un bon livre à la main. La météo ne s’y prête pas? aucun problème, mets-toi bien au chaud sous un plaid avec ta boisson chaude préférée. La lecture est un agréable moment de détente et d’évasion!'
    },
    {
        id: 2,
        title: '2/ Méditer	',
        subtitle:'Cinq minutes de médiation quotidienne chez soi contribuent à diminuer le stress, lâcher prise et canaliser ses émotions !'
    },
    {
        id: 3,
        title: '3/ Faire un excercice de respiration',
        subtitle:'Respirer est une des moyens les plus efficaces pour se reconnecter à soi et à l’instant présent, et la meilleure défense.	'
    },
    {
        id: 4,
        title: '4/ Se promener au grand air',
        subtitle:'La nature rend plus heureux tout simplement! Dès que tu le peux, sors prendre l’air pour profiter de la nature près de chez toi: parcs, randonnées en forêt ou en montagne, baignade à la mer, virée vélo à la campagne, sortie Kayak sur des rivières.. à toi de trouver ton antidote naturel au stress!'
    },
    {
        id: 5,
        title: '5/ Pratiquer du sport',
        subtitle:'Pourquoi on se sent bien après une activité physique? parce que le cerveau libère des endorphines. Cette hormone aide à se détendre, à déduire le stress et provoquent un intense sentiment de bien-être.'
    },
    {
        id: 6,
        title: '6/ Tenir un journal',
        subtitle:'Est-ce que tu sais que l’écriture a de merveilleux bienfaits thérapeutiques? Poser sur le papier ses émotions, souvenirs et pensées est une technique très efficace pour se relaxer. C’est un excellent anti-stress!'
    }

]

const RessourcesActivities = ({ navigation }) => {

    return (
        <SafeAreaView>
            <ScrollView  >
                <View >
                    <View style={[{ backgroundColor: '#bcd4e6', borderRadius: 15, height: TOP_HEADER_HEIGHT + 700 }]}>
                        <BackIcon style={styles.Icon} name="arrow-left" size={30} color={"#1a2e35"} onPress={() => {
                            navigation.goBack();
                        }} />
                        <Text style={styles.name}>Activités recommandés</Text>
                        <View style={styles.bg}>
                            <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn' >
                            <InfoIcon  style={{ paddingLeft: 110 }} name="info" size={30} color={"#ffaaaf"} />
                                            <ChildIcon  style={{ paddingLeft: 50 }} name="child" size={32} color={"#385a64"} />
                                            <Icons  style={{ paddingLeft: 50 }} name="icons" size={30} color={"#ff4f5a"} />
                            </Animatable.View>
                            {Activities.map((detail, index) => {
                                return (
                                    <View >
                                        <Animatable.View animation='fadeInUp' key={detail} >
                                            <View>
                                                {/*<Image style={styles.emojie} source={detail.image} />*/}
                                                    <Text style={styles.title} >{detail.title}</Text>
                                                    <Text style={styles.subtitle} >{detail.subtitle}</Text>
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
        color: '#ff4f5a',
        marginTop:30,
        paddingLeft:10,
        maxWidth:'90%'
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 30,
        marginTop:10,
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

export default RessourcesActivities;


/*import { View, Text, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView, FlatList } from 'react-native'
import { createTheme } from '@material-ui/core/styles'
import { ITEM_HEIGHT } from './ResultQuizz';
import BackIcon from 'react-native-vector-icons/Feather';
import InfoIcon from 'react-native-vector-icons/Feather';
import ChildIcon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const TOP_HEADER_HEIGHT = height * 0.3

const theme = createTheme({
    spacing: 4,
    //height:
});

export const Activities = [
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

const RessourcesActivities = ({ navigation }) => {

    return (
        <SafeAreaView>
            <ScrollView  >
                <View >
                    <View style={[{ backgroundColor: '#bcd4e6', borderRadius: 15, height: TOP_HEADER_HEIGHT + 700 }]}>
                        <BackIcon style={styles.Icon} name="arrow-left" size={30} color={"#1a2e35"} onPress={() => {
                            navigation.goBack();
                        }} />
                        <Text style={styles.name}>Activités recommandées</Text>
                        <View style={styles.bg}>
                            {Activities.map((detail, index) => {
                                return (
                                    <View >
                                        <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn' >
                                            <InfoIcon  style={{ paddingLeft: 110 }} name="info" size={30} color={"#ffaaaf"} />
                                            <ChildIcon  style={{ paddingLeft: 50 }} name="child" size={32} color={"#385a64"} />
                                            <Icons  style={{ paddingLeft: 50 }} name="icons" size={30} color={"#ff4f5a"} />
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

export default RessourcesActivities;
*/