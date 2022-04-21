import React from 'react';
import { Button, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splash extends React.Component {


  componentDidMount() {
    this.animation.play();
    this.timeoutHandle = setTimeout(()=>{
      this.props.navigation.replace('OnboardingScreen')
  },10000)
  }
      // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);


  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 270,
            height: 270,
            backgroundColor: '#1a2e35',
          }}
          source={require('../images/black.json') }
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
            {/*<View style={styles.buttonContainer}>
          <Button title="TrackMe" onPress={this.resetAnimation} style={styles.button} />
        </View>*/}
            <TouchableOpacity >
          <Text onPress={this.resetAnimation} style={styles.title}>TrackMe</Text>
        </TouchableOpacity>
        <Text style={{fontSize:15,color:'#ffffff', paddingTop: 10, maxWidth: '70%', alignSelf:'center', paddingTop: 5}}>Un journal Thérapeutique guidé pour changer ta vie.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#1a2e35',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  button : {
    color: '#ffffff'
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    paddingBottom: 50,
    alignSelf:'center',
  }
});

/*import { StyleSheet, Text, View, StatusBar,Image, Animated  } from 'react-native'
import React, {Component} from 'react'
import LottieView from 'lottie-react-native';
//import { Colors } from '../constants/Colors'
//import { Colors } from '../../src/constants

export default class Splash extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <View style= {{flex:1, backgroundColor:'#ffffff'}}>
      <LottieView source={require('../images/splash.json')} autoPlay loop />
      </View>
    )

  }
}*/

/**/

/*const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.replace('OnboardingScreen')
    },5000)
  return (
    <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#1a2e35'}} >
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#ededed" />
        <Image source={require('../images/Mylogo.png')} style={{width:70,height:70, resizeMode : 'contain'}}/>
        <LottieView  source={require('../images/splash.json')} autoPlay loop/>
        <Text style={{fontWeight:'bold',fontSize:33,color:'#385a64', paddingTop: 10}}>TrackMe</Text>
      <Text style={{fontSize:20,color:'#1a2e35', paddingTop: 10, maxWidth: '70%', alignSelf:'center', lineHeight: 23,}}>Un journal Thérapeutique guidé pour changer ta vie.</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})
*/