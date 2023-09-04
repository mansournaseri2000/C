import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {Padding, Color} from '../GlobalStyles';
import Video from 'react-native-video';

export default function Container({children}) {
  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/BackgroundVideo.mp4')}
        style={styles.backgroundVideo}
        muted={true} // Mute the video
        repeat={true} // Repeat the video
        resizeMode="cover" // Cover the entire container
        rate={1.0} // Playback rate
        ignoreSilentSwitch="obey" // Allow playback in silent mode (iOS)
      />
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    position:'realrive',
    height: '100%',
    top: 0,
    left:0,
    right:0,
    bottom:0,
  },
  container: {
    flex: 1,
    // backgroundColor: Color.bgBlack,
    // paddingHorizontal: 16,
  },
});
