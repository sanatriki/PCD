import React,{useState,useEffect} from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import Inputs from './Inputs';
import InputsJdid from './InputsJdid';
const Fles = (props) => {
    const[option,setoption]=useState(1); 
    const ClickChange =()=>{
        setoption(1);

    }

    return (
        <View style={StyleButton.container} >
           { option === 1 ?
          ( <View>

                <Pressable style={StyleButton.button}
                           onPress={()=>{setoption(2)}}>
                   <Text style={StyleButton.text} > sign up</Text>
                </Pressable>
                <Pressable style={StyleButton.button}
                           onPress={()=>{setoption(3)}}>
                   <Text style={StyleButton.text} > sign in </Text>
                </Pressable>
            </View>):
            option===3 ?(


                <InputsJdid  fct={ClickChange} />
            ):
            <Inputs  fct={ClickChange} />

            }
        </View>
    );

    
}

const StyleButton = StyleSheet.create({
    container:{
       marginTop:50,
        width:'100%',
        padding:70,
        justifyContent:'center',
    },
    button:{
        backgroundColor:'#1a2e35',
        borderRadius:20,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        margin:40,
      
    },
    text:{
        color:'#ededed',
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    });
    

export default Fles;


