import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
//import { createStackNavigator} from 'react-navigation-stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import Index from './src/screens/Index';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/Welcome';
import ChooseTopic2 from './src/screens/ChooseTopic2';
import Quizz from './src/screens/Quizz';
import SplashAfterQuizz from './src/screens/SplashAfterQuizz';
import ResultQuizz from './src/screens/ResultQuizz';
import SalonListDetails from './src/screens/SalonListDetails';
import MainContainer from './src/screens/MainContainer';
import RessourcesLivres from './src/screens/RessourcesLivres';
import RessourcesMusic from './src/screens/RessourcesMusic';
import RessourcesActivities from './src/screens/RessourcesActivities';
import RessourcesVideos from './src/screens/RessourcesVideos';
import TraitementStresse from './src/screens/TraitementStresse';
import TraitementAnxieté from './src/screens/TraitementAnxieté';
import TraitementDépression from './src/screens/TraitementDépression';
import Journal from './src/screens/Journal';
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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        {/*{isAppFirstLaunched && (*/}<Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="ChooseTopic2" component={ChooseTopic2} />
        <Stack.Screen name="Quizz" component={Quizz} />
        <Stack.Screen name="SplashAfterQuizz" component={SplashAfterQuizz} />
        <Stack.Screen name="ResultQuizz" component={ResultQuizz} />
        <Stack.Screen name="SalonListDetails" component={SalonListDetails} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="RessourcesLivres" component={RessourcesLivres} />
        <Stack.Screen name="RessourcesMusic" component={RessourcesMusic} />
        <Stack.Screen name="RessourcesActivities" component={RessourcesActivities} />
        <Stack.Screen name="RessourcesVideos" component={RessourcesVideos} />
        <Stack.Screen name="TraitementStresse" component={TraitementStresse} />
        <Stack.Screen name="TraitementAnxieté" component={TraitementAnxieté} />
        <Stack.Screen name="TraitementDépression" component={TraitementDépression} />
        {/*<Stack.Screen name="Journal" component={Journal}/>*/}
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