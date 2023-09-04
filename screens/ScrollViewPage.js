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
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Padding, Color, FontFamily, FontSize, Border} from '../GlobalStyles';
import Container from '../components/Container';
import ContainerImg from '../components/ContainerImg';
import ContainerVideo from '../components/ContainerVideo';
import HeaderLan from '../components/HeaderLan';
import HeaderBack from '../components/HeaderBack';
import BottomTab from '../components/BottomTab';
import CaseProfileCard from '../components/CaseProfileCard';
import DrProfileCard from '../components/DrProfileCard';
import PrimaryBtn from '../components/PrimaryBtn';
import UnderBtnText from '../components/UnderBtnText';
import AdCarousel from '../components/AdCarousel';
import BackgroundVideo from '../components/BackgroundVideo';
import Video from 'react-native-video';

const ScrollViewPage = () => {
  const navigation = useNavigation();
  function handleSubmit() {
    navigation.navigate('FixedPage');
  }
  return (
    <BackgroundVideo>
      <View style={styles.pagecontainer}>
        <View style={styles.container}>
          {/* <HeaderBack headerText={"Profile"}/> */}
          <HeaderLan headerText={'Profile'} />

          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
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
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
              <Text style={{color: '#C5AB8E'}}>
                Sample Content of jplign application
              </Text>
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
          </ScrollView>
        </View>
        <BottomTab />
      </View>
    </BackgroundVideo>
  );
};

const styles = StyleSheet.create({
  pagecontainer: {
    // backgroundColor: Color.bgBlack,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
  },
  container: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 16,
  },
  contentcontainer: {
    alignSelf: 'stretch',
    // alignItems: 'center',
    paddingTop: 16,
  },
  bottomsection: {
    alignSelf: 'stretch',
    paddingVertical: 16,
    alignItems: 'center',
  },
});

export default ScrollViewPage;
