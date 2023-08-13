import React, { useMemo } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HomeCard = ({
  iconSrc,
  cardText = "CardName",
  onMainCardPress,
  mainCardMarginLeft,
}) => {
  const mainCardStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", mainCardMarginLeft),
    };
  }, [mainCardMarginLeft]);

  return (
    <TouchableOpacity
      style={[styles.maincard, styles.maincardFlexBox, mainCardStyle]}
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
    padding: Padding.p_5xs,
    borderRadius: Border.br_xs,
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
    fontSize: FontSize.titleMedium_size,
    fontFamily: FontFamily.bodySmall,
    color: Color.colorDarkgray,
    textAlign: "center",
    display: "flex",
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cardtextwrapper: {
    width: 123,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
  maincard: {
    backgroundColor: Color.bgBrown,
    height: 120,
    marginLeft: 16,
    flex: 1,
    justifyContent: "space-between",
    padding: Padding.p_5xs,
    borderRadius: Border.br_xs,
  },
});

export default HomeCard;
