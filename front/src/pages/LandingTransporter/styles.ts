import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginVertical: 20,
  },

  transporterList: {
    alignContent: "space-between",
    alignSelf: "center",
    width: "80%",
    borderWidth: 1,
    borderRadius: 20,
  },

  headerText: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    fontSize: 25,
    color: "#4B65C2",
    marginBottom: 30,
  },

  cardContainer: {
    marginTop: 20,
    marginBottom: -100,
  },

  card: {
    flex: 1,
    flexDirection: "row",
    borderColor: "#FF0FF0",
    height: "100%",
    marginBottom: 150,
    justifyContent: "space-evenly",
  },

  leftCard: {},

  middleCard: {},

  name: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    textAlign: "center",
  },

  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    textAlign: "center",
    color: "#777",
  },

  rightCard: {},

  confirmButton: {
    backgroundColor: "#55EE66",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 40,
  },

  denyButton: {
    backgroundColor: "#FF6666",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
  },

  transporterHistoryContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },

  scheduleHistoryTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 25,
    color: "#526FD4",
    marginBottom: 20,
    alignSelf: "center",
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

  scheduleInfoContentName: {
    color: "#526FD4",
    fontFamily: "Poppins_600SemiBold",
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

  transporterProfileGlobalContainer: {
    flex: 1,
  },

  transporterProfileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },

  transporterProfileName: {
    fontSize: 30,
    fontFamily: "Poppins_600SemiBold",
    color: "#4B65C2",
    marginBottom: 40,
  },

  transporterProfileInfo: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    color: "#4B65C2DD",
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
});
