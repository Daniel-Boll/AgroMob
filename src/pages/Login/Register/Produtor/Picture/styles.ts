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
});
