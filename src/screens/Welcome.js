 //page start quizz (après login de aziz)
import { StyleSheet, Text, View,StatusBar,Image,ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {

  return (
    <View style={{flex:1,backgroundColor:"#ededed"}}>
    <StatusBar barStyle='dark-content' backgroundColor="#ededed"/>
    {/*Doctor Image */}
    <View style={{flex:3, flexDirection:"column", backgroundColor:'#ddd'}}>
        <ImageBackground source={require('../images/Doctor.png')} style={{flex:1, width:'100%', backgroundColor:"#ededed"}}/>
    </View>

    {/*Button and Text */}
    <View style={{flex:2}}>
        {/*Text */}
            <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start',alignItems:'center', backgroundColor:'#ededed'}}>
                 <Text style={{color:'#385a64', fontSize:30, fontWeight:'bold'}}>C'est un bon début !</Text>
                 <Text style={{maxWidth: '70%', color:'#1a2e35', fontSize:16, textAlign:'center', paddingTop:20}}> Nous allons maintenant te poser quelques questions afin de t'offrir un bilan de bien-être mental personnalisé. </Text>
            </View>
        {/*Button */}
            <View style={{flex:1, flexDirection:'column', justifyContent:'flex-end', alignItems:'center'}}>
                <TouchableOpacity style={{justifyContent: 'center', width:'70%', backgroundColor:'#385a64', height:50, marginBottom:90, borderRadius:10}}
                    onPress={()=>navigation.navigate("ChooseTopic")}>
                    <Text style={{fontSize:15, letterSpacing:1.5,textAlign:'center', position:'relative', fontWeight:'bold', color:'#ededed'}} >Continuer</Text>
                </TouchableOpacity>
            </View>
    </View>

      
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})