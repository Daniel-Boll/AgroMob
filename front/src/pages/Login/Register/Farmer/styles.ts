import { Dimensions, StyleSheet } from "react-native";

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
