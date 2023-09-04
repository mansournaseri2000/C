import * as React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {useNavigation} from '@react-navigation/native';
import {Padding, FontSize, FontFamily, Border, Color} from '../GlobalStyles';

const RefinementTrack = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.prfilecontainer}>
      <View style={styles.sloganwrapper}>
        <Text style={[styles.craftYourMagical, styles.numberTypo]}>{`CRAFT YOUR
MAGICAL SMILE`}</Text>
      </View>
      <View
        style={[
          styles.refinedeatailcontainer,
          styles.growtextbutton2SpaceBlock,
        ]}>
        <View style={styles.refinewrapper}>
          <View style={[styles.counterwrapper, styles.counterwrapperLayout]}>
            <View style={styles.refinewrapper}>
              <Text style={[styles.titletext, styles.greetingTypo]}>
                Wearing
              </Text>
            </View>
            <View style={styles.refinewrapper}>
              <Text style={styles.labeltext}>ALIGNER</Text>
            </View>
            <View style={styles.counternumber}>
              <Text style={[styles.number, styles.numberTypo]}>1</Text>
            </View>
          </View>
          <View style={styles.refinedatewrapper}>
            <View style={[styles.datacard, styles.datacardSpaceBlock]}>
              <View style={styles.refinewrapper}>
                <Text style={styles.label}>Request</Text>
              </View>
              <View style={styles.refinewrapper}>
                <Text style={styles.date}>29/06/2023</Text>
              </View>
            </View>
            <View style={[styles.datacard1, styles.datacardSpaceBlock]}>
              <View style={styles.refinewrapper}>
                <Text style={styles.label1}>Post</Text>
              </View>
              <View style={styles.refinewrapper}>
                <Text style={styles.date}>29/06/2023</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  growtextbuttonSpaceBlock: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  greetingTypo: {
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  numberTypo: {
    fontSize: 34,
    fontFamily: 'Poppins-Regular',
  },
  growtextbutton2SpaceBlock: {
    marginTop: 10,
    alignSelf: 'stretch',
  },
  counterwrapperLayout: {
    borderWidth: 1,
    alignItems: 'center',
  },
  datacardSpaceBlock: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    width: 125,
    borderRadius: 12,
    alignItems: 'center',
  },
  bottomtabBorder: {
    borderColor: '#000',
    borderStyle: 'solid',
  },
  playFlexBox: {
    marginTop: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttontext1FlexBox: {
    width: 304,
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  buttontext: {
    textAlign: 'center',
    color: Color.gray,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  growtextbutton: {
    width: 40,
    justifyContent: 'center',
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    alignItems: 'center',
  },
  headertext: {
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: Color.colorWhite,
    fontSize: 24,
    textAlign: 'center',
  },
  header1: {
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerChild: {
    width: 50,
    height: 40,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nametext: {
    textAlign: 'left',
    color: Color.colorWhite,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  namewrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilenamewtrapper: {
    flexDirection: 'row',
  },
  greeting: {
    color: Color.colorDarkgray,
  },
  profileinfowrapper1: {
    alignSelf: 'stretch',
    flex: 1,
  },
  profileinfowrapper: {
    height: 53,
  },
  defaultimageIcon: {
    width: 20,
    height: 32,
  },
  uploadimage: {
    borderRadius: 50,
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    overflow: 'hidden',
  },
  profilecard: {
    padding: 8,
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  prfilecontainer: {
    padding: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  craftYourMagical: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.colorWhite,
    textAlign: 'center',
  },
  sloganwrapper: {
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titletext: {
    color: Color.colorPrimary,
  },
  refinewrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  labeltext: {
    color: Color.colorPrimary,
    textAlign: 'left',
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  number: {
    color: Color.colorPrimary,
    textAlign: 'left',
  },
  counternumber: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  counterwrapper: {
    borderColor: Color.colorPrimary,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
  },
  label: {
    fontSize: 22,
    textAlign: 'left',
    color: Color.gray,
    fontFamily: 'Poppins-Regular',
  },
  date: {
    color: Color.colorLightgray,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  datacard: {
    backgroundColor: Color.colorPrimary,
  },
  label1: {
    fontSize: 22,
    color: Color.colorPrimary,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  datacard1: {
    backgroundColor: Color.bgBrown,
  },
  refinedatewrapper: {
    marginLeft: 32,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  refinedeatailcontainer: {
    alignItems: 'center',
  },
  sliderIcon: {
    width: 300,
    height: 200,
    borderRadius: 15,
  },
  slidercontainer: {
    width: 297,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playCircleIcon: {
    width: 48,
    height: 48,
    overflow: 'hidden',
  },
  play: {
    alignSelf: 'stretch',
  },
  progresscontainer: {
    width: 390,
    padding: 16,
    alignItems: 'center',
    overflow: 'hidden',
  },
  maincontainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  buttontext1: {
    height: 28,
    color: Color.gray,
    fontSize: 18,
  },
  growtextbutton1: {
    justifyContent: 'center',
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  ghostbuttontext: {
    fontSize: 22,
    color: Color.colorPrimary,
    alignSelf: 'stretch',
  },
  growtextbutton2: {
    borderColor: Color.colorPrimary,
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    height: 40,
    borderRadius: 15,
  },
  container: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  youtubeIcon: {
    overflow: 'hidden',
  },
  bottomtab: {
    borderTopWidth: 5,
    backgroundColor: Color.bgBrown,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  caseprogress: {
    backgroundColor: Color.bgBlack,
    width: '100%',
    height: 1017,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
  },
});

export default RefinementTrack;
