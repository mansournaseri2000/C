import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {Color} from "../GlobalStyles";

const HomeCard = ({
  iconSrc,
  cardText = "CardName",
  onMainCardPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.maincard, styles.maincardFlexBox]}
      activeOpacity={0.8}
      onPress={onMainCardPress}
    >
      <View style={[styles.cardiconwrapper, styles.maincardFlexBox]}>
        <Image style={styles.userIcon} resizeMode="contain" source={iconSrc} />
      </View>
      <View style={styles.cardtextwrapper}>
        <Text style={styles.cardtext}>{cardText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  maincardFlexBox: {
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 12,
    alignItems: "center",
  },
  userIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  cardiconwrapper: {
    backgroundColor: Color.colorPrimary,
    width: 40,
    flexDirection: "row",
    overflow: "hidden",
  },
  cardtext: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    color: Color.colorDarkgray,
    textAlign: "center",
    display: "flex",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop:4,
  },
  cardtextwrapper: {
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
  maincard: {
    backgroundColor: Color.bgBrown,
    marginHorizontal: 8,
    flex: 1,
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 12,
  },
});

export default HomeCard;
