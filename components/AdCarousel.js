import React, {useRef, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ScrollView} from 'react-native-gesture-handler';

const AdCarousel = () => {
  const advertisements = [
    {
      id: 1,
      image: require('../assets/Slide1.jpg'),
    },
    {
      id: 2,
      image: require('../assets/Slide2.jpg'),
    },
    {
      id: 3,
      image: require('../assets/Slide3.jpg'),
    },
    {
      id: 4,
      image: require('../assets/Slide4.jpg'),
    },
    {
      id: 5,
      image: require('../assets/Slide5.png'),
    },
    {
      id: 6,
      image: require('../assets/Slide6.png'),
    },
    // Add more advertisements here
  ];
  const carouselRef = useRef(null);

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.carouselItem}>
          <Image source={item.image} style={styles.carouselImage} />
        </View>
      </View>
    );
  };
  useEffect(() => {
    // After the initial render, move the carousel to the end
    if (carouselRef.current) {
      const endIndex = advertisements.length - 1;
      carouselRef.current.snapToItem(endIndex, false); // Set the second argument to false to prevent animation
    }
  }, []);


  return (
    <Carousel
    ref={carouselRef}
    data={advertisements}
    renderItem={renderItem}
    sliderWidth={400}
    itemWidth={250}
    loop={true}
    autoplay={true}
    autoplayInterval={3000}
    loopClonesPerSide={advertisements.length - 1} // Ensure a smooth transition from the end to the beginning
  />
  );
};

const styles = {
  container: {
    height: 200,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  carouselItem: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: 245,
    height: 195,
    resizeMode: 'conver',
    borderRadius: 10,
  },
};

export default AdCarousel;
