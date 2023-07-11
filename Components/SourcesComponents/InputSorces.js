import react from "react";
/** React Components */
import { View, Button, TextInput } from "react-native";

export default function InputSources({
  recording,
  stopRecording,
  startRecording,
  updateWebsiteURI,
}) {
  return (
    <View>
      <Button
        title={recording ? "Stop Recording" : "Start Record"}
        onPress={recording ? stopRecording : startRecording}
      />
      <TextInput
        placeholder="Wite the URI of a website here"
        placeholderTextColor="grey"
        style={{ backgroundColor: "lightblue", flex: 0.1 }}
        onChangeText={(text) => {
          updateWebsiteURI({ text });
        }}
      ></TextInput>
    </View>
  );
}
