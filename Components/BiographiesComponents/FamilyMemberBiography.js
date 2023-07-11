import React from "react";
/** Styles */
import FMContainers from "../../Styles/Containers/FMContainers";
import texts from "../../Styles/Texts";
/** React Components */
import { View, Text, TextInput } from "react-native";
/** Hooks */
import { useState } from "react"; // Local
import { useBiographies } from "../../Contexts/BiographiesContext"; // Global

/**
 * This functions displays a block htat allows you to add to your biographies
 * and it displays what you wrote so far.
 * @param id is the id of the component (e.g., father, mother, autobiography)
 * @param name is the name of the person you want to write about
 * @param update is a function given by the parent component that
 * should allow the
 * parent component to recieve the text added to the biography
 * @returns a title, textInput, a character counter, and a text
 * showing waht you wrote so far in a biography.
 */
export default function FamilyMemberBiography({ id, name, update }) {
  const { currentBios } = useBiographies();
  const [count, setCount] = useState(0);

  let text = " ";
  if (id === "father") {
    text = currentBios.fatherBio;
  } else if (id === "mother") {
    text = currentBios.motherBio;
  } else if (id === "autobiography") {
    text = currentBios.autobio;
  }
  return (
    <View style={FMContainers.fMElement}>
      <View style={FMContainers.Title}>
        <Text style={texts.fMTitle}> {name} </Text>
      </View>
      <View style={FMContainers.Body}>
        <TextInput
          placeholder="Add text to your Biography here"
          placeholderTextColor="grey"
          style={{ backgroundColor: "lightblue", height: 50 }}
          onChangeText={(text) => {
            let cnt = 0;
            for (let i = 0; i < text.length; i++) {
              if (text[i] != " ") {
                cnt++;
              }
            }
            setCount(cnt);
            update(text);
          }}
        ></TextInput>
        <Text>Number of Characters: {count}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
}
