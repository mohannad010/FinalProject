import { Recording } from "expo-av/build/Audio";
import react from "react";
/** React Components */
import { View, Text, Pressable } from "react-native";

export default function SaveAudioButton({
  sources,
  storeSources,
  recordings,
  recording,
}) {
  return (
    <View>
      <Pressable
        onPress={() => {
          console.log("Im in save button");
          let updatedAudio = [...sources.audioRecordingsURIs];

          updatedAudio.push(recording);
          storeSources({
            audioRecordingsURIs: sources.audioRecordingsURIs.concat(
              recordings[recordings.length - 1]
            ),
            websiteURIs: sources.websiteURIs,
          });
          alert("you saved the photo");
        }}
        style={{
          backgroundColor: "#a881af",
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
          Save Audio
        </Text>
      </Pressable>
    </View>
  );
}
