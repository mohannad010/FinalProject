import { StyleSheet } from "react-native";

const PIContainers = StyleSheet.create({
  pIElement: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "bisque",
  },
  pIBody: {
    flex: 10,
    flexDirection: "row",
  },
  singlePI: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
  },
  singlePIHeader: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  singlePIBody: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});

export default PIContainers;
