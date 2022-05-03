//page après Onboarding
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'

const topics = [
    {
        id: 1,
        title: 'Réduire le stress',
        image: require('../images/stresse1.png'),
    },
    {
        id: 2,
        title: 'Augemnter la productivité',
        image: require('../images/productivité.png'),
    },
    {
        id: 3,
        title: 'Être heureux',
        image: require('../images/1.png'),
    },
    {
        id: 4,
        title: 'Reduire l`anxieté',
        image: require('../images/anxiete1.png'),
    },
    {
        id: 5,
        title: 'Dormir mieux',
        image: require('../images/dépression1.png'),
    },
    {
        id: 6,
        title: 'Développement personnel',
        image: require('../images/5.png'),
    }
]

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
        <Image source={item.image} style={{ width: 100, height: 100, resizeMode: 'contain', position: 'absolute', alignSelf: 'flex-end' }} />
    </TouchableOpacity>
);

const ChooseTopic2 = ({ navigation }) => {

    const [selectedId, setSelectedId] = useState(null);

    //fonction qui change les couleurs
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#385a64" : "#ffaaaf";
        const color = item.id === selectedId ? 'white' : 'black';

        const onpress = () => {
            setSelectedId(item.id);
            // ICI ON VA CHOISIR navigate.RessourcesLivres, navigate.RessourcesMusiques, navigate.RessourcesActivités ou navigate.RessourcesVidéos
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
            <ScrollView horizontal={false}>
                <View style={styles.container}>
                    <View style={styles.headingWrapper}>
                        <Text style={styles.heading}>Pourquoi êtes vous sur TrackMe ?</Text>
                        <Text style={styles.subHeading}>Choisissez la catégorie que vous souhaitez améliorer:</Text>
                    </View>
                    <FlatList
                        data={topics}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                        renderItem={renderItem}
                    /*renderItem={({item}) => {
                        return <TouchableOpacity onPress={() =>navigation.navigate('Settings', {item})}></TouchableOpacity>
                    }}*/

                    />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', width: '50%', backgroundColor: '#385a64', height: 40, marginBottom: 25, marginTop: 30, borderRadius: 10 }}
                        onPress={() => navigation.navigate("Quizz")}>
                        <Text style={{ fontSize: 15, letterSpacing: 1.5, textAlign: 'center', position: 'relative', fontWeight: 'bold', color: '#ededed' }} >C'est parti!</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    headingWrapper: {
        marginTop: 60,
        paddingLeft: 10
    },
    heading: {
        fontFamily: 'HelveticaNeue',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#1a2e35',
        paddingLeft: 10,
    },
    subHeading: {
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        marginTop: 15,
        paddingLeft: 10,
        paddingTop:10,
        marginBottom: 10
    },
    scrollViewWrapper: {
        justifyContent: 'space-between',
        marginTop: 30,

    },
    item: {
        padding: 40,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20
    },
    title: {
        fontSize: 18,
    },
});


export default ChooseTopic2