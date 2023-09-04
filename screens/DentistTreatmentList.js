import * as React from "react";
import { StyleSheet, View, StatusBar} from "react-native";
import HeaderBack from "../components/HeaderBack";
import DrProfileCard from "../components/DrProfileCard";
import TreatmentCard from "../components/TreatmentCard";
import BottomTab from "../components/BottomTab";
import { Padding, Color } from "../GlobalStyles";

const DentistTreatmentList = () => {
  return (
    <View style={styles.dentisttreatmentlist}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.caselistFlexBox}>
        <HeaderBack headerText="Treatment" />
        <View style={[styles.profilecontainer, styles.caselistFlexBox]}>
          <DrProfileCard
            imageSrc={require("../assets/ProfileImg.png")}
            nameText="Fullname"
            greeting="Greeting"
          />
        </View>
        <View style={[styles.caselist, styles.caselistFlexBox]}>
          <TreatmentCard
            caseProfileSrc={require("../assets/SampleProfileImg.png")}
            nameText="Fullname"
            casePhone="+989126030028"
          />
          <TreatmentCard
            caseProfileSrc={require("../assets/SampleProfileImg.png")}
            nameText="Fullname"
            casePhone="+989126030028"
            caseCardMarginTop={16}
          />
        </View>
      </View>
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
  caselistFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  profilecontainer: {
    padding: 16,
  },
  caselist: {
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  dentisttreatmentlist: {
    backgroundColor: Color.bgBlack,
    flex: 1,
    width: "100%",
    height: 863,
    overflow: "hidden",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default DentistTreatmentList;
