import react from "react";
/** React Components */
import { View, Text, Pressable } from "react-native";

export default function SaveWebsiteURIButton({
  sources,
  storeSources,
  websiteURI,
  websiteURIs,
  updateWebsiteURIs,
}) {
  return (
    <View>
      <Pressable
        onPress={() => {
          console.log("Im in save button");
          let updatedWebsiteURIs = [...sources.websiteURIs];

          updatedWebsiteURIs.push(websiteURI);
          updateWebsiteURIs(updatedWebsiteURIs);
          storeSources({
            audioRecordingsURIs: sources.audioRecordingsURIs,
            websiteURIs: updatedWebsiteURIs,
          });
          alert("you saved the photo");
        }}
        style={{
          backgroundColor: "#55c2da",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 3,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        ></View>
        <Text
          style={{
            fontSize: 15,
            color: "white",
            fontWeight: "bold",
            flex: 1,
            marginBottom: 6,
          }}
        >
          Save Website URI
        </Text>
      </Pressable>
    </View>
  );
}
