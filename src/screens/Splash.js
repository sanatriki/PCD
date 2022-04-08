import { StyleSheet, Text, View, StatusBar,Image,  } from 'react-native'
import React from 'react'
//import { Colors } from '../constants/Colors'
//import { Colors } from '../../src/constants'

const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('OnboardingScreen')
    },3000)
  return (
    <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#ffaaaf'}} >
    <StatusBar barStyle="light-content" hidden={false} backgroundColor="#ededed" />
    <Image source={require('../images/Mylogo.png')} style={{width:100,height:100, resizeMode : 'contain'}}/>
    <Text style={{fontSize:30,color:'#1a2e35'}}>TrackMe</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})