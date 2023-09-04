import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderLan from '../components/HeaderLan';
import DrProfileCard from '../components/DrProfileCard';
import HomeCard from '../components/HomeCard';
import BottomTab from '../components/BottomTab';
import {Color} from '../GlobalStyles';
import Container from '../components/Container';
const DentistHome = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.dentisthome}>
        <HeaderLan headerText="Home" />
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
              <View style={styles.cardcontainer}>
                <View style={styles.row}>
                  <HomeCard
                    iconSrc={require('../assets/icons/Identification.png')}
                    cardText="Prove ID"
                    onMainCardPress={() =>
                      navigation.navigate('DentistIdentity')
                    }
                  />
                  <HomeCard
                    iconSrc={require('../assets/icons/user.png')}
                    cardText="Profile"
                    onMainCardPress={() =>
                      navigation.navigate('DentistProfile')
                    }
                  />
                </View>
                <View style={styles.row}>
                  <HomeCard
                    iconSrc={require('../assets/icons/contract.png')}
                    cardText="Termination"
                    onMainCardPress={() =>
                      navigation.navigate('DentistTermination')
                    }
                  />
                  <HomeCard
                    iconSrc={require('../assets/icons/pen-tool.png')}
                    cardText="Contract"
                    onMainCardPress={() =>
                      navigation.navigate('DentistContract')
                    }
                    mainCardMarginLeft={16}
                  />
                </View>
                <View style={styles.row}>
                  <HomeCard
                    iconSrc={require('../assets/icons/users.png')}
                    cardText="Cases"
                    onMainCardPress={() => navigation.navigate('DentistCases')}
                  />
                  <HomeCard
                    iconSrc={require('../assets/icons/user-plus.png')}
                    cardText="Add Case"
                    onMainCardPress={() =>
                      navigation.navigate('DentistCaseProfile')
                    }
                    mainCardMarginLeft={16}
                  />
                </View>
                <View style={styles.row}>
                  <HomeCard
                    iconSrc={require('../assets/icons/guarantee.png')}
                    cardText="Guarantee"
                    onMainCardPress={() =>
                      navigation.navigate('DentistGuaranteeList')
                    }
                  />
                  <HomeCard
                    iconSrc={require('../assets/icons/star.png')}
                    cardText="Differences"
                    onMainCardPress={() =>
                      navigation.navigate('DentistDifferList')
                    }
                    mainCardMarginLeft={16}
                  />
                </View>

              </View>
            </View>
          </View>
        </ScrollView>
        <BottomTab activePage={0}/>
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
  rowSpaceBlock: {
    marginTop: 16,
    paddingVertical: 0,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  row: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  cardcontainer: {
    flex: 1,
  },
  main: {
    width: 390,
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
    height: 863,
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});

export default DentistHome;
