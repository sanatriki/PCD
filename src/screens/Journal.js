import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from 'react-navigation';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
import BackIcon from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';

const Journal = ({ navigation }) => {
    const { colors } = useTheme();

    const theme = useTheme();

    //Emojis
    const [rating, setRating] = useState(3)
    const getRatingEmoji = () => {
        if (rating === 2) {
            return <Image source={require('../images/extrêmeSévére.png')} style={{ width: 50, height: 50 }} />
        } else if (rating === 3) {
            return <Image source={require('../images/sévére.png')} style={{ width: 50, height: 50 }} />
        } else if (rating === 4) {
            return <Image source={require('../images/modéré.png')} style={{ width: 50, height: 50 }} />
        } else if (rating === 5) {
            return <Image source={require('../images/légère.png')} style={{ width: 50, height: 50 }} />
        } else if (rating === 6) {
            return <Image source={require('../images/normal.png')} style={{ width: 50, height: 50 }} />
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/*LOGO */}
                <Animatable.View animation='bounceIn'>
                    <BackIcon style={styles.Icon} name="arrow-left" size={30} color={"#1a2e35"} onPress={() => {
                        navigation.goBack();
                    }} />
                    <Image style={styles.logo} source={require('../images/Mylogo1.png')} />
                    <Text style={styles.title}>HealMe!</Text>
                </Animatable.View>

                {/*BIENVENU */}
                <View style={styles.welcome}>
                    <Text style={styles.heading}>Bienvenu dans ton Journal,</Text>
                    <Text style={styles.userHeading}>User!</Text>
                    <Text style={styles.subHeading}>Nous sommes impatients de commencer ce parcours avec toi!</Text>
                </View>

                <View style={styles.container1}>
                    <StatusBar barStyle={theme.dark ? 'Light-content' : 'dark-content'} />
                    <View style={styles.sliderContainer}>
                        <Swiper autoplay height={200} activeDotColor="#ff4f5a">
                            <View style={styles.slide}>
                                <Image
                                    source={require('../images/3.png')}
                                    resizeMode='cover'
                                    style={styles.slideImage}
                                />
                            </View>
                            <View style={styles.slide}>
                                <Image
                                    source={require('../images/1.png')}
                                    resizeMode='cover'
                                    style={styles.slideImage}
                                />
                            </View>
                            <View style={styles.slide}>
                                <Image
                                    source={require('../images/4.png')}
                                    resizeMode='cover'
                                    style={styles.slideImage}
                                />
                            </View>
                            <View style={styles.slide}>
                                <Image
                                    source={require('../images/2.png')}
                                    resizeMode='cover'
                                    style={styles.slideImage}
                                />
                            </View>
                            <View style={styles.slide}>
                                <Image
                                    source={require('../images/5.png')}
                                    resizeMode='cover'
                                    style={styles.slideImage}
                                />
                            </View>
                            <View style={styles.slide}>
                                <Image
                                    source={require('../images/6.png')}
                                    resizeMode='cover'
                                    style={styles.slideImage}
                                />
                            </View>
                        </Swiper>
                    </View>
                </View>

                {/*QUOTE */}
                <View style={styles.quoteContainer}>
                    <Text style={styles.quoteText}>Citation du jour</Text>
                    <View style={styles.quote}>
                        <Text style={{ fontSize: 17 }}>Rêve ta vie en couleur, c'est le secret du bonheur!</Text>
                    </View>
                </View>

                {/*CHOOSE MOOD */}
                <View style={styles.mood}>
                    <Text style={styles.moodText}>Comment tu te sens aujourd'hui?</Text>
                    <Slider style={styles.slider}
                        minimumValue={1}
                        maximumValue={6}
                        step={1}
                        onValueChange={setRating}
                        minimumTrackTintColor='#ff4f5a'
                        thumbTintColor='#ffaaaf'
                    />
                    <Text>{getRatingEmoji()}</Text>
                </View>

                {/* RECOMMANDATION */}
                <View style={styles.recommandImgWrapper}>
                    <Text style={styles.recommandTitle}>Recommandations pour votre quotidien</Text>
                    <ScrollView horizontal>
                            <View style={[styles.recommandImgWrapper]}>
                                <Image source={require('../ressourcesImg/3-kifs-par-jour.jpg')} style={styles.ImgRecommand} />
                                <Text style={styles.titleBook}>3 Kifs par jour</Text>
                            </View>
                            <View style={[styles.recommandImgWrapper]}>
                                <Image source={require('../ressourcesImg/petit-chahier.jpg')} style={styles.ImgRecommand}/>
                                <Text style={styles.titleBook}>Rester zen</Text>
                            </View>
                            <View style={[styles.recommandImgWrapper]}>
                                <Image source={require('../ressourcesImg/mediter.jpg')} style={styles.ImgRecommand} />
                                <Text style={styles.titleBook}>Méditer</Text>
                            </View>
                    </ScrollView>
                </View>

            </ScrollView>
        </SafeAreaView>

    )


};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        padding: 15,
        //backgroundColor: '#FFE4B5'
        backgroundColor: '#ffffff'
        //justifyContent: 'center',
    },
    container1: {
        display: 'flex',
        flex: 2,
    },
    Icon: {
        marginLeft: 15,
        marginTop: 25
    },
    welcome: {
        //backgroundColor: '#1a2e35',
        //borderRadius: 20,
        //width: '90%',
        alignSelf: 'center',
        paddingBottom: 10
    },
    logo: {
        alignSelf: 'center',
        //marginTop: 30,
        width: 50,
        height: 50
    },
    title: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'HelveticaNeue',
    },
    heading: {
        fontFamily: 'HelveticaNeue',
        marginTop: 15,
        fontSize: 28,
        fontWeight: '500',
        paddingLeft: 10,
        color: '#385a64'
    },
    subHeading: {
        fontFamily: 'HelveticaNeue',
        fontSize: 18,
        fontWeight: '300',
        marginTop: 8,
        paddingLeft: 10,
    },
    userHeading: {
        fontFamily: 'HelveticaNeue',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 8,
        paddingLeft: 10,
        alignSelf: 'center',
        color: '#385a64'
    },
    //slide images
    slide: {
        paddingTop: 5
    },
    slideImage: {
        width: 200, height: 200, alignSelf: 'center'
    },
    //Quotes
    quoteContainer: {
        padding: 10,
        paddingTop: 15,
    },
    quoteText: {
        marginRight: 15,
        fontSize: 18,
        alignSelf: 'flex-end',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontFamily: 'HelveticaNeue',

    },
    quote: {
        padding: 10,
        width: Dimensions.get('screen').width - 50,
        alignItems: 'center',
        margin: 10,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#ffaaaf',
        borderTopRightRadius: 0,
    },
    //Emojis
    mood: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    slider: {
        width: 200,
        height: 70
    },
    moodText: {
        marginRight: 15,
        fontSize: 18,
        alignSelf: 'flex-start',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingLeft: 15,
        fontFamily: 'HelveticaNeue',

    },
    //Recommmandation
    recommandTitle: {
        marginRight: 15,
        fontSize: 18,
        alignSelf: 'flex-end',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'HelveticaNeue',

    },
    /*recommandCard: {
        width: 500,
        borderRadius:20,
        marginRight:15,
        marginLeft:15
        //width: Dimensions.get('window').width /3
    },*/
    ImgRecommand: {
    width:130,
     height:130,
      marginRight: 20, 
      backgroundColor: '#1a2e35', 
      borderRadius:10
    },
    titleBook : {
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontWeight: '500',
        alignSelf:'center',
        maxWidth:'80%'
    }
})
export default Journal;