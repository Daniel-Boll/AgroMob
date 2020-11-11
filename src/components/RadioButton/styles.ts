import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: Dimensions.get("window").width / 2 - 45 - 60,
    marginRight: 45,
    marginBottom: 15,
  },

  radioButton: {
    height: 26,
    width: 26,
    backgroundColor: "#FFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#4B65C2",
    alignItems: "center",
    justifyContent: "center",
  },

  radioButtonIcon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "#6E81C2",
  },

  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#4B65C2",
  },
});
