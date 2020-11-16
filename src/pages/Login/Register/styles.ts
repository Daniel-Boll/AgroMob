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
    fontSize: 18,
    textAlign: "center",
  },

  horizontalRule: {
    marginTop: 30,
    marginHorizontal: 24,
    borderBottomColor: "#777",
    borderBottomWidth: 1,
    marginBottom: 30,
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

  radioButtonLabel: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    color: "#4B65C2",
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
  },

  formContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  drop: {
    borderColor: "#4B65C2",
    fontSize: 16,
    borderWidth: 1.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontFamily: "Poppins_600SemiBold",
  },

  registerButtonContainer: {
    flexDirection: "row",
    marginBottom: 40,
    alignContent: "center",
    justifyContent: "center",
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
});
