import React, {useMemo} from 'react';
import {View, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import {Padding} from '../GlobalStyles';

const HeroSection = ({imageSrc, size}) => {
  const imgWidth = size ? 200 : 400
  const imgHeight = size ? 200 : 400
  return (
    <View style={styles.imagesection}>
      <Image
        style={{width: imgWidth, height: imgHeight}}
        resizeMode="contain"
        source={imageSrc}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagesection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default HeroSection;
