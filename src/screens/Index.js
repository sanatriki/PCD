/*import React from 'react';
import {SafeAreaView, Text} from 'react-native';
const Index = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default Index;*/

import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView} from 'react-native';
//import styles from './styles';
import Fles from './Inputs/Fles'

const Index = ({ navigation }) => {

  const joujou = () => {
    navigation.replace('Welcome')
  };
  
  return (
    <ScrollView>
      <View style={styles.login} >

        <View style={styles.titles} >
          <Image
            source={require('../images/Mylogo1.png')}
            style={styles.img}>
          </Image>
          <Text style={{color: '#1a2e35',fontSize: 25, marginTop:25, alignSelf: 'center', fontFamily: 'HelveticaNeue',fontWeight: 'bold'}}>HealMe!</Text>

        </View>
        <Fles sonson={joujou} />


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  titles: {
    marginTop: '40%',
    alignItems: 'center',
    width: '100%',


  },
  img:{
    width: 100,
    height: 100
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#1a2e35',

  },
  subtitle: {
    fontSize: 20,
    color: '#385a64'

  },
  login: {
    width: '100%',
    height: '100%',

  },
});

export default Index;