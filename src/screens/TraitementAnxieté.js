import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions, ScrollView } from 'react-native'
import BackIcon from 'react-native-vector-icons/Feather';
import Quest from 'react-native-vector-icons/AntDesign'
import Tick from 'react-native-vector-icons/AntDesign'

import * as Animatable from 'react-native-animatable';

const etapes = [
    {
        id: 1,
        title: '1. Pratiquez la respiration abdominale pour combattre naturellement votre anxiété',
        description: 'Rien de plus simple, direz-vous, que de respirer. Car c’est un mécanisme physiologique et indépendant de notre volonté. Mais savez-vous vraiment respirer ? Il existe deux types de respirations : la respiration thoracique et la respiration abdominale ou ventrale. Alors que la respiration thoracique en cas de stress, ne remplit que 30 % des poumons et provoque un essoufflement par manque d’oxygène, la respiration abdominale, passe par le bas du corps et permet une plus grande amplitude des poumons pour une vraie respiration. Elle peut, ainsi, aider à calmer vos angoisses. De plus, c’est un véritable exercice de relaxation !:  ',
        sousDescrip1: 'Étendu(e) sur le sol et les mains placées le long du corps, inspirez par le nez en gonflant le ventre,bloquez votre respiration quelques secondes puis expirez par la bouche en vidant totalement vos poumons et en creusant votre ventre, Une dizaine de cycles devraient suffire à vous apaiser. !'
    },
    {
        id: 2,
        title: '2.  Marchez dans la nature en pleine conscience pour vaincre l’anxiété',
        description: 'Marchez ! Au risque de vous surprendre, la marche est l’un des traitements les plus bénéfiques lorsque l’on est aux abois et que tout nous irrite. ',
        sousDescrip1:' Choisissez un endroit calme et bucolique. Marchez lentement en vous concentrant sur vos foulées et votre respiration. Sortir prendre l’air et faire une balade en pleine nature ou dans un parc à côté de chez soi représente l’un des traitements contre l’anxiété les plus efficaces pour stopper le flot de pensées négatives qui peuvent envahir le quotidien. Vos pensées négatives vous envahissent ? N’essayez pas de les éviter. Revenez, dès que vous le pouvez, aux sensations que vous éprouvez en portant votre attention sur vos foulées, votre respiration, l’herbe humide sous vos pieds, le chant d’un oiseau, les rayons du soleil qui se faufilent à travers les arbres… Vous y êtes ? Alors, vous marchez en « pleine conscience ». La « pleine conscience » est un volet thérapeutique qui a donné lieu à de nombreux travaux scientifiques.'
    },
    {
        id: 3,
        title: '3. Le programme Theraserena pour lutter contre l’anxiété',
        description: 'Ce sont nos émotions, nos ressentis, nos pensées, qui façonnent notre comportement. Et quand il y a un trouble anxieux, ces phénomènes sont exacerbés et le meilleur moyen de les apaiser est de les analyser et de les comprendre. C’est ce que propose la Thérapie Comportementale et Cognitive (TCC):  ',
        sousDescrip1: 'L’idée est de se concentrer tout d’abord sur les pensées automatiques et les croyances souvent erronées et négatives que le patient cultive sur lui-même, les autres et le monde. L’étape suivante consiste à développer des schémas alternatifs et des comportements bien plus en phase avec l’environnement du patient. Le programme TheraSerena va dans ce sens. Basé sur les TCC, il vous aide à évaluer et accepter votre stress et en comprendre ses impacts sur votre santé physique et psychique. Il participe à l’apaisement profond de votre anxiété, de vos ressentis et de vos émotions, avec des tests de relaxation. Enfin, il contribue à chasser vos pensées négatives grâce à des méthodes de psychologie positive et aide à la diminution de l’anxiété, donc à vous débarrasser de vos angoisses.'
    },
    {
        id: 4,
        title: '4. Essayez le journaling',
        description: 'Ado, vous étiez fan de votre carnet intime ? De retour sur le devant de la scène notamment avec le miracle morning, le journaling est une autre technique à essayer pour lutter contre l’anxiété. ',
        sousDescrip1: 'Pratiquer l’écriture quotidienne peut être un moyen très efficace d’apaiser les manifestations de l’anxiété en couchant sur papier ou sur ordinateur ses pensées et inquiétudes du moment.'
    },
    {
        id: 5,
        title: '5. Faites du sport pour relâcher la pression',
        description: 'Pour lutter contre l’anxiété et plus généralement contre le stress, la pratique d’une activité physique est plus que recommandée. Par la sécrétion d’endorphine et de dopamine, le sport vous aide à augmenter votre niveau de bien-être et à relâcher la pression accumulée. ',
        sousDescrip1:'Pour une double action, privilégiez les activités sportives en extérieur pour bénéficier de la luminosité naturelle et d’un bon bol d’air frais !'
    }
]

