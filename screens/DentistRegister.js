import * as React from 'react';
import {Image, StyleSheet, View, StatusBar} from 'react-native';
import InputGroup from '../components/InputGroup';
import {useNavigation} from '@react-navigation/native';
import UnderBtnText from '../components/UnderBtnText';
import {Color, FontFamily, FontSize, Padding, Border} from '../GlobalStyles';
import {ScrollView} from 'react-native-gesture-handler';
import EntryPagesTitle from '../components/EntryPagesTitle';
import PrimaryBtn from '../components/PrimaryBtn';
import Container from '../components/Container';
const DentistRegister = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView>
        <View style={styles.dentistregister}>
          <StatusBar backgroundColor={Color.bgBlack} />

          <View style={styles.topsection}>
            <Image
              style={styles.jplignlogoIcon}
              resizeMode="cover"
              source={require('../assets/JplignLogo.png')}
            />
            <EntryPagesTitle pageTitle={'Dentist Register'} />
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
                iconSrc={require('../assets/icons/gender.png')}
                label="Gender"
                placeholder="Select your gender"
                hasIcon
              />
              <InputGroup
                iconSrc={require('../assets/icons/calendar.png')}
                label="Birthday"
                placeholder="Select your birthday"
                hasIcon
              />
              <InputGroup
                iconSrc={require('../assets/icons/password.png')}
                label="Password"
                placeholder="Enter your password"
                hasIcon
              />
            </View>
          </View>
          <View style={styles.bottomsection}>
            <PrimaryBtn buttonText="Register" goTo={'DentistLogin'} />
            <UnderBtnText
              inofText="Already have an account?"
              pageName="Login"
              goTo={'DentistLogin'}
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  jplignlogoIcon: {
    width: 96,
    height: 75,
  },
  formsection: {
    paddingVertical: 0,
    marginTop: 32,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  topsection: {
    paddingTop: 32,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  buttontext: {
    color: Color.gray,
    textAlign: 'center',
    display: 'flex',
    width: 304,
    height: 28,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomsection: {
    paddingVertical: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  dentistregister: {
    backgroundColor: Color.bgBlack,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
  },
});

export default DentistRegister;
