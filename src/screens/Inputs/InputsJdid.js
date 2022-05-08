import React ,{useState} from 'react';
import { View,TextInput,Text,StyleSheet,Pressable, ScrollView } from 'react-native';


const isValidField = (obj)=>{
    return Object.values(obj).every(value => value.trim())
}

const updateError =(error,stateUpdate)=>{
    stateUpdate(error);
    setTimeout(()=> {
        stateUpdate('')
    }, 2500)
}

const InputsJdid = ({fct, child}) => {
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


    const isValidEmail = value => {
        const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return regx.test(value);
      };


    const isValid =()=>{
        if(!isValidField(UserInfo)) return updateError('Required all fields',seterror);
        if(!name.trim() || name.length < 3) return updateError('Invalid name',seterror);
        if (!isValidEmail(Email)) return updateError('Invalid email!', seterror);
        if (!Password.trim() || Password.length < 8) return updateError('Password is less then 8 characters!', seterror);
        if (Password !== ConfirmPassword) return updateError('Password does not match!', seterror);
        return true;

    };

    const press =()=>{
        if(isValid()){
            //submit
            console.log(UserInfo)
        }

    };
    return (
        <ScrollView>
        <View style={StyleInput.container} >
            {error? <Text style={StyleInput.error}  >
                {error}
                </Text>:null}
            
                <Text style={StyleInput.text} >Pseudo</Text>
                     <TextInput
                
                     placeholder='Name'
                     style={StyleInput.input}
                     maxLength={40}
                     value={name}
                     onChangeText ={(value)=> handleOnchangeText(value,'name')}
                     
                     />
                <Text style={StyleInput.text} >Email</Text>
                    <TextInput
                    placeholder='Email'
                   
                    style={StyleInput.input}
                    maxLength={40}
                    value={Email}
                    onChangeText ={(value)=> handleOnchangeText(value,'Email')}


                    />
                <Text style={StyleInput.text} >Mot de passe</Text>
                     <TextInput
                     secureTextEntry={true}
                     placeholder='Name'
                     style={StyleInput.input}
                     maxLength={40}
                     value={Password}
                     onChangeText ={(value)=> handleOnchangeText(value,'Password')}
                     />
                <Text style={StyleInput.text} >Confirmer mot de passe</Text>
                     <TextInput
                      secureTextEntry={true}
                     placeholder='Name'
                     style={StyleInput.input}
                     maxLength={40}
                     value={ConfirmPassword}
                     onChangeText ={(value)=> handleOnchangeText(value,'ConfirmPassword')}
                     />
              <View style={StyleInput.ct} >
                    
                     <Pressable 
                     onPress={()=>{if(isValid()){child()}}}
                     style={StyleInput.button} >
                         
                           
                        <Text style={StyleInput.textbutton} >Valider</Text>
                     </Pressable>
              </View> 
              <View style={StyleInput.ct} >
                    
                    <Pressable 
                    onPress={()=>{fct()}}
                    style={StyleInput.button} >
                        
                          
                       <Text style={StyleInput.textbutton} >Retour</Text>
                    </Pressable>
             </View> 
            
           
        </View>
        </ScrollView>
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

        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: "#1a2e35",
        fontWeight:'400',
        fontFamily: 'HelveticaNeue'
       
         
         
      },
    
    ct:{
        
        paddingLeft:50,
        paddingTop:20,
        width:'80%',
       
    },

    
     
      button:{
          
        backgroundColor:'#385a64',
        borderRadius:10,
        height:40,
        justifyContent:'center',
        alignItems:'center',
      
    },

    textbutton:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'HelveticaNeue'
    },
    error:{
        justifyContent:'center',
        textAlign:'center',
        fontSize: 20 ,
         color:"#1a2e35",
         padding:10,
         fontFamily: 'HelveticaNeue'
        

    },

});




export default InputsJdid;