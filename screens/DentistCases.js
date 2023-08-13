import * as React from "react";
import { ScrollView, StyleSheet, View,StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderLan from "../components/HeaderLan";
import HeaderBack from "../components/HeaderBack";
import DrProfileCard from "../components/DrProfileCard";
import HomeCard from "../components/HomeCard";
import BottomTab from "../components/BottomTab2";
import { Padding, Color } from "../GlobalStyles";
import UnderBtnText from "../components/UnderBtnText";

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
            imageSrc={require("../assets/defaultimage1.png")}
            nameText="Fullname"
            greeting="Greeting"
          />
          <View style={[styles.main, styles.mainFlexBox]}>
            <View style={styles.cardcontainer}>
              <View style={styles.row}>
                <HomeCard
                  iconSrc={require("../assets/trendingup.png")}
                  cardText="Treatment"
                  onMainCardPress={() => navigation.navigate("DentistTreatmentList")}
                  mainCardMarginLeft="unset"
                />
                <HomeCard
                  iconSrc={require("../assets/userplus.png")}
                  cardText="New Cases"
                  onMainCardPress={() => navigation.navigate("DentistProfile")}
                />
              </View>
              <View style={styles.rowSpaceBlock}>
                <HomeCard
                  iconSrc={require("../assets/packageplus21.png")}
                  cardText="Refinement"
                  onMainCardPress={() =>
                    navigation.navigate("DentistRefinementList")
                  }
                  mainCardMarginLeft="unset"
                />
                <HomeCard
                  iconSrc={require("../assets/smile.png")}
                  cardText="Finished"
                  onMainCardPress={() => navigation.navigate("DentistFinishedList")}
                  mainCardMarginLeft={16}
                />
              </View>
              <View style={[styles.row2, styles.rowSpaceBlock]}>
                <HomeCard
                  iconSrc={require("../assets/rotateccw.png")}
                  cardText="Return"
                  onMainCardPress={() => navigation.navigate("DentistReturnList")}
                  mainCardMarginLeft="unset"
                />
                <HomeCard
                  iconSrc={require("../assets/archive.png")}
                  cardText="Archive"
                  onMainCardPress={() =>
                    navigation.navigate("DentistArchiveList")
                  }
                  mainCardMarginLeft={16}
                />
              </View>
              <View style={[styles.row2, styles.rowSpaceBlock]}>
                <HomeCard
                  iconSrc={require("../assets/frown.png")}
                  cardText="Termination"
                  onMainCardPress={() =>
                    navigation.navigate("DentistTerminationAction")
                  }
                  mainCardMarginLeft="unset"
                />
                <HomeCard
                  iconSrc={require("../assets/tag.png")}
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
        messageWrapper={require("../assets/messagewrapper.png")}
        youtube={require("../assets/youtube.png")}
        info={require("../assets/info.png")}
        condition={require("../assets/condition.png")}
        logOut={require("../assets/logout.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mainFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  rowSpaceBlock: {
    marginTop: 16,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_13xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  row: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_13xl,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  row2: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardcontainer: {
    flex: 1,
  },
  main: {
    width: 390,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  homesection: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  container: {
    alignSelf: "stretch",
    flex: 1,
  },
  dentisthome: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 863,
    overflow: "hidden",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});

export default DentistHome;
