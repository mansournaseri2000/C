import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import InputGroup from '../components/InputGroup';
import {useNavigation} from '@react-navigation/native';
import UnderBtnText from '../components/UnderBtnText';
import {Color, FontFamily, FontSize, Padding, Border} from '../GlobalStyles';
import {ScrollView} from 'react-native-gesture-handler';
import EntryPagesTitle from '../components/EntryPagesTitle';
import PrimaryBtn from '../components/PrimaryBtn';
import Container from '../components/Container';

const DentistLogin = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.dentistregister}>
        <View style={styles.topsection}>
          <Image
            style={styles.jplignlogoIcon}
            resizeMode="cover"
            source={require('../assets/JplignLogo.png')}
          />
          <EntryPagesTitle pageTitle={'Dentist Login'} />
          <View style={styles.formsection}>
            <InputGroup
              iconSrc={require('../assets/icons/mail.png')}
              label="Email"
              placeholder="Enter your email"
              hasIcon
            />
            <InputGroup
              iconSrc={require('../assets/icons/password.png')}
              label="Password"
              placeholder="Enter your password"
              hasIcon
            />
            <View style={[styles.forgetwrapper, styles.inputgroupFlexBox]}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('DentistRecovery')}>
                <Text style={[styles.forgetYourPassword, styles.labelFlexBox]}>
                  Forget your password ?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
          <View style={styles.bottomsection}>
            <PrimaryBtn buttonText="Login" goTo={'DentistHome'} />
            <UnderBtnText
              inofText="Create your account?"
              pageName="Register"
              goTo={'DentistRegister'}
            />
          </View>
      </View>
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
  forgetYourPassword: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    textAlign: 'left',
    color: Color.colorPrimary,
  },
  forgetwrapper: {
    marginTop: 8,
    alignItems: 'center',
    flexDirection: 'row',
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

export default DentistLogin;
