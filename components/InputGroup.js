import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView, Platform 
} from 'react-native';
import {Padding, FontFamily, FontSize, Border, Color} from '../GlobalStyles';

const InputGroup = ({
  iconSrc= require('../assets/icons/info.png'),
  label = 'Label',
  placeholder = 'Placeholder',
  defaultValue,
  hasIcon,
}) => {
  return (
    <View style={styles.inputgroup}>
      <View style={styles.inputiconwrapper}>
        <Image
          style={styles.packagePlusIcon}
          resizeMode="contain"
          source={iconSrc}
        />
      </View>
      <View style={styles.fieldinput}>
        <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.labelTypo}
            placeholder={placeholder}
            placeholderTextColor="#e6e6e6"
            defaultValue={defaultValue}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputgroup: {
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    // alignSelf: "stretch",
    padding: 8,
    flexDirection: 'row',
    marginBottom: 8,
  },
  inputiconwrapper: {
    borderRadius: 50,
    backgroundColor: Color.colorPrimary,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    // padding: 8,
    // flexDirection: 'row',
  },
  packagePlusIcon: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  fieldinput: {
    flex: 1,
    marginHorizontal: 8,
    // height: 40,
  },
  label: {
    color: Color.colorPrimary,
    // textAlign: "left",
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    padding: 0,
  },
  labelTypo: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    padding: 0,
    color: Color.colorWhite,
  },
});

export default InputGroup;
