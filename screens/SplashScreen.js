import * as React from "react";
import { Image, StyleSheet, View, StatusBar } from "react-native";
import { Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={[styles.splashscreen, styles.logowrapperFlexBox]}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={[styles.logowrapper, styles.logowrapperFlexBox]}>
        <Image
          style={styles.jplignlogoIcon}
          resizeMode="cover"
          source={require("../assets/jplignlogo2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logowrapperFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  jplignlogoIcon: {
    width: 213,
    height: 166,
  },
  logowrapper: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
  },
  splashscreen: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 844,
  },
});

export default SplashScreen;
