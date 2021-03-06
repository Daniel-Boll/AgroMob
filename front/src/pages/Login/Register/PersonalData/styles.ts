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

  buttonText: {
    textAlignVertical: "top",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#4B65C2",
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
});
