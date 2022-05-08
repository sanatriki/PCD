import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions, ScrollView } from 'react-native'
import BackIcon from 'react-native-vector-icons/Feather';
import Quest from 'react-native-vector-icons/AntDesign'
import Tick from 'react-native-vector-icons/AntDesign'

import * as Animatable from 'react-native-animatable';

const etapes = [
    {
        id: 1,
        title: '1. Améliorez la qualité de votre sommeil',
        description: 'Saviez-vous que la privation de sommeil peut avoir de graves conséquences sur notre santé, et notamment sur l’augmentation de votre taux de cortisol ?  En effet, selon plusieurs études scientifiques, privilégier un sommeil de qualité est excellent pour la santé. ',
        sousDescrip1: 'Pour cela, nous vous conseillons d’opter pour une routine sommeil avec des heures de coucher plus ou moins fixes, bannir les écrans ou autres stimuli avant l’endormissement.'
    },
    {
        id: 2,
        title: '2. Faites une activité sportive au quotidien pour calmer l’agitation nerveuse',
        description: 'Le sport est excellent pour la santé, mais aussi pour diminuer votre niveau de stress. Selon plusieurs études, pratiquer une activité physique de façon régulière permettrait à votre corps de diminuer le taux de cortisol, appelé aussi hormone du stress.',
        sousDescrip1: 'Sortez dans la nature, pratiquez tout type de sport qui vous convient, le nécessaire c’est que vous faites travailler votre corps!'
    },
    {
        id: 3,
        title: '3. Pratiquez des activités relaxantes pour réduire votre niveau de stress',
        description: 'Pour diminuer votre niveau de stress, la pensée positive ou les activités basées sur la pleine conscience. Apprendre à mieux se connaître, en s’observant, tout en étant conscient des différents déclencheurs de stress, permettrait de mieux l’appréhender, sans en devenir une victime sur le long terme.',
        sousDescrip1: 'la pratique de yoga est fortement conseillée, voire considérée comme traitement efficace pour soigner le stresse. De même pour la médiation qui englobent une pensée positive ,'
    },
    {
        id: 4,
        title: '4. Optez pour des compléments alimentaires pour lutter contre le stress',
        description: 'Lorsque le stress s’installe et devient permanent, il est indispensable de remplir son réservoir énergétique. Si vous sentez que votre organisme est affaibli. ',
        sousDescrip1: 'Il est alors essentiel de faire le plein de vitamines et minéraux pour dire adieu au stress et combattre la nervosité. Découvrez nos gummies stress, végan et aromatisés à la pomme verte qui sont des compléments alimentaires spécialement formulés pour lutter efficacement contre l’impact négatif du stress.'
    },
    {
        id: 5,
        title: '5. Privilégiez des aliments anti-stress',
        description: 'Parmi les aliments à privilégier en cas de stress, voici une liste non-exhaustive pour calmer votre stresse :',
        sousDescrip1: ' les céréales complètes et les légumineuses, riches en vitamines du groupe B,les noix, les noisettes et les grains de chia,les aliments riches en oméga 3 et acides gras essentiels, tels que les poissons, les aliments riches en tryptophane et en magnésium (banane, produits laitiers, chocolat noir, etc.)'
    }
]

const TraitementStresse = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <BackIcon style={styles.Icon} name="arrow-left" size={30} color={"#1a2e35"} onPress={() => { navigation.goBack(); }} />
                <Image source={require('../images/stresse1.png')} style={{ width: 150, height: 150, alignSelf: 'center' }} />
                <View>
                    <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn'>
                        <Quest style={{ paddingLeft: 20, marginTop: 50 }} name="questioncircle" size={30} color={"#ff4f5a"} />
                        <Text style={styles.titre}>C'est quoi le Stresse ?</Text>
                    </Animatable.View>

                    <View>
                        <Text style={styles.desc}>Le stress est un état qui déclenche plusieurs réactions à la fois psychologiques et physiques. Nous en faisons tous l’expérience à plusieurs moments de notre vie. </Text>
                        <Text style={styles.desc}>Comment lutter contre le stress ? L’équipe médicale de TrackMe vous aide à mieux comprendre ce phénomène et ainsi avoir les clés pour combattre votre stress.</Text>
                    </View>

                    <Animatable.View style={{ flexDirection: 'row' }} animation='bounceIn'>
                        <Tick style={{ paddingLeft: 20, marginTop: 20 }} name="checkcircle" size={30} color={"#ff4f5a"} />
                        <Text style={styles.etape}>Voici les 5 étapes clés à suivre! </Text>
                    </Animatable.View>
                    <Image source={require('../images/5.png')} style={{ width: 150, height: 150, alignSelf: 'center' }} />

                    <View >
                        {etapes.map((item, index) => {
                            return (
                                <View key={item.id}>
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
        backgroundColor: '#cdcbd6',
    },
    description: {
        maxWidth: '93%',
        paddingLeft: 15,
        fontSize: 16,
        paddingBottom: 20
    },
    sousDescrip1 :{
        maxWidth: '93%',
        paddingLeft: 15,
        fontSize: 16,
        paddingBottom: 20,
        fontWeight:'500'
    }

})
export default TraitementStresse