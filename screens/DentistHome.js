import * as React from "react";
import { ScrollView, StyleSheet, View,StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderLan from "../components/HeaderLan";
import DrProfileCard from "../components/DrProfileCard";
import HomeCard from "../components/HomeCard";
import BottomTab from "../components/BottomTab2";
import { Padding, Color } from "../GlobalStyles";

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
        <HeaderLan headerText="Home" />
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
                  iconSrc={require("../assets/identification.png")}
                  cardText="Prove ID"
                  onMainCardPress={() => navigation.navigate("DentistIdentity")}
                  mainCardMarginLeft="unset"
                />
                <HomeCard
                  iconSrc={require("../assets/user.png")}
                  cardText="Profile"
                  onMainCardPress={() => navigation.navigate("DentistProfile")}
                />
              </View>
              <View style={styles.rowSpaceBlock}>
                <HomeCard
                  iconSrc={require("../assets/contract.png")}
                  cardText="Termination"
                  onMainCardPress={() =>
                    navigation.navigate("DentistTermination")
                  }
                  mainCardMarginLeft="unset"
                />
                <HomeCard
                  iconSrc={require("../assets/pentool.png")}
                  cardText="Contract"
                  onMainCardPress={() => navigation.navigate("DentistContract")}
                  mainCardMarginLeft={16}
                />
              </View>
              <View style={[styles.row2, styles.rowSpaceBlock]}>
                <HomeCard
                  iconSrc={require("../assets/users.png")}
                  cardText="Cases"
                  onMainCardPress={() => navigation.navigate("DentistCases")}
                  mainCardMarginLeft="unset"
                />
                <HomeCard
                  iconSrc={require("../assets/userplus.png")}
                  cardText="Add Case"
                  onMainCardPress={() =>
                    navigation.navigate("DentistCaseProfile")
                  }
                  mainCardMarginLeft={16}
                />
              </View>
              <View style={[styles.row2, styles.rowSpaceBlock]}>
                <HomeCard
                  iconSrc={require("../assets/guarantee.png")}
                  cardText="Guarantee"
                  onMainCardPress={() =>
                    navigation.navigate("DentistGuaranteeList")
                  }
                  mainCardMarginLeft="unset"
                />
                <HomeCard
                  iconSrc={require("../assets/star.png")}
                  cardText="Differences"
                  onMainCardPress={() =>
                    navigation.navigate("DentistDifferList")
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
