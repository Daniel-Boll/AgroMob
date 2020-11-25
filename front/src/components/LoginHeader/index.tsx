import React from "react";

import { View, Text } from "react-native";

import EllipseLogo from "../../images/AgroMob_ellipseLogo";
import { styles } from "./styles";

const LoginHeader: React.FC = () => {
  return (
    <View style={styles.logoContainer}>
      <EllipseLogo />
    </View>
  );
};

export default LoginHeader;