const TraitementAnxieté = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <BackIcon style={styles.Icon} name="arrow-left" size={30} color={"#1a2e35"} onPress={() => { navigation.goBack(); }} />
                <Image source={require('../images/anxiete1.png')} style={{ width: 150, height: 150, alignSelf: 'center' }} />
                <View>
                    <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn'>
                        <Quest style={{ paddingLeft: 20, marginTop: 50 }} name="questioncircle" size={30} color={"#ff4f5a"} />
                        <Text style={styles.titre}>C'est quoi l'Anxieté ?</Text>
                    </Animatable.View>

                    <View>
                        <Text style={styles.desc}>L’anxiété est une réaction normale qui devient une maladie lorsqu’elle survient alors qu’aucun événement ne la justifie vraiment. On parle alors de troubles anxieux, incompatibles avec la vie quotidienne. </Text>
                        <Text style={styles.desc}>Comment lutter contre l'Anxieté ? L’équipe médicale de TrackMe vous aide à mieux comprendre ce phénomène et ainsi avoir les clés pour combattre votre Anxieté.</Text>
                    </View>

                    <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn'>
                        <Tick style={{ paddingLeft: 20, marginTop: 20 }} name="checkcircle" size={30} color={"#ff4f5a"} />
                        <Text style={styles.etape}>Voici les 5 étapes clés à suivre! </Text>
                    </Animatable.View>
                    <Image source={require('../images/6.png')} style={{ width: 150, height: 150, alignSelf: 'center' }} />

                    <View >
                        {etapes.map((item, index) => {
                            return (
                                <View>
                                    <Animatable.View animation='fadeInUp' key={index} >
                                        <View style={styles.Heading}>
                                            <Text style={{ fontSize: 18, fontWeight: '500' }} >{item.title}</Text>
                                        </View>
                                        <View style={styles.subHeading}>
                                            <Text style={styles.description} >{item.description}</Text>
                                            <Text style={styles.sousDescrip1} >{item.sousDescrip1}</Text>
                                        </View>
                                    </Animatable.View>
                                </View>
                            )
                        })}
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8edeb',
        flex: 1
    },
    Icon: {
        marginLeft: 10,
        marginTop: 20
    },
    titre: {
        fontSize: 22,
        marginTop: 53,
        paddingLeft: 10,
        color: '#ff4f5a',
        fontWeight: '500'
    },
    desc: {
        maxWidth: '95%',
        paddingLeft: 10,
        marginTop: 10,
        fontSize: 15
    },
    etape: {
        maxWidth: '95%',
        paddingLeft: 10,
        marginTop: 23,
        fontSize: 22,
        color: '#ff4f5a',
        fontWeight: '500'
    },
    Heading: {
        padding: 10,
        width: Dimensions.get('screen').width - 30,
        alignItems: 'center',
        margin: 15,
        borderRadius: 20,
        backgroundColor: '#ffaaaf',
        borderTopRightRadius: 0,
    },
    subHeading: {
        padding: 10,
        width: Dimensions.get('screen').width - 30,
        alignItems: 'center',
        margin: 15,
        borderRadius: 10,
        backgroundColor: '#ffffee',
    },
    description: {
        maxWidth: '93%',
        paddingLeft: 15,
        fontSize: 16,
        paddingBottom: 20
    },
    sousDescrip1 : {
        maxWidth: '93%',
        paddingLeft: 15,
        fontSize: 16,
        paddingBottom: 20,
        fontWeight:'500'
    }

})
export default TraitementAnxieté