import React from "react";
/** React Components */
import { View, Text } from "react-native";
/** Styles */
import PIContainers from "../../Styles/Containers/PIContainers";
import texts from "../../Styles/Texts";

/**
 * It displays a single private detail.
 * @param title is the title of the information (e.g., name, age, etc)
 * @param info is the value the user has givven as an answer (e.g., Steve, 22, etc)
 * @returns a block displaying a single private detail.
 */
export default function singlePrivateInfo({ title, info }) {
  return (
    <View style={PIContainers.singlePI}>
      <View style={PIContainers.singlePIHeader}>
        <Text style={texts.singlePIHeader}> {title} </Text>
      </View>
      <View style={PIContainers.singlePIBody}>
        <Text style={texts.singlePIHeader}> {info} </Text>
      </View>
    </View>
  );
}
