import react from "react";
/** React Components */
import { Text, View, Button } from "react-native";
/** Custom Components */
import InputSources from "../Components/SourcesComponents/InputSorces";
import DisplaySources from "../Components/SourcesComponents/DisplaySources";
import SaveAudioButton from "../Components/SourcesComponents/SaveAudioButton";
import SaveWebsiteURIButton from "../Components/SourcesComponents/SaveWebsiteURIButton";
/** Audio */
import { Audio } from "expo-av";
/** Hooks */
import { useState } from "react"; //Local
import { useEffect } from "react"; // Side effect
/** Styles */
import SourcesContainer from "../Styles/Containers/SourcesContainer";
/** Asynchronous Storage (Persistent Storage) */
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Sources() {
  const [sound, setSound] = useState();
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
  const [websiteURI, setWebsiteURI] = useState("");
  const [websiteURIs, setWebsiteURIs] = useState([]);
  const [message, setMessage] = useState("");
  const [sources, setSources] = useState({
    audioRecordingsURIs: [],
    websiteURIs: [],
  });

  useEffect(() => {
    getSources();
    return sound
      ? () => {
          console.log("Unloading Sound");
          //Unloads the media from memory.
          //loadAsync() must be called again in order to be able to play the media.
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  const updateWebsiteURI = (text) => {
    setWebsiteURI(text);
  };
  const updateWebsiteURIs = (data) => {
    setWebsiteURIs(data);
  };
  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        console.log("Starting recording...");
        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );

        console.log("Recording started");
        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    /**
     * Creates and loads a new Sound object to play back the Recording.
     * Note that this will only succeed once the Recording is done recording
     *  and stopAndUnloadAsync() has been called.
     * @return — A Promise that is rejected if creation failed,
     * or fulfilled with the SoundObject.
     * */
    const { sound } = await recording.createNewLoadedSoundAsync();
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
    // Using the spread operator, it spreads the json object literals
    // in the state varriable recording across the array's memory
    let updatedRecordings = [...recordings];
    updatedRecordings.push({
      file: uri,
    });
    setRecordings(updatedRecordings);

    console.log();
    // we update sound so we can use the local state varible sound
    // in another function
    setSound(sound);
  }
  const getSources = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@SourcesInfo");
      let data = null;
      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
        setSources(data);
        console.log("just set sources Info");
      } else {
        console.log("just read a null value from Storage");
        setSources({
          audioRecordingsURIs: [],
          websiteURIs: [],
        });
      }
    } catch (e) {
      console.log("error in getSources");
      console.dir(e);
    }
  };
  const storeSources = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@SourcesInfo", jsonValue);
      setSources(value);
      console.log("just stored " + jsonValue);
    } catch (e) {
      console.log("error in storeSourcesInfo ");
      console.dir(e);
    }
  };

  return (
    <View style={SourcesContainer.page}>
      <View style={SourcesContainer.title}>
        <Text>
          {" "}
          In this page you are supposed to archive the sources you have for your
          biographies: whether they are: Audio or websites
        </Text>
      </View>
      <View style={SourcesContainer.body}>
        <View style={SourcesContainer.bodyTitle}>
          <Text>Sources for the biographies.</Text>
          <Text style={{ color: "red" }}>{message}</Text>
        </View>
        <View style={SourcesContainer.bodyBody}>
          <InputSources
            recording={recording}
            stopRecording={stopRecording}
            startRecording={startRecording}
            updateWebsiteURI={updateWebsiteURI}
          />
          <DisplaySources
            audioSources={JSON.stringify(sources.audioRecordingsURIs)}
            websiteURIsSources={JSON.stringify(sources.websiteURIs)}
          />
        </View>
      </View>
      <View style={SourcesContainer.footer}>
        <SaveAudioButton
          sources={sources}
          storeSources={storeSources}
          recordings={recordings}
          recording={recording}
        />
        <SaveWebsiteURIButton
          sources={sources}
          websiteURI={websiteURI}
          websiteURIs={websiteURIs}
          storeSources={storeSources}
          updateWebsiteURIs={updateWebsiteURIs}
        />
        <Button
          onPress={() => {
            console.log(sound);
            sound.replayAsync();
          }}
          title="Replay"
        ></Button>
        <Button
          color="#5dbea3"
          onPress={() => {
            storeSources({ audioRecordingsURIs: [], websiteURIs: [] });
          }}
          title="Clear"
        ></Button>
      </View>
    </View>
  );
}
