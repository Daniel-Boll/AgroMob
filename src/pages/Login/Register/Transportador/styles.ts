import { Dimensions, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#F2F5FA",
  },

  infoContainer: {
    flex: 1,
    marginHorizontal: 15,
  },

  info: {
    fontFamily: "Poppins_600SemiBold",
    color: "#4B65C2",
    fontSize: 28,
    textAlign: "center",
  },

  horizontalRule: {
    marginTop: 30,
    marginHorizontal: 24,
    borderBottomColor: "#777",
    borderBottomWidth: 1,
    marginBottom: 30,
  },

  formContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: "#4B65C2",
    borderRadius: 20,
    height: 56,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginBottom: 35,
    textAlignVertical: "top",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginHorizontal: 20,
  },

  buttonText: {
    borderColor: "#000",
    textAlignVertical: "top",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#4B65C2",
  },
});
