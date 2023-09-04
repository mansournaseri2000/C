import React, {useState, useEffect, useRef} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Color, Padding} from '../GlobalStyles';
const images = [
  require('../assets/slider1.png'),
  require('../assets/slider2.png'),
  require('../assets/slider3.png'),
  require('../assets/slider4.png'),
  require('../assets/slider5.png'),
  require('../assets/slider6.png'),
  require('../assets/slider7.png'),
  require('../assets/slider8.png'),
  require('../assets/slider9.png'),
  require('../assets/slider10.png'),
  require('../assets/slider11.png'),
  require('../assets/slider12.png'),
];

const BrochureCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  useEffect(() => {
    // After the initial render, move the carousel to the end
    if (carouselRef.current) {
      const endIndex = images.length - 1;
      carouselRef.current.snapToItem(endIndex, false); // Set the second argument to false to prevent animation
    }
  }, []);

  const renderImage = ({item}) => (
    
      <View style={styles.imageContainer}>
        <Image
          // source={{uri: item}}
          source={item}
          style={styles.image}
          onError={() => console.log(`Failed to load image: ${item}`)}
        />
      </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={images}
        loop={true}
        autoplay={true}
        // sliderWidth={'100%'}
        // itemWidth={'100%'}
        renderItem={renderImage}
        autoplayInterval={5000}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setActiveSlide(index)}
        loopClonesPerSide={images.length - 1} // Ensure a smooth transition from the end to the beginning
      />
      {/* <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotColor="rgba(197, 171, 142, 1)"
        dotStyle={styles.paginationDot}
        inactiveDotColor="rgba(255, 255, 255, 1)"
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    // backgroundColor: Color.bgBlack,
  },
  imageContainer: {
    flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 5,
    // width: '100%',
    // height: '100%',
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    // borderRadius: 5,
  },
  paginationContainer: {
    bottom: 16,
  },
  paginationDot: {
    width: 15,
    height: 15,
    borderRadius: 5,
    marginHorizontal: 8,
    // backgroundColor: 'black',
  },
});

export default BrochureCarousel;
