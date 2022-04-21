import  React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Journal from './Journal'
import Settings from './Settings'
import Treatments from './Treatments'
import Profile from './Profile'

//Screen names
const JournalName = "Acceuil";
const TreatmentsName = "Traitements";
const SettingsName = "Paramétres";
const ProfileName= "Profile";

const Tab = createBottomTabNavigator();

 const MainContainer = ({navigation}) =>{
    return(
            <Tab.Navigator 
            
            //initialRouteName={JournalName}
            screenOptions={({route}) => ({
                tabBarActiveTintColor:'#ff4f5a',
                tabBarInactiveTintColor:'grey',
                tabBarLabelStyle:{paddingBottom: 10, fontSize: 10},
                tabBarStyle:{padding: 10, height: 70},
                
                tabBarIcon : ({focused, color, size}) => {
                     let iconName;
                     let rn= route.name;
                    
                    if (rn === JournalName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn ===TreatmentsName) {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (rn ===SettingsName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (rn ===ProfileName) {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return <Ionicons name= {iconName} size= {size} color={color}/>
                },
            })}
            /*tabBarOptions={{
                actionTintColor: '#385a64', 
                inactiveTintColor: 'grey',
                labelStyle: {paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70},
                
            }}*/
            >

            <Tab.Screen name={JournalName} component={Journal} />
            <Tab.Screen name={TreatmentsName} component={Treatments} />
            <Tab.Screen name={ProfileName} component={Profile} />
            <Tab.Screen name={SettingsName} component={Settings} />

            </Tab.Navigator>
    )

}

const styles= StyleSheet.create({
    text: {
        flex: 1,
        display: 'flex',
        alignSelf: 'center', 
        marginTop:20

    }
})

export default MainContainer