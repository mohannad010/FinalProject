import React from "react";
/** React Components */
import { View, Text } from "react-native";
/** Custom Components */
import SingleIdentifier from "./SingleIdentifier";
import SaveInfoButton from "./SaveInfoButton";
/** Styles */
import IDContainers from "../../Styles/Containers/IDContainers";
import texts from "../../Styles/Texts";
/** Hooks */
import { useState } from "react"; // Local

/**
 * This function creates six You answer each and
 * then click the save button to save your answer
 * in Asynchronous storage.
 * @returns
 * This component returns 6 Identifiers and a save
 * button.
 * @param storePersonalInfo Allows you to store your
 * personal information in Asyncronous storage
 * through a function in the caller
 * (sending data from child to parent).
 */
export default function Identifiers({ storePersonalInfo }) {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    birthday: "",
    age: 0,
    numberOfSiblings: 0,
    fatherName: "",
    motherName: "",
  });

  /**This functions sets the value of the local state variable personalInfo
   * based on the given id of the Identifier and
   * the text written in its TextInput component
   * @param id id of the singleIdentifier element.
   * @param text the text written as an answer in a SingleIdentifier component.
   */
  const update = ({ id, text }) => {
    if (id === "name") {
      setPersonalInfo({
        name: text,
        birthday: personalInfo.birthday,
        age: personalInfo.age,
        SiblingsCount: personalInfo.SiblingsCount,
        fatherName: personalInfo.fatherName,
        motherName: personalInfo.motherName,
      });
    } else if (id === "bday") {
      setPersonalInfo({
        name: personalInfo.name,
        birthday: text,
        age: personalInfo.age,
        SiblingsCount: personalInfo.SiblingsCount,
        fatherName: personalInfo.fatherName,
        motherName: personalInfo.motherName,
      });
    } else if (id === "age") {
      setPersonalInfo({
        name: personalInfo.name,
        birthday: personalInfo.birthday,
        age: parseInt(text),
        SiblingsCount: personalInfo.SiblingsCount,
        fatherName: personalInfo.fatherName,
        motherName: personalInfo.motherName,
      });
    } else if (id === "NOS") {
      setPersonalInfo({
        name: personalInfo.name,
        birthday: personalInfo.birthday,
        age: personalInfo.age,
        SiblingsCount: parseInt(text),
        fatherName: personalInfo.fatherName,
        motherName: personalInfo.motherName,
      });
    } else if (id === "FN") {
      setPersonalInfo({
        name: personalInfo.name,
        birthday: personalInfo.birthday,
        age: personalInfo.age,
        SiblingsCount: personalInfo.SiblingsCount,
        fatherName: text,
        motherName: personalInfo.motherName,
      });
    } else if (id === "MN") {
      setPersonalInfo({
        name: personalInfo.name,
        birthday: personalInfo.birthday,
        age: personalInfo.age,
        SiblingsCount: personalInfo.SiblingsCount,
        fatherName: personalInfo.fatherName,
        motherName: text,
      });
    }
  };

  return (
    <View style={IDContainers.IDs}>
      <View style={IDContainers.IDsHeader}>
        <Text style={texts.IDsHeader}>Personal Information</Text>
      </View>
      <SingleIdentifier
        title="Name"
        placeholderText={"Enter name here"}
        id="name"
        update={update}
      />
      <SingleIdentifier
        title="Birthday"
        placeholderText={"Enter birthday here"}
        id="bday"
        update={update}
      />
      <SingleIdentifier
        title="Age"
        placeholderText={"Enter age here"}
        id="age"
        update={update}
      />
      <SingleIdentifier
        title="Number of siblings"
        placeholderText={"Enter number here"}
        id="NOS"
        update={update}
      />
      <SingleIdentifier
        title="Father Name"
        placeholderText={"Enter name here"}
        id="FN"
        update={update}
      />
      <SingleIdentifier
        title="Mother Name"
        placeholderText={"Enter name here"}
        id="MN"
        update={update}
      />
      <SaveInfoButton
        title="SAVE CHANGES"
        store={storePersonalInfo}
        personalInfo={personalInfo}
      />
    </View>
  );
}
