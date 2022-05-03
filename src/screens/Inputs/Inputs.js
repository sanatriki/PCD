import React, {useState} from 'react';
import { View,TextInput,Text,StyleSheet,Pressable } from 'react-native';



const isValidField = (obj)=>{
    return Object.values(obj).every(value => value.trim())
}


const updateError =(error,stateUpdate)=>{
    stateUpdate(error);
    setTimeout(()=> {
        stateUpdate('')
    }, 2500)
}

const Inputs = ({fct, child}) => {
     
    const [UserInfo,setUserInfo]=useState({
        name:'',
        Email:'',
        Password:'',
        ConfirmPassword:'',
    
    })
    
    const [error,seterror]=useState('')
    const {name,Email,Password,ConfirmPassword}= UserInfo;
     const handleOnchangeText=(value,nom)=>{
         setUserInfo({ ...UserInfo, [nom] : value });
    
    };

    const isValid =()=>{
        if(!isValidField(UserInfo)) return updateError('Required all fields',seterror);
        if(!name.trim() || name.length < 3) return updateError('Invalid name',seterror);
        if (!Password.trim() || Password.length < 8) return updateError('Password is less then 8 characters!', seterror);
        return true;
    
    };
  
    return (
        <View style={StyleInput.container} >
            
                <Text style={StyleInput.text} >Name</Text>
                     <TextInput
                
                     placeholder='Name'
                     style={StyleInput.input}
                     maxLength={40}
                     value={name}
                     onChangeText ={(value)=> handleOnchangeText(value,'name')}
                     />
                <Text style={StyleInput.text} >Password</Text>
                    <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    style={StyleInput.input}
                    maxLength={40}
                    value={Password}
                     onChangeText ={(value)=> handleOnchangeText(value,'Password')}
                    />
              <View style={StyleInput.ct} >
                    
                     <Pressable style={StyleInput.button} 
                      onPress={()=>{if(isValid()){child()}}}>
                        
                        <Text style={StyleInput.textbutton} >submit</Text>
                     </Pressable>
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
        fontWeight: '500',
        textTransform: 'uppercase',
    },

});


export default Inputs;