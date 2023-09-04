import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

const SearchBar = ({dir='ltr'}) => {
  const navigation = useNavigation();

  return (
    <View style={dir == 'ltr' ? styles.searchbtn : styles.searchbtnRTL}>
      <Image
        style={styles.arrowLeftIcon}
        resizeMode="contain"
        source={require('../assets/icons/search-white.png')}
      />
      <TextInput
        style={dir == 'ltr' ? styles.textwrapper : styles.textwrapperRTL}
        placeholder="Search"
        placeholderTextColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchbtn: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 8,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    flexDirection: 'row',
  },
  searchbtnRTL:{
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 8,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    flexDirection: 'row-reverse',
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  textwrapper: {
    fontSize: 16,
    // flexDirection: 'row',
    // alignItems: 'center',
    flex: 1,
    marginLeft: 8,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    // justifyContent:'center'
    marginTop: 4,
  },
  textwrapperRTL: {
    fontSize: 16,
    // flexDirection: 'row',
    // alignItems: 'center',
    flex: 1,
    marginRight: 8,
    fontFamily: 'Poppins-Regular',
    textAlign: 'right',
    marginTop: 4,
  },
});

export default SearchBar;
