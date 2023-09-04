import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {WebView} from 'react-native-webview';

// ...
export default function ThreeD() {
  const [url, setUrl] = useState('https://3dsimulation.info/?u=23891&a=Client3048/Client3806/JK26621/DED505D825CA46D99C439B02624AB088.iiwgl&fg=ddd&bg=000&p=NQUVAL');
  // const [url, setUrl] = useState('');

  return url ? (
    <WebView
      source={{
        uri: url,
      }}
      style={{flex: 1}}
    />
  ) : (
    <Text>
      There is no 3D, you need to order aligner or you can get counsulation
    </Text>
  );
}
