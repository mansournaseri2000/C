import * as React from 'react';
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';
import PrimaryBtnSmall from '../components/PrimaryBtnSmall';
import GhostBtn from './PrimaryGhostBtn';
import SecondaryBtnSmall from './SecondaryBtnSmall';

const PaypalPayment = () => {
  const navigation = useNavigation();

  return (
    <View>

    </View>
  );
};

const styles = StyleSheet.create({

});

export default PaypalPayment;
