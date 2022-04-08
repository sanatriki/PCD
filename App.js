import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
//import { createStackNavigator} from 'react-navigation-stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import Splash from './src/screens/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();

const App = () => {
  /*const [isAppFirstLaunched, setisAppFirstLaunched] = React.useState(null);
  React.useEffect(async() => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if(appData == null) {
        setisAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      }else {
        setisAppFirstLaunched(false);
      }
  }, []);*/
  return (
    //isAppFirstLaunched != null && (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
        {/*{isAppFirstLaunched && (*/}<Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/> 
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    //)
    
  );
};

export default App;


/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/