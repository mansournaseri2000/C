import * as React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Padding, Color, FontFamily, FontSize, Border} from '../GlobalStyles';
import Container from '../components/Container';
import HeaderLan from '../components/HeaderLan';
import HeaderBack from '../components/HeaderBack';
import BottomTab from '../components/BottomTab';
import CaseProfileCard from '../components/CaseProfileCard';
import DrProfileCard from '../components/DrProfileCard';
import PrimaryBtn from '../components/PrimaryBtn';
import UnderBtnText from '../components/UnderBtnText';
import AdCarousel from '../components/AdCarousel';
const FixedPage = () => {
  const navigation = useNavigation();


  function handleSubmit() {
    navigation.navigate("ScrollViewPage")
  }

  return (
    <Container>
      <View style={styles.pagecontainer}>
        <View style={styles.container}>
          <View style={styles.maincontainer}>
            {/* <HeaderBack headerText={"Profile"}/> */}
            <HeaderLan headerText={'Profile'} />
            <AdCarousel />
            <CaseProfileCard
              imageSrc={require('../assets/ProfileImg.png')}
              nameText="Fullname"
              greeting="Greeting"
            />
            {/* <DrProfileCard
              imageSrc={require('../assets/ProfileImg.png')}
              nameText="Fullname"
              greeting="Greeting"
            /> */}
            <View style={styles.contentcontainer}>
              <Text style={{color: 'red'}}>asdsadsadsadsadsdsadsadsad</Text>
            </View>
          </View>
          <View style={styles.bottomsection}>
            <PrimaryBtn buttonText="Save" handler={handleSubmit} />
            <UnderBtnText
              inofText="Already have an account?"
              pageName="Login"
              goTo={'DentistLogin'}
            />
            <UnderBtnText
              inofText="Already have an account?"
              pageName="Login"
              goTo={'DentistLogin'}
            />
          </View>
        </View>
        <BottomTab />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  pagecontainer: {
    backgroundColor: Color.bgBlack,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
  },
  container: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 16,
  },
  maincontainer: {
    alignSelf: 'stretch',
    paddingTop: 16,
  },
  bottomsection: {
    alignSelf: 'stretch',
    paddingVertical: 16,
    alignItems: 'center',
  },
  contentcontainer:{
    paddingTop: 16,
  }

});

export default FixedPage;
