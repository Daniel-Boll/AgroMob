import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { styles } from "./styles";
import { View } from "react-native";

interface TopTabNavigatorProps {
  screens: Array<{
    name: string;
    component: React.FC<{}>;
  }>;
}

const TopTabNavigator: React.FC<TopTabNavigatorProps> = ({ screens }) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#527EF2",
          labelStyle: { fontSize: 12, fontFamily: "Poppins_600SemiBold" },
          style: { backgroundColor: "#F2F5FA" },
        }}
      >
        {screens.map((screen, index) => {
          return (
            <Tab.Screen
              key={index}
              name={screen.name}
              component={screen.component}
            />
          );
        })}
      </Tab.Navigator>
    </View>
  );
};

export default TopTabNavigator;
