import React, {useState, useEffect, useRef} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Color, Padding} from '../GlobalStyles';

const images = [
  require('../assets/SliderImages.png'),
  require('../assets/SliderImages.png'),
];

const InstructureSlider = () => {
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
        data={images}
        loop={true}
        autoplay={true}
        renderItem={renderImage}
        autoplayInterval={2000}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setActiveSlide(index)}
        loopClonesPerSide={images.length - 1} // Ensure a smooth transition from the end to the beginning

      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotColor="rgba(197, 171, 142, 1)"
        dotStyle={styles.paginationDot}
        inactiveDotColor="rgba(255, 255, 255, 1)"
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: Color.bgBrown,
    margin: 16,
    borderRadius: 5,
  },
  imageContainer: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 5,
  },
  image: {
    // width: '90%',
    // height: '90%',
    borderRadius: 5,
    resizeMode: 'contain',
  },
  paginationContainer: {
    bottom: 16,
  },
  paginationDot: {
    width: 15,
    height: 15,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'black',
  },
});

export default InstructureSlider;
