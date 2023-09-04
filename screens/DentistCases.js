import * as React from "react";
import { ScrollView, StyleSheet, View,StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderBack from "../components/HeaderBack";
import DrProfileCard from "../components/DrProfileCard";
import HomeCard from "../components/HomeCard";
import BottomTab from "../components/BottomTab";
import { Color } from "../GlobalStyles";

const DentistHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dentisthome}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.containerScrollViewContent}
      >
        <HeaderBack headerText="Cases" />
        <View style={styles.homesection}>
          <DrProfileCard
            imageSrc={require("../assets/ProfileImg.png")}
            nameText="Fullname"
            greeting="Greeting"
          />
          <View style={[styles.main, styles.mainFlexBox]}>
            <View style={styles.cardcontainer}>
              <View style={styles.row}>
                <HomeCard
                  iconSrc={require("../assets/icons/trending-up.png")}
                  cardText="Treatment"
                  onMainCardPress={() => navigation.navigate("DentistTreatmentList")}
                  mainCardMarginLeft="unset"
                />
                <HomeCard
                  iconSrc={require("../assets/icons/user-plus.png")}
                  cardText="New Cases"
                  onMainCardPress={() => navigation.navigate("DentistProfile")}
                />
              </View>
              <View style={styles.row}>
                <HomeCard
                  iconSrc={require("../assets/icons/condition.png")}
                  cardText="Refinement"
                  onMainCardPress={() =>
                    navigation.navigate("DentistRefinementList")
                  }
                  mainCardMarginLeft="unset"
                />
                <HomeCard
                  iconSrc={require("../assets/icons/smile.png")}
                  cardText="Finished"
                  onMainCardPress={() => navigation.navigate("DentistFinishedList")}
                  mainCardMarginLeft={16}
                />
              </View>
              <View style={styles.row}>
                <HomeCard
                  iconSrc={require("../assets/icons/rotate-ccw.png")}
                  cardText="Return"
                  onMainCardPress={() => navigation.navigate("DentistReturnList")}
                  mainCardMarginLeft="unset"
                />
                <HomeCard
                  iconSrc={require("../assets/icons/archive.png")}
                  cardText="Archive"
                  onMainCardPress={() =>
                    navigation.navigate("DentistArchiveList")
                  }
                  mainCardMarginLeft={16}
                />
              </View>
              <View style={styles.row}>
                <HomeCard
                  iconSrc={require("../assets/icons/frown.png")}
                  cardText="Termination"
                  onMainCardPress={() =>
                    navigation.navigate("DentistTerminationAction")
                  }
                  mainCardMarginLeft="unset"
                />
                <HomeCard
                  iconSrc={require("../assets/icons/tag.png")}
                  cardText="Order"
                  onMainCardPress={() =>
                    navigation.navigate("DentistOrderList")
                  }
                  mainCardMarginLeft={16}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomTab
        messageWrapper={require("../assets/icons/message-circle.png")}
        youtube={require("../assets/icons/youtube.png")}
        info={require("../assets/icons/info.png")}
        condition={require("../assets/icons/condition.png")}
        logOut={require("../assets/icons/log-out.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerScrollViewContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mainFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
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
