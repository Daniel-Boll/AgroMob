import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import LoginHeader from "./components/LoginHeader";
import Register from "./pages/Login/Register";
import RegisterSecond from "./pages/Login/Register/Produtor";
import Header from "./components/Header";
import LandingFarmer from "./pages/LandingFarmer";

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#F2F5FA" },
        }}
      >
        <Screen
          name="Login"
          component={Login}
          options={{ headerShown: true, header: () => <LoginHeader /> }}
        />
        <Screen
          name="LandingFarmer"
          component={LandingFarmer}
          options={{
            headerShown: true,
            header: () => <Header return={true} menu={true} />,
          }}
        />
        <Screen name="Landing" component={Landing} />
        <Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            header: () => <Header return={true} />,
          }}
        />
        <Screen
          name="RegisterSecond"
          component={RegisterSecond}
          options={{
            headerShown: true,
            header: () => <Header return={true} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
