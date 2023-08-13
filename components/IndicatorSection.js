import * as React from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Padding } from "../GlobalStyles";

const IndicatorSection = ({ enabledIndicator }) => {
  return (
    <View style={[styles.indicatorsection, styles.indicatorsectionFlexBox]}>
      <View style={[styles.indicatorwrapper, styles.indicatorsectionFlexBox]}>
        <Image
          style={styles.indicator1Icon}
          resizeMode="cover"
          source={enabledIndicator == 1 ? require("../assets/enabledIndicator.png") : require("../assets/disableIndicator.png")}
        />
        <Image
          style={styles.indicator1Icon}
          resizeMode="cover"
          source={enabledIndicator == 2 ? require("../assets/enabledIndicator.png") : require("../assets/disableIndicator.png")}
        />
        <Image
          style={styles.indicator1Icon}
          resizeMode="cover"
          source={enabledIndicator == 3 ? require("../assets/enabledIndicator.png") : require("../assets/disableIndicator.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorsectionFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  indicator1Icon: {
    width: 24,
    height: 24,
  },
  indicatorwrapper: {
    width: 104,
    justifyContent: "space-between",
  },
  indicatorsection: {
    alignSelf: "stretch",
    height: 68,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
  },
});

export default IndicatorSection;
