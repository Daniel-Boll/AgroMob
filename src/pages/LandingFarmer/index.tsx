import React from "react";

import { View, Text } from "react-native";
import { styles } from "./styles";

import Login from "../Login";
import Register from "../Login/Register";
import TopTabNavigator from "../../components/TopTabNavigator";

const LandingFarmer: React.FC = () => {
  return (
    <TopTabNavigator
      screens={[{ name: "Farmer Form", component: FarmerForm }]}
    />
  );
};

const FarmerForm: React.FC = () => {
  return (
    <View>
      <Text>Working</Text>
    </View>
  );
};

export default LandingFarmer;
