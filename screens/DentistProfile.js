import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DrProfileCard from '../components/DrProfileCard';
import HeaderBack from '../components/HeaderBack';
import BottomTab from '../components/BottomTab';
import {Color} from '../GlobalStyles';
import InputGroup from '../components/InputGroup';
import Container from '../components/Container';
import PrimaryBtn from '../components/PrimaryBtn';

const DentistHome = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.dentisthome}>
        <HeaderBack headerText="Profile" />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.containerScrollViewContent}>
          <View style={styles.homesection}>
            <DrProfileCard
              imageSrc={require('../assets/ProfileImg.png')}
              nameText="Fullname"
              greeting="Greeting"
            />
            <View style={styles.main}>
              <View style={styles.container}>
                <View style={styles.formsection}>
                  <InputGroup
                    iconSrc={require('../assets/icons/user.png')}
                    label="Firstname"
                    placeholder="Enter your firstname"
                    hasIcon
                  />
                  <InputGroup
                    iconSrc={require('../assets/icons/user.png')}
                    label="Lastname"
                    placeholder="Enter your lastname"
                    hasIcon
                  />
                  <InputGroup
                    iconSrc={require('../assets/icons/phone.png')}
                    label="Phone"
                    placeholder="Enter your phone"
                    hasIcon
                  />
                  <InputGroup
                    iconSrc={require('../assets/icons/mail.png')}
                    label="Email"
                    placeholder="Enter your email"
                    hasIcon
                  />
              
                  <InputGroup
                    iconSrc={require('../assets/icons/calendar.png')}
                    label="Birthday"
                    placeholder="Select your birthday"
                    hasIcon
                  />
                      <InputGroup
                    iconSrc={require('../assets/icons/gender.png')}
                    label="Gender"
                    placeholder="Select your gender"
                    hasIcon
                  />
                      <InputGroup
                    iconSrc={require('../assets/icons/map-pin.png')}
                    label="Country"
                    placeholder="Select country"
                    hasIcon
                  />
                      <InputGroup
                    iconSrc={require('../assets/icons/map-pin.png')}
                    label="State"
                    placeholder="Select state"
                    hasIcon
                  />
                      <InputGroup
                    iconSrc={require('../assets/icons/map-pin.png')}
                    label="City"
                    placeholder="Select city"
                    hasIcon
                  />
                     <InputGroup
                    iconSrc={require('../assets/icons/map-pin.png')}
                    label="Address"
                    placeholder="Enter your address"
                    hasIcon
                  />
                  <InputGroup
                    iconSrc={require('../assets/icons/mailbox.png')}
                    label="Zip code"
                    placeholder="Enter your zip code"
                    hasIcon
                  />
        
                </View>
              </View>
            </View>
            <View style={styles.bottomsection}>
              <PrimaryBtn buttonText="Save" goTo={'DentistHome'} />
            </View>
          </View>
        </ScrollView>
        <BottomTab activePage={0} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerScrollViewContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomsection: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  formsection: {
    paddingVertical: 0,
    // marginTop: 32,
    alignItems: 'center',
    // paddingHorizontal: 16,
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
  },
  main: {
    paddingHorizontal: 0,
    paddingVertical: 16,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homesection: {
    padding: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  container: {
    alignSelf: 'stretch',
    flex: 1,
  },
  dentisthome: {
    backgroundColor: Color.bgBlack,
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});

export default DentistHome;
