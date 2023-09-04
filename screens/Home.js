import * as React from 'react';
import {Pressable, Text, StyleSheet, View, StatusBar} from 'react-native';
import HeroSection from '../components/HeroSection';
import PrimaryBtn from '../components/PrimaryBtn';
import GhostBtn from '../components/GhostBtn';
import Container from '../components/Container';

import {Padding, FontSize, Color, FontFamily} from '../GlobalStyles';

const Home = () => {
  return (
    <Container>
      <View style={styles.home}>
        <StatusBar backgroundColor={Color.bgBlack} />
        <View style={[styles.languagebtn, styles.languagebtnFlexBox]}>
          <Text style={styles.languagetext}>English</Text>
        </View>
        <HeroSection imageSrc={require('../assets/DrImage.png')} />
        <View style={[styles.titlesection, styles.languagebtnFlexBox]}>
          <Text style={styles.title}>
            <Text style={styles.craftYour}>{`CRAFT YOUR
`}</Text>
            <Text style={styles.magical}>MAGICAL</Text>
            <Text style={styles.craftYour}> SMILE</Text>
          </Text>
        </View>
        <View style={styles.btncontainer}>
          <View style={styles.patientbtnwrapperFlexBox}>
            <PrimaryBtn buttonText="I’M A PATIENT" goTo={'CaseLogin'} />
          </View>
          <View
            style={[styles.dentistbtnwrapper, styles.patientbtnwrapperFlexBox]}>
            <GhostBtn ghostButtonText="I’M A DENTIST" goTo={'DentistLogin'} />
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  languagebtnFlexBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  patientbtnwrapperFlexBox: {
    paddingVertical: 0,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  languagetext: {
    fontSize: 22,
    color: Color.colorPrimary,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  languagebtn: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  craftYour: {
    fontFamily: 'Poppins-Regular',
  },
  magical: {
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },
  title: {
    fontSize: FontSize.displayLarge_size,
    color: Color.colorWhite,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: 'center',
    flex: 1,
  },
  titlesection: {
    paddingHorizontal: 48,
    paddingVertical: 10,
  },
  dentistbtnwrapper: {
    marginTop: 16,
  },
  btncontainer: {
    paddingHorizontal: 0,
    paddingVertical: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  home: {
    backgroundColor: Color.bgBlack,
    width: '100%',
    height: 844,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});

export default Home;
