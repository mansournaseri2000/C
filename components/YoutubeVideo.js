import React, {useState,useCallback} from 'react';
import {StyleSheet, ScrollView, Text, Button} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function YoutubeVideo() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text>asdsadsadsadsa</Text>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"ecH2d2H95EY"}
        onChangeState={onStateChange}
      />
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
