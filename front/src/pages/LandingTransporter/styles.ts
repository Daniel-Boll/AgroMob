import { StyleSheet } from "react-native";

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
    backgroundColor: "#00FA9A",
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
    backgroundColor: "#FFAACC",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
  },
});
