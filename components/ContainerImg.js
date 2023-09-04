import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Color} from '../GlobalStyles';

export default function Container({children}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/BackgroundImg.png')}
        // source={require('../assets/BackgroundImgPtr.png')}
        style={styles.backgroundImage}>
        <StatusBar backgroundColor={Color.bgBlack} />
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Color.bgBlack,
    // paddingHorizontal: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire container
    justifyContent: 'center',
    alignItems: 'center',
  },
});
