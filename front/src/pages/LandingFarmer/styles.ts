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

  datePicker: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1.4,
    borderColor: "#4B65C2",
    borderRadius: 20,
    height: 56,
    paddingHorizontal: 24,
    marginBottom: 35,
    marginHorizontal: 20,
    width: "89%",
  },

  datePickerText: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#4B65C2",
    marginHorizontal: 30,
  },

  farmerProfileGlobalContainer: {
    flex: 1,
  },

  farmerProfileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -100,
  },

  farmerProfileName: {
    fontSize: 30,
    fontFamily: "Poppins_600SemiBold",
    color: "#4B65C2",
    marginBottom: 40,
  },

  farmerProfileInfo: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    color: "#4B65C2DD",
  },

  farmerHistoryContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },

  scheduleInfo: {
    flexDirection: "row",
  },

  scheduleInfoTitle: {
    fontFamily: "Poppins_600SemiBold",
  },

  scheduleInfoContent: {
    color: "#0007",
    fontFamily: "Poppins_400Regular",
  },

  scheduleInfoContentNon: {
    color: "#FF0066",
    fontFamily: "Poppins_400Regular",
  },

  scheduleContainer: {
    borderWidth: 1,
    borderRadius: 20,
    width: 400,
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#F2F5FA",
    elevation: 15,
  },

  horizontalRule: {
    marginTop: 10,
    marginBottom: 10,
  },
});
