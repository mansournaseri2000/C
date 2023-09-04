import * as React from 'react';
import {useEffect, useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';

export default function TakePic() {
  const [file, setFile] = useState('');

  const handleChoosePhoto = async () => {
    try {
      const result = await launchImageLibrary({mediaType: 'photo'});
      if (result?.assets[0]) {
        setFile(result?.assets[0]);
      }
    } catch (error) {
      console.log('picture is not uploaded');
    }
  };
  const handleTakePicture = async () => {
    try {
      const result = await launchCamera({mediaType: 'photo'});
      if (result?.assets[0]) {
        setFile(result?.assets[0]);
      }
    } catch (error) {
      console.log('picture is not uploaded');
    }
  };
  console.log(file);
  return (
    <View>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <Text>Choose Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTakePicture}>
        <Text>Take Picture</Text>
      </TouchableOpacity>
      <Image
        style={{width: 300, height: 300}}
        source={{uri: file?.uri}}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  appSection: {
    flex: 1,
  },
});
