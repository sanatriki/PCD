
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView, FlatList } from 'react-native'
import { createTheme } from '@material-ui/core/styles'
//import { ITEM_HEIGHT } from './ResultQuizz';
import BackIcon from 'react-native-vector-icons/Feather';
import InfoIcon from 'react-native-vector-icons/Feather';
import BookmarksIcon from 'react-native-vector-icons/Entypo';
import BookIcon from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const TOP_HEADER_HEIGHT = height * 0.25

const ITEM_HEIGHT = height * 0.18

const theme = createTheme({
    spacing: 4,
    //height:
});

export const livres = [
    //stress books:
    {
        id: 1,
        image: require('../ressourcesImg/3-kifs-par-jour.jpg'),
        title: '3 Kifs par jour',
        subtitle: 'de Florence Servan-Schreiber, Editions Marabout.',
    },
    {
        id: 2,
        image: require('../ressourcesImg/le-principe-du-petit.jpg'),
        title: 'Le principe du petit pingouin',
        subtitle: 'de Denis Doucet, Marabout Psy.',
    },
    {
        id: 3,
        image: require('../ressourcesImg/Super-Stress.jpg'),
        title: 'Super Stress, la solution',
        subtitle: 'de Roberta Lee, L’esprit d’ouverture, Belfond.',
    },
    {
        id: 4,
        image: require('../ressourcesImg/petit-chahier.jpg'),
        title: 'Cahier d’exercices pour rester zen',
        subtitle: 'd’Erik Pigani, Jouvence',
    },
    {
        id: 5,
        image: require('../ressourcesImg/La-Gestion-Du-Stress.jpg'),
        title: 'La gestion du stress',
        subtitle: ' de Raphaëlle Giordano',
    },
    //anxiety books:
    {
        id: 1,
        image: require('../ressourcesImg/depasse-mes-angoisses.jpg'),
        title: 'Je dépasse mes peurs et mes angoisses',
        subtitle: 'de Christophe André.',
    },
    {
        id: 2,
        image: require('../ressourcesImg/dominez-votre-anxiete.jpg'),
        title: 'Dominez votre anxiété avant qu’elle ne vous domine ',
        subtitle: 'de Albert Ellis.',
    },
    {
        id: 3,
        image: require('../ressourcesImg/Anxiete.jpg'),
        title: 'Comment surmonter l’anxiété',
        subtitle: 'de Enrique Rojas.',
    },
    {
        id: 4,
        image: require('../ressourcesImg/tremblez-mais-osez.jpg'),
        title: 'Tremblez mais osez',
        subtitle: 'de Susan Jeffers',
    },
    {
        id: 5,
        image: require('../ressourcesImg/mediter.jpg'),
        title: 'Méditer',
        subtitle: ' de Mark Williams,',
    },

        //depression books:
        {
            id: 1,
            image: require('../ressourcesImg/La_depression_une_epreuve_pour_grandir.jpg'),
            title: 'La dépression, une épreuve pour grandir',
            subtitle: 'de Moussa Nabati.',
        },
        {
            id: 2,
            image: require('../ressourcesImg/depression-comment-en-sortir.jpg'),
            title: 'La dépression, comment en sortir',
            subtitle: 'de Mirabel-Sarron.',
        },
        {
            id: 3,
            image: require('../ressourcesImg/guerir-de-la-depression.jpg'),
            title: 'Guérir de la dépression : Les nuits de l’âme',
            subtitle: '	de Gourion, David.',
        },
        {
            id: 4,
            image: require('../ressourcesImg/imparfaits-libres-heureux.jpg'),
            title: 'Améliorer l’estime de soi',
            subtitle: 'de Christophe André',
        },
        {
            id: 5,
            image: require('../ressourcesImg/mediter-pour-ne-plus-deprimer.jpg'),
            title: 'Méditer pour ne plus déprimer',
            subtitle: ' de Christophe André',
        },
]

const RessourcesLivres = ({ navigation }) => {

    return (
        <SafeAreaView>
            <ScrollView  >
                <View >
                    <View style={[{ backgroundColor: '#ffaaaf', borderRadius: 15, height: TOP_HEADER_HEIGHT + 700 }]}>
                        <BackIcon style={styles.Icon} name="arrow-left" size={30} color={"#1a2e35"} onPress={() => {
                            navigation.goBack();
                        }} />
                        <Text style={styles.name}>Livres recommandés</Text>
                        <View style={styles.bg}>
                            <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn' >
                                <InfoIcon /*style={styles.Icon}*/ style={{ paddingLeft: 110 }} name="info" size={30} color={"#ffaaaf"} />
                                <BookmarksIcon /*style={styles.Icon}*/ style={{ paddingLeft: 50 }} name="bookmarks" size={30} color={"#385a64"} />
                                <BookIcon /*style={styles.Icon}*/ style={{ paddingLeft: 50 }} name="open-book" size={30} color={"#ff4f5a"} />
                            </Animatable.View>
                            {livres.map((detail, index) => {
                                return (
                                    <View >
                                        <Animatable.View animation='fadeInUp' key={detail} >
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image style={styles.emojie} source={detail.image} />
                                                <View style={{flexDirection:'column'}}>
                                                    <Text style={styles.title} >{detail.title}</Text>
                                                    <Text style={styles.subtitle} >{detail.subtitle}</Text>
                                                </View>
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
        width: ITEM_HEIGHT * 0.7,
        height: ITEM_HEIGHT * 0.7,
        resizeMode: 'contain',
        alignSelf: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 40
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#1a2e35',
        marginTop:60,
        maxWidth:'98%'
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

export default RessourcesLivres;
