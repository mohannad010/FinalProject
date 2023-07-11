import { StyleSheet } from "react-native";

const SourcesContainer = StyleSheet.create({
  page: {
    marginLeft: 5,
    flex: 1,
    flexDirection: "column",
  },
  title: {
    flex: 1,
    backgroundColor: "bisque",
  },
  body: {
    flex: 7,
    flexDirection: "column",
    backgroundColor: "aliceblue",
  },
  bodyTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  bodyBody: { flex: 10, flexDirection: "column" },
  button: {
    backgroundColor: "#4681f4",
    borderRadius: 4,
    flex: 1,
  },
  footer: {
    flex: 2,
  },
});

export default SourcesContainer;
