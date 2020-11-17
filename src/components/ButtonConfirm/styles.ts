import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  registerButton: {
      backgroundColor: "#526FD4",
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      height: 56,
      width: Dimensions.get("window").width - 30,
      marginTop: 32,
  },

  registerButtonText: {
      fontFamily: "Poppins_800ExtraBold",
      fontSize: 18,
      color: "#FFF",
    },

    registerButtonContainer: {
      flexDirection: "row",
      marginBottom: 40,
      alignContent: "center",
      justifyContent: "center",
    },
  });