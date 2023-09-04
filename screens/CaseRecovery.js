import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text
} from 'react-native';
import InputGroup from '../components/InputGroup';
import {useNavigation} from '@react-navigation/native';
import UnderBtnText from '../components/UnderBtnText';
import {Color, FontFamily, FontSize, Padding, Border} from '../GlobalStyles';
import {ScrollView} from 'react-native-gesture-handler';
import EntryPagesTitle from '../components/EntryPagesTitle';
import PrimaryBtn from '../components/PrimaryBtn'
import Container from '../components/Container';

const DentistLogin = () => {
  const navigation = useNavigation();

  return (
    <Container>
    <View style={styles.dentistregister}>
      <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.topsection}>
        <Image
          style={styles.jplignlogoIcon}
          resizeMode="cover"
          source={require('../assets/JplignLogo.png')}
        />
        <EntryPagesTitle pageTitle={'Patient Recovery'} />
        <View style={styles.formsection}>
          <InputGroup
            iconSrc={require('../assets/icons/mail.png')}
            label="Email"
            placeholder="Enter your email"
            hasIcon
          />     
        </View>
      </View>
      <View style={styles.bottomsection}>
        <PrimaryBtn buttonText="Recovery" goTo={'CaseReset'} />
        <UnderBtnText inofText="Remember your password?" pageName="Login" goTo={'CaseLogin'} />
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
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    textAlign: "left",
    color: Color.colorPrimary,
  },
  forgetwrapper: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
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
    paddingVertical:16,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  dentistregister: {
    backgroundColor: Color.bgBlack,
    width: '100%',
    height: 898,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
  },
});


export default DentistLogin;
