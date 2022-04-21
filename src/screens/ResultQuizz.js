// ResultQuizz Est comme onboarding (tji baad splashafterquizz)
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Salon from './Salon'
//import { height, SPACING } from '@mui/system';
import {createTheme} from '@material-ui/core/styles'

const theme = createTheme({
    spacing: 4,
    //height:
  });

  const { width, height } = Dimensions.get('window');

  export const ITEM_HEIGHT = height * 0.18

//const ITEM_HEIGHT = height * 0.18;

const ResultQuizz = ({navigation}) => {

    return (
        <SafeAreaView style={{flex:2}}>
        <ScrollView>
            <TouchableOpacity >
                <Image source={require('../images/resultQuizz.png')} style={{width:200,height:200, alignSelf:'center', borderRadius:5}} />
                <Text style={styles.title}>Votre Bilan de Santé Mentale</Text>
                <Text style={styles.miniTitle}>Nous allons par la suite t'aider pour que tu puisses bénificier d'un suivi quotidien.</Text>
            </TouchableOpacity>


{/* AFFICHAGE DU BILAN 1er ESSAI */}
            <SafeAreaView style={{flex:3}} >
                <FlatList
                    data={Salon}
                    keyExtractor = { item => item.key}
                    contentContainerStyle={{ padding:theme.spacing(2)}}
                    renderItem={({item}) => {
                        return <TouchableOpacity onPress={() => {
                            navigation.navigate('SalonListDetails', {item});
                        }} 
                        style={{marginBottom: theme.spacing(2), height: ITEM_HEIGHT}}>
                            <View style={{flex: 1, padding: theme.spacing(2)}}>
                                <View  style = {[StyleSheet.absoluteFillObject, {backgroundColor: item.color, borderRadius: 16}]}/>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.jobTtile}>{item.jobTitle}</Text>
                                <Image source={item.image} style={styles.image}/> 
                            </View>
                        </TouchableOpacity>
                    }}
                />
                <View style= {styles.bg}/>
            </SafeAreaView>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={{ justifyContent: 'center', width: '70%', backgroundColor: '#385a64', height: 40, marginBottom: 5, marginTop: 10, borderRadius: 10 }}
                    onPress={()=>navigation.navigate("MainContainer")}>
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
        color : '#385a64'
    },
    miniTitle : {
        fontSize: 16,
        paddingTop: 10,
        alignSelf:'center',
        maxWidth: '70%',
        color : '#1a2e35'
    },
    name : {
        fontWeight: '700',
        fontSize: 18,

    },
    jobTitle: {
        fontSize: 11,
        opacity: 0.7,
    }, image: {
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
            backgroundColor:'red',
            transform : [{translateY: height }],
            borderRadius: 32,

    }

})

export default ResultQuizz