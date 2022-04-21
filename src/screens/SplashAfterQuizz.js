//SplashAfterQuizz kima Splash (w tji baad ChooseTopic)
import { StyleSheet, Text, View, StatusBar,Image } from 'react-native'
import React from 'react'
//import { Colors } from '../constants/Colors'
//import { Colors } from '../../src/constants'

const SplashAfterQuizz = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('ResultQuizz')
    },5000)
  return (
    <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'/*,backgroundColor:'#ffaaaf'*/}} >
    <StatusBar barStyle="light-content" hidden={false} backgroundColor="#ededed" />
    <Image source={require('../images/HiDoctor1.png')} style={{width:350,height:350, paddingBottom: 100}}/>
    <Text style={{fontFamily: 'HelveticaNeue',fontWeight:'bold',fontSize:30,color:'#385a64'}}>Calcul de ton score..</Text>
    <Text style={{fontFamily: 'HelveticaNeue', maxWidth: '70%', color:'#1a2e35', fontSize:16, textAlign:'center', paddingTop:20}}>Ne vous inquiétez pas, sur TrackMe, nous vous assurons votre confidentialité!</Text>
    </View>
  )
}

export default SplashAfterQuizz

const styles = StyleSheet.create({})