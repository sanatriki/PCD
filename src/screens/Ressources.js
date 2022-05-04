import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import niceColors from 'nice-color-palettes'
import { createTheme } from '@material-ui/core/styles'
import { SafeAreaView } from 'react-native-safe-area-context';

/*const theme = createTheme({
    spacing: 4,
    //height:
});*/

const TreatmentsType = [
    //Books
    {
        id: 1,
        image: require('../images/2.png'),
        title: 'Livres'
    },
    //Music
    {
        id: 2,
        image: require('../images/4.png'),
        title: 'Musiques'
    },
    //Positive activities
    {
        id: 3,
        image: require('../images/1.png'),
        title: 'Activités'
    },
    //Vidéos
    {
        id: 4,
        image: require('../images/6.png'),
        title: 'Vidéos'
    }
]

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
        <Image source={item.image} style={{ width: 100, height: 100, resizeMode: 'contain', position: 'absolute', alignSelf: 'flex-end' }} />
    </TouchableOpacity>
);


const Ressources = ({ navigation }) => {

    const [selectedId, setSelectedId] = useState(null);

    //fonction qui change les couleurs
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#1a2e35" : "#ffaaaf";
        const color = item.id === selectedId ? 'white' : 'black';

        const onpress = () => {
            setSelectedId(item.id); 

            if (item.id===1){
            navigation.navigate('RessourcesLivres')
        } else if (item.id===2){
            navigation.navigate('RessourcesMusic')
        } else if (item.id===3){
            navigation.navigate('RessourcesActivities')
        } else if (item.id===4){
            navigation.navigate('RessourcesVideos')
        } 
          };

        return (
            <Item
                item={item}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
                onPress={onpress}
                //onPress={() =>navigation.navigate('ResultQuizz') }
                //onPress={() => setSelectedId(item.id)}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
                <FlatList
                    data={TreatmentsType}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    renderItem={renderItem}
                    /*renderItem={({item}) => {
                        return <TouchableOpacity onPress={() =>navigation.navigate('Settings', {item})}></TouchableOpacity>
                    }}*/

                />
        </SafeAreaView>
    );


    /*const list = () => {
        
        return TreatmentsType.map((element) => {
            return (
              <View key={element.key} style={{margin: 100}}>
                <Text style={{alignSelf:'flex-start', }}>{element.title}</Text>
                <Image source={element.image} style={{width: 300, height:300, marginTop:20}}/>
              </View>
            );
          });
        };

    return (
        <SafeAreaView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text onPress={() => navigation.navigate('Home')} style={{ fontSize: 26, fontWeight: 'bold' }}>Treatments Screen</Text>
                <View style={{marginTop:20}}>{list()}</View>
            </View>
        </SafeAreaView>
    )*/



    /*<FlatList
            data={TreatmentsType}
            keyExtractor = { item => item.key}
            contentContainerStyle={{ padding:theme.spacing(2)}}
            renderItem={({item}) => {
                return <TouchableOpacity onPress={() => {
                    navigation.navigate('SalonListDetails', {item});
                }} 
                style={{marginBottom: theme.spacing(2), height: ITEM_HEIGHT}}>
                    <View style={{flex: 1, padding: theme.spacing(2)}}>
                        <View  style = {[StyleSheet.absoluteFillObject, {backgroundColor: item.color, borderRadius: 16}]}/>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.jobTtile}>{item.jobTitle}</Text>
                        <Image source={item.image} style={styles.image}/> 
                    </View>
                </TouchableOpacity>
            }}
        />*/

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 40,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20
    },
    title: {
        fontSize: 30,
    },
});

export default Ressources

