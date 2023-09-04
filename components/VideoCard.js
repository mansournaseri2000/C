import YoutubePlayer from 'react-native-youtube-iframe';
import React, {useState, useCallback} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

const VideoCard = ({youtubeUrl, title, dir}) => {
  const navigation = useNavigation();
  const [playing, setPlaying] = useState(false);
  const videoId = youtubeUrl.split('v=')[1];
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  return (
    <View style={styles.video}>
      <View style={dir == 'ltr' ? styles.inputgroup : styles.inputgroupRTL}>
        <View style={styles.inputiconwrapper}>
          <Image
            style={styles.packagePlusIcon}
            resizeMode="contain"
            source={require('../assets/icons/film.png')}
          />
        </View>
        <Text style={dir == 'ltr' ? styles.label : styles.labelRTL}>{title}</Text>
      </View>
      <View style={styles.videoinfowrapper}>
        <YoutubePlayer
          height={250}
          play={playing}
          videoId={videoId}
          onChangeState={onStateChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    alignSelf: 'stretch',
    padding:8,
  },
  inputgroup: {
    padding: 8,
    borderRadius: 12,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  inputgroupRTL: {
    padding: 8,
    borderRadius: 12,
    flexDirection: 'row-reverse',
    alignSelf: 'stretch',
  },
  inputiconwrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: 40,
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
  },
  packagePlusIcon: {
    overflow: 'hidden',
    height: 24,
    width: 24,
  },
  label: {
    marginLeft: 8,
    fontSize: 18,
    flex: 1,
    color: Color.colorPrimary,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  labelRTL: {
    marginRight: 8,
    fontSize: 18,
    flex: 1,
    color: Color.colorPrimary,
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
  },
  videoinfowrapper: {
    paddingHorizontal: 8,
  },

  videoinfotext: {
    color: Color.colorWhite,
    fontSize: 18,
    flex: 1,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
});

export default VideoCard;
