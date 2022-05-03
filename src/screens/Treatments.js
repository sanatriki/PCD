import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions, ScrollView } from 'react-native'
import {createTheme} from '@material-ui/core/styles'
import niceColors from 'nice-color-palettes'

const colors = [
    ...niceColors[1].slice(1,niceColors[1].length),
    ...niceColors[55].slice(0,3),
];


const theme = createTheme({
    spacing: 4,
    //height:
  });

  const { width, height } = Dimensions.get('window');

  export const ITEM_HEIGHT = height * 0.18

  export const maladies = [
    {
        id: 1,
        title:'Stresse',
        subtitle:'Cliquez pour se renseigner sur les traitements du Stresse',
        image : require('../images/stresse1.png'),
    },
    {
        id:2,
        title: 'Anxieté',
        subtitle:'Cliquez pour se renseigner sur les traitements de l’Anxieté',
        image: require('../images/anxiete1.png')
    },
    {
        id: 3,
        title: 'Dépression',
        subtitle:'Cliquez pour se renseigner sur les traitements de la Dépression',
        image: require('../images/dépression1.png'),

    }
  ]

export default class Treatments extends React.Component {

    navigationByCondition = item => {
        const {navigation} = this.props;
    
        if (item.title === 'Stresse') {
          navigation.navigate('TraitementStresse');
        } else if (item.title === 'Anxieté') {
          navigation.navigate('TraitementAnxieté');
        } else if (item.title === 'Dépression') {
            navigation.navigate('TraitementDépression');
        }
      };

      render () {
    return (
        <SafeAreaView style={{ flex: 2 }}>
            <ScrollView horizontal={false}>
            {/* Affichage de la photo Traitements*/}
            <TouchableOpacity >
                    <Image source={require('../images/DoctorTraitement1.png')} style={{ width: 300, height: 300, alignSelf: 'center', borderRadius: 5 }} />
                    <Text style={styles.title}>Bienvenu dans la page de traitements</Text>
                    <Text style={styles.miniTitle}>Vous allez trouver ici les étapes à suivre pour jouir d'un résultat épanouissant pour améliorer votre état mentale.</Text>
                </TouchableOpacity>

            {/* Affichage du bilan*/}
                <SafeAreaView style={{ flex: 3 }} >
                    <FlatList
                        data={maladies}
                        keyExtractor={item => item.key}
                        contentContainerStyle={{ padding: theme.spacing(2) }}
                        renderItem={({ item }) => {
                            return <TouchableOpacity 
                            onPress={this.navigationByCondition(item)}
                                style={{ marginBottom: theme.spacing(2), height: ITEM_HEIGHT }}>
                                <View style={{ flex: 1, padding: theme.spacing(2) }}>
                                    <View style={[StyleSheet.absoluteFillObject, { backgroundColor: colors[item.id % colors.length - 1], borderRadius: 16 }]} />
                                    <Text style={styles.name}>{item.title}</Text>
                                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                                    {/*<Text style={styles.jobTtile}>{item.jobTitle}</Text>*/}
                                    <Image style={styles.image} source={item.image} />
                                </View>
                            </TouchableOpacity>

                        }}
                    />
                    <View style={styles.bg} />
                </SafeAreaView>

            </ScrollView>
        </SafeAreaView>
    );
}
}

export const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        paddingTop: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#385a64'
    },
    miniTitle: {
        fontSize: 16,
        paddingTop: 10,
        alignSelf: 'center',
        maxWidth: '70%',
        color: '#1a2e35'
    },
    name: {
        fontWeight: '700',
        fontSize: 25,
        marginTop: 20,
        paddingLeft: 20

    },
    subtitle: {
        fontWeight: '200',
        fontSize: 18,
        marginTop: 10,
        paddingLeft: 20,
        maxWidth: '75%'

    },
    image: {
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        //width: 200,
        //height: 200,
        //width : width * 0.18,
        //height: height * 0.18,
        resizeMode: 'contain',
        position: 'absolute',
        //bottom: 0,
        right: theme.spacing(2)
    },
    bg: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'red',
        transform: [{ translateY: height }],
        borderRadius: 32,

    }

})