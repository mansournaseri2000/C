import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useState} from 'react';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default function Loading() {
  const [spinner, setSpinner] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setSpinner({
  //       spinner: !spinner,
  //     });
  //   }, 3000);
  // }, []);

  function submit() {
    setSpinner(true);
    const timerId = setTimeout(() => {
      setSpinner({
        spinner: !spinner,
      });
    }, 5000)
    clearTimeout(timerId)
  }
  return (
    <>
      <View style={styles.container}>
        <Spinner
          visible={spinner}
          textContent={'بارگذاری'}
          textStyle={styles.spinnerTextStyle}
        />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={submit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
