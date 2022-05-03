import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#fff', white: '#385a64' };

const slides = [
  {
    id: '1',
    image: require('../images/slide1.png'),
    title: 'Soufflez, respirez et prennez de la hauteur.',
    subtitle: 'Trouvez les choses qui vous coupent le souffle.',
  },
  {
    id: '2',
    image: require('../images/slide2.png'),
    title: 'Sortez de votre zone de confort',
    subtitle: 'Faites preuve d’ouverture d’esprit, changez vos habitudes quotidiennes, faites-vous du bien.',
  },
  {
    id: '3',
    image: require('../images/5.png'),
    title: 'Faites votre choix aujourd’hui.',
    subtitle: 'Pensez positif, agissez avec optimisme et soyez heureux',
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={item?.image} style={{ height: '70%', width}} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};
const OnboardingScreen = ({ navigation }) => {

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null); //goNextSlide

  const Footer = () => {
    return (

      <View style={{
        height: height * 0.15,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 1,
        }}>
          {slides.map((_, index) => (
            <View key={index} style={[styles.indicator, currentSlideIndex == index && {
              backgroundColor: COLORS.white,
              width: 30
            }]} />
          ))}
        </View>

        <View style={{ marginBottom: 20 }}>
        {
          currentSlideIndex == slides.length - 1 ? <View style = {{height:50}}>
        <TouchableOpacity style={[styles.btn]} onPress={() => navigation.replace('Index')}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, color:'#ffffff' }}>COMMENCER</Text>
            </TouchableOpacity>
        </View> :
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={skip} style={[styles.btn, { backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORS.white }]}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }}>PASSER</Text>
            </TouchableOpacity>  
            <View style={{ width: 15 }} />
            <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, color:'#ffffff' }}>NEXT</Text>
            </TouchableOpacity>
          </View>
        }


        </View>
      </View>

    );
  };

  //scroll
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  }

  //boutton NEXT
  const goNextSlide = () => {
      const nextSlideIndex = currentSlideIndex + 1 ;
      if(nextSlideIndex != slides.length) {
        const offset = nextSlideIndex * width;
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(nextSlideIndex);
      }
  };

  //boutton SKIP
    const skip = () =>{
      const lastSlideIndex = slides.length - 1;
      const offset = lastSlideIndex * width ;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(lastSlideIndex);


    }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
      ref={ref}
      onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        contentContainerStyle={{ height: height * 0.8 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => <Slide key={item} item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

//css
const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    maxWidth: '60%'
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '60%',
    textAlign: 'center',
    lineHeight: 23,
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,

  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;
