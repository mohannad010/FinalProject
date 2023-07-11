import React from "react";
/** React Components */
import { View, Text, Pressable } from "react-native";
/** Icons */
import FontAwesome from "@expo/vector-icons/FontAwesome";

/**
 * This component allows the user to picka a photo from his local storage
 * then save it to the asynchronous/Persistent storage of the app.
 * @param title the text in the button
 * @param theme the functionality that we want the button to have. If Primary
 * then it will be an Add photo button else it will be a save button.
 * @param onPress a function written by the parent component to allow.
 * the user to choose a photo from his local storage.
 * @param store a function written by the parent component to allow the
 * user to store the image that he picked in asynchronous storage.
 * @param selectedImage a defulat image or a uri representing a photol.
 * @returns A button to pick a photo from local storage.
 * @returns A button to save the pohto to persistent storage.
 */
const PictureButton = ({ title, theme, onPress, store, selectedImage }) => {
  if (theme === "primary") {
    return (
      <Pressable
        onPress={() => {
          onPress();
        }}
        style={{
          backgroundColor: "#841584",
          flex: 0.4,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <FontAwesome
            name="picture-o"
            size={15}
            color="#25292e"
            style={{
              flexDirection: "column",
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          />
          <Text
            style={{
              fontSize: 10,
              color: "white",
              fontWeight: "bold",
              flex: 2,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    );
  }
  return (
    <Pressable
      onPress={() => {
        console.log("Im in save button, selected image: " + selectedImage);
        store(selectedImage);
        alert("you saved the photo");
      }}
      style={{
        backgroundColor: "#a881af",
        flex: 0.4,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ flex: 0.7 }}></View>
      <Text
        style={{
          fontSize: 10,
          color: "white",
          fontWeight: "bold",
          flex: 1,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};
export default PictureButton;
