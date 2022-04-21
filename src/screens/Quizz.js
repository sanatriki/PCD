import React from 'react';
import { View,Text,StyleSheet,Pressable} from 'react-native';
import Choix from './Inputs/Choix';
function Ques({navigation}) {
    const fct=()=>{
  navigation.navigate('SplashAfterQuizz')
    }
    return (

        <View style={styles.all} >
          
            <View style={styles.top} >
                <Text 
                 style={styles.text} >I couldn’t seem to experience any positive feeling at all </Text>

            </View>
            <View style={styles.menu}>
  
                <Choix fonc={fct} item={require('../images/Mylogo.png')} />
                <Choix fonc={fct} item={require('../images/Mylogo.png')} />
                <Choix fonc={fct} item={require('../images/Mylogo.png')} />
                <Choix fonc={fct} item={require('../images/Mylogo.png')} />

            </View>
           
            
        </View>
    );
}

const styles = StyleSheet.create({
    all:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'#ededed',

    },
    top:{
        paddingTop:300,
        height:'50%',
        alignItems:'center',
       
        padding:20,
    },
    text:{
        fontSize:15,
        textAlign:'center',
        textTransform:'uppercase',
        color:'#385a64',
        fontWeight:'bold',
        letterSpacing:0.8,

    },
    menu:{
        height:'40%',
        flexDirection:'row',
        flexWrap:'wrap',



    },


});

export default Ques;