import React from 'react';
import { View,TextInput,Text,StyleSheet,Pressable, TouchableOpacity } from 'react-native';
//import StyleInput from './StyleInput';
const Translate = ({fct,name, zizou}) => {
     
  
    return (
        <View style={StyleInput.container} >
            
                <Text style={StyleInput.text} >{name}</Text>
                     <TextInput
                
                     placeholder='Name'
                     style={StyleInput.input}
                     maxLength={40}/>
                <Text style={StyleInput.text} >Password</Text>
                    <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    style={StyleInput.input}
                    maxLength={40}/>
              <View style={StyleInput.ct} >
                    
                     <TouchableOpacity style={StyleInput.button} onPress={zizou} >
                            <Text style={StyleInput.textbutton} >submit</Text>
                     </TouchableOpacity>
              </View> 
              <View style={StyleInput.ct} >
                    
                    <Pressable 
                    onPress={()=>{fct()}}
                    style={StyleInput.button} >
                       <Text style={StyleInput.textbutton} >Back</Text>
                    </Pressable>
             </View> 
            
           
        </View>
    );
}

const StyleInput = StyleSheet.create({
    container: {
        width:'100%',
        justifyContent:'center',
    
     },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        borderColor:"#1a2e35",
      },

     

      text: {

         alignItems:'center',
         justifyContent:'center',
         fontSize: 15 ,
         color:"#1a2e35",
         fontFamily: 'HelveticaNeue',
         fontWeight: 'bold'
         
         
      },
    
    ct:{
        paddingLeft:50,
        paddingTop:20,
        width:'80%'
    },

      button:{
          
        backgroundColor:'#1a2e35',
        borderRadius:10,
        height:40,
        justifyContent:'center',
        alignItems:'center',
      
    },

    textbutton:{
        color:'#fff',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'HelveticaNeue'
    },

});

export default Translate;