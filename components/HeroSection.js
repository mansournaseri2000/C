import React, { useMemo } from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HeroSection = ({
  imageSrc,
  imageSectionFlex,
  imageSectionPadding,
  imageSectionHeight,
  imageSectionPaddingHorizontal,
  imageSectionPaddingVertical,
  imageWrapperIconHeight,
}) => {
  const imageSectionStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", imageSectionFlex),
      ...getStyleValue("padding", imageSectionPadding),
      ...getStyleValue("height", imageSectionHeight),
      ...getStyleValue("paddingHorizontal", imageSectionPaddingHorizontal),
      ...getStyleValue("paddingVertical", imageSectionPaddingVertical),
    };
  }, [
    imageSectionFlex,
    imageSectionPadding,
    imageSectionHeight,
    imageSectionPaddingHorizontal,
    imageSectionPaddingVertical,
  ]);

  const imageWrapperIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", imageWrapperIconHeight),
    };
  }, [imageWrapperIconHeight]);

  return (
    <View style={[styles.imagesection, imageSectionStyle]}>
      <Image
        style={[styles.imagewrapperIcon, imageWrapperIconStyle]}
        resizeMode="contain"
        source={imageSrc}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagewrapperIcon: {
    maxWidth: "100%",
    flex: 1,
  },
  imagesection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default HeroSection;
