import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import LoginHeader from "./components/LoginHeader";
import Register from "./pages/Login/Register";
import PersonalData from "./pages/Login/Register/PersonalData";
import Header from "./components/Header";
import LandingFarmer from "./pages/LandingFarmer";
import Transportador from "./pages/Login/Register/PersonalData";
import LandingTransporter from "./pages/LandingTransporter";

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
          name="LandingTransporter"
          component={LandingTransporter}
          options={{
            headerShown: true,
            header: () => (
              <Header color={"#4b65c2"} return={true} menu={true} />
            ),
          }}
        />

        <Screen name="Landing" component={Landing} />

        <Screen
          name="Login"
          component={Login}
          options={{ headerShown: true, header: () => <LoginHeader /> }}
        />

        <Screen
          name="Transportador"
          component={Transportador}
          options={{
            headerShown: true,
            header: () => <Header color={"#4b65c2"} return={true} />,
          }}
        />

        <Screen
          name="PersonalData"
          component={PersonalData}
          options={{
            headerShown: true,
            header: () => <Header color={"#4b65c2"} return={true} />,
          }}
        />

        <Screen
          name="LandingFarmer"
          component={LandingFarmer}
          options={{
            headerShown: true,
            header: () => (
              <Header color={"#4b65c2"} return={true} menu={true} />
            ),
          }}
        />

        <Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            header: () => <Header color={"#4b65c2"} return={true} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
