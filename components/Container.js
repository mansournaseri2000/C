import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import { Padding, Color } from "../GlobalStyles";


export default function Container({children}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.bgBlack} />
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.bgBlack,
      // paddingHorizontal: 16,
    }
})
