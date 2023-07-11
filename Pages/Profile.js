import React from "react";
/** Hooks */
import { usePersonalInfo } from "../Contexts/PersonalnfoContext"; // Global
import { useEffect } from "react"; // Side effect
/** React Components */
import { View } from "react-native";
/** Styles */
import GeneralContainers from "../Styles/Containers/GeneralContainers";
/** Custom Components */
import Identifiers from "../Components/ProfileComponents/Identifiers";
import PrivateInfo from "../Components/ProfileComponents/PrivateInfo";
/** Asynchronous Storage (Persistent Storage) */
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const { setCurrentPI } = usePersonalInfo();

  useEffect(() => {
    getPersonalInfo();
  }, []);

  const getPersonalInfo = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@privateInfo");
      let data = null;
      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
        setCurrentPI(data);
        console.log("just set Personal Info");
      } else {
        console.log("just read a null value from Storage");
        setCurrentPI({
          name: "",
          birthday: "",
          age: 0,
          SiblingsCount: 0,
          fatherName: "",
          motherName: "",
        });
      }
    } catch (e) {
      console.log("error in getPersonalInfo ");
      console.dir(e);
    }
  };
  const storePersonalInfo = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@privateInfo", jsonValue);
      setCurrentPI(value);
      console.log("just stored " + jsonValue);
    } catch (e) {
      console.log("error in storePersonalInfo ");
      console.dir(e);
    }
  };

  return (
    <View style={GeneralContainers.page}>
      <PrivateInfo />
      <View style={GeneralContainers.body}>
        <Identifiers storePersonalInfo={storePersonalInfo} />
      </View>
    </View>
  );
};

export default Profile;
