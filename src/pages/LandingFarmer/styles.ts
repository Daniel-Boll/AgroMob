import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  formContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 80,
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

  loginButtonContainer: {
    flexDirection: "row",
    marginBottom: 40,
    alignContent: "center",
    justifyContent: "center",
  },

  loginButton: {
    backgroundColor: "#526FD4",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    width: Dimensions.get("window").width - 30,
    marginTop: 32,
  },

  loginButtonText: {
    fontFamily: "Poppins_800ExtraBold",
    fontSize: 18,
    color: "#FFF",
  },

  info: {
    fontFamily: "Poppins_600SemiBold",
    color: "#4B65C2",
    fontSize: 22,
    textAlign: "center",
    marginTop: -50,
    marginBottom: 30,
  },
});
