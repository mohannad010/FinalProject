import React from "react";
/** Styles */
import PIContainers from "../../Styles/Containers/PIContainers";
/** React Components */
import { View } from "react-native";
/** Custom Components */
import SinglePrivateInfo from "./SinglePrivateInfo";
import ProfileImage from "./ProfileImage";
/** Hooks */
import { usePersonalInfo } from "../../Contexts/PersonalnfoContext";
import { useState } from "react";
import { useEffect } from "react";
/** Icons */
import PictureButton from "./PictureButton";
/** Expo (using phone features) */
import * as ImagePicker from "expo-image-picker";
/** Asynchronous Storage (Persistent Storage) */
import AsyncStorage from "@react-native-async-storage/async-storage";

/** It displays on the viewport your private information using the personal information stored in asynchronous storage.
 *
 * @returns a block diplaying your private information.
 */
export default function PrivateInfo() {
  const [selectedImage, setSelectedImage] = useState(null);
  const placeholderImage = require("../../Images/Profile_picture.jpg");
  const { currentPI } = usePersonalInfo();
  useEffect(() => {
    getImageData();
  }, [selectedImage]);

  /** Retrieves a uri for a photo from ascynchrounous
   * storage and updates the selected image
   */
  const getImageData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@ImageInfo");
      console.log("Json value: " + jsonValue);
      let data = null;
      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
        setSelectedImage(data);
        console.log("just set Image Info");
      } else {
        console.log("just read a null value from Storage");
        setSelectedImage(null);
      }
    } catch (e) {
      console.log("error in getimageData ");
      console.dir(e);
    }
  };
  /** An ascyncronous function that stores the photo uri data into ascynchrounous
   * storage and updates the selected image
   * @param value A uri for a photo.
   */
  const storeImageData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@ImageInfo", jsonValue);
      console.log("just stored " + jsonValue);
      setSelectedImage(value);
    } catch (e) {
      console.log("error in storeImageData ");
      console.dir(e);
    }
  };

  /** Allows the user to pick an image from storage*/
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View style={PIContainers.pIElement}>
      <View style={{ flex: 1 }}>
        <ProfileImage
          placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={PIContainers.pIBody}>
        <PictureButton
          title="Add Photo"
          theme="primary"
          onPress={pickImageAsync}
        />
        <PictureButton
          title="Save"
          store={storeImageData}
          selectedImage={selectedImage}
        />
        <SinglePrivateInfo title="Name" info={currentPI.name} />
        <SinglePrivateInfo title="Birthday" info={currentPI.birthday} />
        <SinglePrivateInfo title="Age" info={currentPI.age} />
        <SinglePrivateInfo
          title="Number of Siblings"
          info={currentPI.SiblingsCount}
        />
      </View>
    </View>
  );
}
