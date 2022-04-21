//page après Onboarding
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, {useState} from 'react'

const topics = [
    {
        id: 1,
        title: 'Réduire stress',
        image: require('../images/stress.jpg'),
    },
    {
        id: 2,
        title: 'Productivité',
        image: require('../images/performance.png'),
    },
    {
        id: 3,
        title: 'Être heureux',
        image: require('../images/happiness.png'),
    },
    {
        id: 4,
        title: 'Reduire anxieté',
        image: require('../images/anxiety.jpg'),
    },
    {
        id: 5,
        title: 'Dormir mieux',
        image: require('../images/insomnia.jpg'),
    },
    {
        id: 6,
        title: 'Développement',
        image: require('../images/selfgrowth.png'),
    }
]

const pressHandler = (id,image) =>{
    console.log(id);
    <Image style={styles.onClickImage} source={image}/>

}

const ChooseTopic = ({navigation}) => {

    //const [imagePressed, setImagePressed] = useState(0)

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.headingWrapper}>
                <Text style={styles.heading}>Pourquoi êtes vous sur TrackMe ?</Text>
                <Text style={styles.subHeading}>Choisi les catégories que tu souhaite améliorer:</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
                <View style={styles.row}>
                    <View>
                        {topics.map((item, index) => {
                            if (index % 2 == 0) {
                                return (
                                    <View style={styles.card}>
                                    {/*<Pressable onPress={() => {setImagePressed()}} style={({pressed}) => [ {
                                        borderColor: pressed ? '#385a64' : '#ff4f5a'},
                                        {opacity: pressed ? 0.5 : 1 }, 
                                        styles.onClickImage]}>*/}
                                     <TouchableOpacity onPress={() => pressHandler(item.image)}>
                                    <Image style={styles.topicImage} source={item.image} />
                                    <Text style={styles.label}>{item.title}</Text>
                                     </TouchableOpacity>
                                     {/*</Pressable>*/}
                                </View>
                                )
                            }
                        })}
                    </View>
                    <View style={{ flex: 1 }}>
                        {topics.map((item, index) => {
                            if (index % 2 != 0) {
                                return (
                                    <View style={styles.card}>
                                    {/*<Pressable onPress={() => {setImagePressed()}} style={({pressed}) => [ {
                                        borderColor: pressed ? '#385a64' : '#ff4f5a'},
                                        {opacity: pressed ? 0.5 : 1 }, 
                                        styles.onClickImage]}>*/}
                                    <TouchableOpacity onPress={() => pressHandler(item.id, item.image)}>
                                    <Image style={styles.topicImage} source={item.image} />
                                    <Text style={styles.label}>{item.title}</Text>
                                     </TouchableOpacity>
                                     {/*</Pressable>*/}
                                </View>
                                )
                            }
                        })}
                    </View>
                </View>
            </ScrollView>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={{ justifyContent: 'center', width: '70%', backgroundColor: '#385a64', height: 40, marginBottom: 5, marginTop: 10, borderRadius: 10 }}
                    onPress={()=>navigation.navigate("Quizz")}>
                    <Text style={{ fontSize: 15, letterSpacing: 1.5, textAlign: 'center', position: 'relative', fontWeight: 'bold', color: '#ededed' }} >C'est parti!</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 10
    },
    headingWrapper: {
        marginTop: 60,
    },
    heading: {
        fontFamily: 'HelveticaNeue',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#1a2e35'
    },
    subHeading: {
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        marginTop: 15,
    },
    scrollViewWrapper: {
        justifyContent: 'space-between',
        marginTop: 30,

    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemContainer: {

    },
    label: {
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        fontWeight: 'bold',
        color: '#1a2e35',
        flexWrap: 'wrap',
        alignSelf: 'center',
        paddingTop:5
    },
    topicImage: {
        alignSelf: 'center',
        width: 190,
        height: 190,
        borderRadius: 10,
        borderColor: '#385a64',
        borderWidth: 3,
    },
    onClickImage: {
        alignSelf: 'center',
        width: 190,
        height: 190,
        borderRadius: 10,
        borderColor: '#1a2e35',
        borderWidth: 3,
        opacity: 0.5
    },
    card: {
        padding: 10,
        margin: -2,
        paddingRight: 5,
        flex: 1,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
})
export default ChooseTopic;