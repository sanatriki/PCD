import React from 'react';
import { View,StyleSheet,Image,TouchableOpacity } from 'react-native';

function Choix({item,fonc}) {
    return (
        <View style={Styles.main} >
        <TouchableOpacity onPress={fonc} >
            <Image 
          source={item}
          style={Styles.tas}
          />
        
        </TouchableOpacity>

        </View>
    ); 
}

export default Choix;
const Styles=StyleSheet.create({
main:{
    width:'25%',
    height:'50%',
    padding:18, 
  

},
tas:{
    width:70,
    height:70,

},

})