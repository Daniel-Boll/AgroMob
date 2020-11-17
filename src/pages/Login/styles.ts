import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 260,
    backgroundColor: "#F2F5FA",
  },

  checkboxContainer: {
    flexDirection: "row",
    marginTop: 3,
    alignContent: "center",
    justifyContent: "center",
  },

  checkbox: {
    alignSelf: "center",
    borderRadius: 20,
    color: "#4B65C2",
  },

  label: {
    marginTop: 5,
    fontFamily: "Poppins_400Regular",
    color: "#4B65C2",
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

  horizontalRule: {
    marginHorizontal: 24,
    borderBottomColor: "#777",
    borderBottomWidth: 1,
  },

  loginFGContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    marginTop: 30,
  },

  facebookButton: {
    backgroundColor: "#1976D2",
    height: 100,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    borderRadius: 20,
  },

  googleButton: {
    backgroundColor: "#F4C8C6",
    height: 100,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  forgetPassword: {
    fontFamily: "Poppins_400Regular",
    color: "#4B65C2",
    fontSize: 18,
  },

  register: {
    fontFamily: "Poppins_400Regular",
    color: "#4B65C2",
    fontSize: 18,
  },
});
