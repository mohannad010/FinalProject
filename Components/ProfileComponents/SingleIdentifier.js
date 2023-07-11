import React from "react";
/** Styles */
import IDContainers from "../../Styles/Containers/IDContainers";
/** React Components */
import { View, Text, TextInput } from "react-native";

/** It creates a single Identifier block.
 * @returns
 * A title and a textInput components each wrapped
 * in a View component.
 * @param title the title of the Identifier (e.g., name, age)
 * @param placeholderText A dummy text placed in the TextInput component.
 * @param id the id of the identifier
 * @param update Used to send the id of the component and the text
 * typed by the user in the TextInput
 * component to the parent component so it can store it in its local storage in preparation for storing it later
 * in asynchronous storage if the user clicks on the Save Button.
 */
export default function SingleIdentifier({
  title,
  placeholderText,
  id,
  update,
}) {
  return (
    <View style={IDContainers.singleID}>
      <View style={IDContainers.singleIDTitle}>
        <Text>{title}</Text>
      </View>
      <View style={IDContainers.singleIDInput}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor="grey"
          style={{ backgroundColor: "lightblue", flex: 1 }}
          onChangeText={(text) => {
            update({ id, text });
          }}
        ></TextInput>
      </View>
    </View>
  );
}
