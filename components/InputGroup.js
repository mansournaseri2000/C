import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageSourcePropType,
} from "react-native";
import { Padding, FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const InputGroup = ({
  iconSrc,
  label = "Label",
  placeholder = "Placeholder",
  defaultValue,
  hasIcon,
}) => {
  return (
    <View style={[styles.inputgroup, styles.inputgroupSpaceBlock]}>
      <View style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}>
        <Image
          style={styles.packagePlusIcon}
          resizeMode="contain"
          source={iconSrc}
        />
      </View>
      <View style={styles.fieldinput}>
        <Text style={[styles.label, styles.labelTypo]}>{label}</Text>
        <TextInput
          style={styles.labelTypo}
          placeholder={placeholder}
          placeholderTextColor="#e6e6e6"
          defaultValue={defaultValue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputgroupSpaceBlock: {
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  labelTypo: {
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.bodyMedium_size,
    alignSelf: "stretch",
  },
  packagePlusIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  inputiconwrapper: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorPrimary,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  label: {
    color: Color.colorPrimary,
    textAlign: "left",
  },
  fieldinput: {
    flex: 1,
    marginLeft: 8,
    height: 40,
  },
  inputgroup: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
});

export default InputGroup;
