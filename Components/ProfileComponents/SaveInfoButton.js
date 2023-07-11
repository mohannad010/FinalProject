import React from "react";
/** React Components */
import { View, Text, Pressable } from "react-native";
/** Icons */
import FontAwesome from "@expo/vector-icons/FontAwesome";

/**
 * A button that on pressing it, it calls a funciton back in the parent component that should save
 * the user's personal information in Asyncronous storge.
 * @param title the text inside the button.
 * @param store a function that sends to the parent component the personal information the user entered so it can be stored in asynchronous storage.
 * @param personalInfo a Json Object that has the personal information that the user entered.
 * @returns returns a button that on pressing it, it calls a funciton back in the parent component that should save
 * the user's personal information in Asyncronous storge.
 */
export default function SaveInfoButton({ title, store, personalInfo }) {
  return (
    <Pressable
      onPress={() => {
        store(personalInfo);
        alert("you saved your personal information");
      }}
      style={{
        backgroundColor: "#841584",
        flex: 0.4,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <FontAwesome
          name="save"
          size={15}
          color="#25292e"
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        />
        <Text
          style={{
            fontSize: 15,
            color: "white",
            fontWeight: "bold",
            flex: 2,
            flexDirection: "row",
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
