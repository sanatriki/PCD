import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions, ScrollView } from 'react-native'
import BackIcon from 'react-native-vector-icons/Feather';
import Quest from 'react-native-vector-icons/AntDesign'
import Tick from 'react-native-vector-icons/AntDesign'

import * as Animatable from 'react-native-animatable';

const etapes = [
    {
        id: 1,
        title: '1. Adopter une meilleure hygiène de vie',
        description: 'Notre alimentation est l’une des bases de la santé. Ce que l’on met dans notre assiette est très important. Pour sortir de la dépression, il n’existe pas de régime miracle, ou d’aliment magique. Or, surveiller ce que vous consommez peut vous aider à améliorer votre ressenti. De plus, la dépression peut littéralement déborder sur notre alimentation, et la bouleverser. Dans certains cas, elle nous entraîne à manger trop ou pas assez.',
        sousDescrip1:'Nous orientons nos repas vers des aliments trop gras, trop salés ou trop sucrés. Les aliments transformés deviennent alors une routine alimentaire. En gardant le contrôle de votre alimentation, vous réussirez à garder le contrôle de votre santé'
    },
    {
        id: 2,
        title: '2. Entraîner le corps et l’esprit',
        description: 'En parallèle, vous pourrez aussi reprendre une activité physique régulière, de manière progressive. Les exercices physiques et mentaux sont très bons pour le moral, pour le bien-être et pour la forme. Le sport, quelle que soit sa forme, vous aidera à dynamiser votre quotidien et à booster votre taux d’endorphine.',
        sousDescrip1:' L’écriture, la lecture et l’apprentissage vont aussi redynamiser votre cerveau et ses fonctions. Ces effets positifs vont vous aider à penser de manière positive !'
    },
    {
        id: 3,
        title: '3. Consommer des oméga-3',
        description: 'Si les oméga-3 peuvent se consommer sous la forme de compléments alimentaires, on les retrouve aussi dans bon nombre d’aliments. Pour de meilleurs apports, vous pourrez compléter votre alimentation de ces gélules naturelles, et ainsi ne pas bouleverser trop d’habitudes.',
        sousDescrip1:'Consommez régulièrement certaines huiles telles que les huiles de lin, de colza et de noix. Vous en trouverez aussi dans les épinards, la mâche, la salade ou encore, dans le pourpier. Le poisson gras est une source intéressante d’oméga-3 : maquereaux, harengs, saumon…'
    },
    {
        id: 4,
        title: '4. Les compléments alimentaires contre la dépression',
        description: 'Dans la nature, certains aliments et plantes sont dotés de propriétés conséquentes sur les symptômes de la dépression. Pour la plupart, ils agissent sur différentes fonctions de l’organisme, comme sur notre forme ou notre humeur. Avec leur aide, il est possible de se sortir de cette situation, et toujours sans avoir recours aux médicaments.',
        sousDescrip1: 'Le ginseng, Le millepertuis, Le ginkgo biloba, le Safran..',

    },
    {
        id: 5,
        title: '5. Faites du sport pour relâcher la pression',
        description: 'Pour lutter contre l’anxiété et plus généralement contre le stress, la pratique d’une activité physique est plus que recommandée. Par la sécrétion d’endorphine et de dopamine, le sport vous aide à augmenter votre niveau de bien-être et à relâcher la pression accumulée. ',
        sousDescrip1:'Pour une double action, privilégiez les activités sportives en extérieur pour bénéficier de la luminosité naturelle et d’un bon bol d’air frais !'
    }
]

const TraitementDépression = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <BackIcon style={styles.Icon} name="arrow-left" size={30} color={"#1a2e35"} onPress={() => { navigation.goBack(); }} />
                <Image source={require('../images/dépression1.png')} style={{ width: 250, height: 250, alignSelf: 'center' }} />
                <View>
                    <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn'>
                        <Quest style={{ paddingLeft: 20, marginTop: 50 }} name="questioncircle" size={30} color={"#ff4f5a"} />
                        <Text style={styles.titre}>C'est quoi la Dépression ?</Text>
                    </Animatable.View>

                    <View>
                        <Text style={styles.desc}>La dépression est un trouble de l'humeur. Il se caractérise par une profonde tristesse, un désespoir, un manque de désir de vivre, un repli sur soi, une perte d'intérêts et de motivation pour les activités de tous les jours, un changement de comportement et un ralentissement psychique et moteur qui peuvent conduire dans les cas les plus extrêmes au suicide. </Text>
                        <Text style={styles.desc}>Comment lutter contre la Dépression ? L’équipe médicale de TrackMe vous aide à mieux comprendre ce phénomène et ainsi avoir les clés pour combattre votre Anxieté.</Text>
                    </View>

                    <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn'>
                        <Tick style={{ paddingLeft: 20, marginTop: 20 }} name="checkcircle" size={30} color={"#ff4f5a"} />
                        <Text style={styles.etape}>Voici les 5 étapes clés à suivre! </Text>
                    </Animatable.View>
                    <Image source={require('../images/1.png')} style={{ width: 150, height: 150, alignSelf: 'center' }} />

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
        backgroundColor: '#E6E6FA',
    },
    description: {
        maxWidth: '93%',
        paddingLeft: 15,
        fontSize: 16,
        paddingBottom: 20
    },
    sousDescrip1: {
        maxWidth: '93%',
        paddingLeft: 15,
        fontSize: 16,
        paddingBottom: 20,
        fontWeight:'500'
    }

})
export default TraitementDépression