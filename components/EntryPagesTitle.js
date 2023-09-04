import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Padding, FontFamily, FontSize, Border, Color} from '../GlobalStyles';

export default function EntryPagesTitle({pageTitle}) {
  return (
    <View style={styles.formsectionSpaceBlock}>
      <Text style={styles.brandtext}>Health Teeth Operation GmbH / JPLign</Text>
      <Text style={styles.pagename}>{pageTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  brandtext: {
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: Color.colorPrimary,
    textAlign: 'left',
  },
  pagename: {
    color: Color.colorWhite,
    marginTop: 8,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  formsectionSpaceBlock: {
    marginTop: 32,
    alignItems: 'center',
  },
});
