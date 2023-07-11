import react from "react";
/** React Components */
import { Text, View } from "react-native";

export default function DisplaySources({ audioSources, websiteURIsSources }) {
  return (
    <View>
      <Text>Those are the Audio Files you recorded and saved: </Text>
      <Text>{audioSources}</Text>
      <Text>Those are the Website Files you saved: </Text>
      <Text>{websiteURIsSources}</Text>
    </View>
  );
}
