import { StyleSheet } from "react-native";

const IDContainers = StyleSheet.create({
  IDs: {
    flex: 1.1,
    flexDirection: "column",
  },
  IDsHeader: {
    flex: 0.36,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  singleID: {
    flex: 0.8,
    flexDirection: "column",
  },
  singleIDTitle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  singleIDInput: {
    flex: 1,
  },
});

export default IDContainers;
