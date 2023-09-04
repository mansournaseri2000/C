import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';
import {Color} from '../GlobalStyles';

const InputGroupDate = ({
  iconSrc = require('../assets/icons/info.png'),
  label = 'Label',
  placeholder = 'Placeholder',
  defaultValue,
  hasIcon,
}) => {
  const [date, setDate] = useState(new Date(1970, 0, 1));
  const [open, setOpen] = useState(false);
  function isEmptyDate(date) {
    const minValidDate = new Date(1970, 0, 1);
    return date.getTime() === minValidDate.getTime();
  }
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
        {/* <TextInput
          style={styles.labelTypo}
          placeholder={placeholder}
          placeholderTextColor="#e6e6e6"
          defaultValue={defaultValue}
        /> */}
        <Text style={styles.labelTypo} onPress={() => setOpen(true)}>
          {moment(date).format('YYYY/MM/DD') !='1970/01/01' ? moment(date).format('YYYY/MM/DD') : placeholder}
        </Text>
        <DatePicker
          mode="date"
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
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

export default InputGroupDate;
