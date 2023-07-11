import React from "react";
/** React Components */
import { View, Button } from "react-native";
/** Custom Components */
import FamilyMemberBiography from "../Components/BiographiesComponents/FamilyMemberBiography"; // Global
/** Styles */
import BioContainers from "../Styles/Containers/BioContainers";
import GeneralContainers from "../Styles/Containers/GeneralContainers";
/** Hooks */
import { useState } from "react"; // Local
import { usePersonalInfo } from "../Contexts/PersonalnfoContext"; // Global
import { useBiographies } from "../Contexts/BiographiesContext"; // Global
import { useEffect } from "react"; // Side effects
/** Asynchronous Storage (Persistent Storage) */
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Autobiography() {
  const { currentBios, setCurrentBios } = useBiographies();
  const { currentPI } = usePersonalInfo();
  const [autobio, setAutobio] = useState("");
  const updateAutobio = (text) => {
    setAutobio(text);
  };
  useEffect(() => {
    getBiographiesData();
  }, []);
  const getBiographiesData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@BiographiesInfo");
      let data = null;
      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
        setCurrentBios(data);
        console.log("just set Biographies Info");
      } else {
        console.log("just read a null value from Storage");
        setCurrentBios({
          autobio: "",
          fatherBio: "",
          motherBio: "",
        });
      }
    } catch (e) {
      console.log("error in getBiographiesData ");
      console.dir(e);
    }
  };

  const storeBiographiesData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@BiographiesInfo", jsonValue);
      console.log("just stored " + jsonValue);
      setCurrentBios(value);
    } catch (e) {
      console.log("error in storeBiographiesData ");
      console.dir(e);
    }
  };
  return (
    <View style={GeneralContainers.page}>
      <View style={BioContainers.body}>
        <FamilyMemberBiography
          id="autobiography"
          name={currentPI.name}
          update={updateAutobio}
        />
        <Button
          title="Submit text"
          color="#841584"
          onPress={() => {
            storeBiographiesData({
              autobio: currentBios.autobio + autobio,
              fatherBio: currentBios.fatherBio,
              motherBio: currentBios.motherBio,
            });
          }}
        ></Button>
        <Button
          title="Clear"
          color="#a881af"
          onPress={() => {
            storeBiographiesData({
              autobio: "",
              fatherBio: currentBios.fatherBio,
              motherBio: currentBios.motherBio,
            });
          }}
        ></Button>
      </View>
    </View>
  );
  // bottom menu from the tab navigator
}
