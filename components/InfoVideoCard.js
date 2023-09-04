import YoutubePlayer from 'react-native-youtube-iframe';
import React, {useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

const InfoVideoCard = ({youtubeUrl, title, description, dir}) => {
  const navigation = useNavigation();
  const [playing, setPlaying] = useState(false);
  const videoId = youtubeUrl.split('v=')[1];
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
        <Text style={dir == 'ltr' ? styles.videoinfotext : styles.videoinfotextRTL}>{description}
        </Text>
      </View>
      <View style={styles.videocoverwrapper}>
        <YoutubePlayer
          height={250}
          play={playing}
          videoId={videoId}
          // onChangeState={onStateChange}
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
    padding: 8,
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
    width: 40,
    height: 40,
    padding: 8,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    alignItems: 'center',
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
    paddingBottom: 8,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },

  videoinfotext: {
    color: Color.colorWhite,
    fontSize: 18,
    flex: 1,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  videoinfotextRTL: {
    color: Color.colorWhite,
    fontSize: 18,
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
  },
  videocoverwrapper: {
    paddingHorizontal: 8,
  },
});

export default InfoVideoCard;
