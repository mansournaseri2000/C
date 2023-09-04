import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {WebView} from 'react-native-webview';

// ...
export default function ConditionLan() {
  const conditionUrl = {
    En: 'https://ad-smile.de/en/conditions/',
    Du: 'https://ad-smile.de/agb/',
    Ar: 'https://ad-smile.de/ar/%d8%a7%d9%84%d8%b8%d8%b1%d9%88%d9%81/',
    Fa: 'https://ad-smile.de/fa/%d8%b4%d8%b1%d8%a7%db%8c%d8%b7/',
  };
  return (
    <View style={{flex:1, backgroundColor: 'black'}}>
      <WebView
        source={{
          uri: conditionUrl['Fa'],
        }}
        style={{flex: 1}}
      />
    </View>
  );
}
