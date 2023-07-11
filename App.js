import React from "react";
/** Pages */
import Profile from "./Pages/Profile";
import Autobiography from "./Pages/Autobiography";
import MotherBiography from "./Pages/MotherBiogrophy";
import FatherBiography from "./Pages/FatherBiography";
import Sources from "./Pages/Sources";
/** Navigation */
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/** Contexts */
import PersonalnfoProvider from "./Contexts/PersonalnfoContext";
import BiographiesProvider from "./Contexts/BiographiesContext";

const Tab = createBottomTabNavigator();

export default function App() {
  const personalData = {
    name: "",
    birthday: "",
    age: 0,
    SiblingsCount: 0,
    fatherName: "",
    motherName: "",
  };
  const BiographiesData = {
    autobio: "",
    fatherBio: "",
    motherBio: "",
  };
  return (
    <BiographiesProvider value={BiographiesData}>
      <PersonalnfoProvider value={personalData}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="profile" component={Profile} />
            <Tab.Screen name="Sources" component={Sources} />
            <Tab.Screen name="Autobiography" component={Autobiography} />
            <Tab.Screen name="Father's Biography" component={FatherBiography} />
            <Tab.Screen name="Mother's Biography" component={MotherBiography} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersonalnfoProvider>
    </BiographiesProvider>
  );
}
