import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import RNFetchBlob from 'rn-fetch-blob';

// const fileUrl = 'http://10.0.2.2:5000/contract/contract.pdf';
const fileUrl = 'https://www.africau.edu/images/default/sample.pdf';


export default function Download() {
  const [loading, setLoading] = useState(false);

  const downloadFile = () => {
    setLoading(true);
    let date = new Date();
    let FILE_URL = fileUrl;
    let file_ext = getFileExtention(FILE_URL);

    file_ext = '.' + file_ext[0];

    const {config, fs} = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir +
          '/contract' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'downloading contract...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        setLoading(false);
        console.log('res -> ', JSON.stringify(res));
        alert('Contract Downloaded Successfully.');
      })
      .catch(err => console.log('error'))
  };

  const getFileExtention = fileUrl => {
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={loading}
        style={[styles.button, loading && {backgroundColor:'gray'}]}
        onPress={downloadFile}>
        <Text style={styles.text}>Download Contract</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
  },
  button: {
    width: '80%',
    padding: 10,
    backgroundColor: 'blue',
    margin: 10,
  },
});
