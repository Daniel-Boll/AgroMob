import React from "react";

import { SafeAreaView, View } from "react-native";

import Logo from "../../images/AgroMob_logo";
import { styles } from "./styles";

const Landing: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo fontColor="#4DD674" />
      </View>
    </SafeAreaView>
  );
};

export default Landing;
