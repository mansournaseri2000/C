import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Modal, Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';

const images = [
  require('../assets/slider1.png'),
  require('../assets/slider2.png'),
  require('../assets/slider3.png'),
  require('../assets/slider4.png'),
  require('../assets/slider5.png'),
  require('../assets/slider6.png'),
  require('../assets/slider7.png'),
  require('../assets/slider8.png'),
];

const ProgressSlider = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselRef = useRef(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={images}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => toggleModal()}>
            <Image
              source={item}
              //  source={{uri: item}}
              style={styles.sliderImage}
            />
          </TouchableOpacity>
        )}
        sliderWidth={300}
        itemWidth={200}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <TouchableOpacity style={styles.playButton} onPress={() => toggleModal()}>
        <Icon name="play-arrow" size={40} color="white" />
      </TouchableOpacity>
      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={toggleModal}>
        <Carousel
          ref={carouselRef}
          data={images}
          renderItem={({item}) => (
            <View style={styles.expandedImageContainer}>
              <Image source={{uri: item}} style={styles.expandedImage} />
            </View>
          )}
          sliderWidth={300}
          itemWidth={300}
          initialScrollIndex={activeSlide}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  sliderImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: '45%',
    left: '45%',
  },
  expandedImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  expandedImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default ProgressSlider;
