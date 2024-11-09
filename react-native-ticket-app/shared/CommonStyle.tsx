import { StyleSheet } from "react-native";

export const commonStyle = StyleSheet.create({
  shadowStyle: {
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  TextInput: {
    fontSize: 16,
    height: 32,
    borderColor: "grey",
    borderWidth: 1,
  },

  ["fs-3L"]: {
    fontSize: 48,
  },
  ["fs-2L"]: {
    fontSize: 36,
  },
  ["fs-L"]: {
    fontSize: 24,
  },
  Title: { fontSize: 36, marginVertical: 10 },
});
