import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { Text, View } from "react-native";

import { styles } from "../ButtonConfirm/styles";
import { useLinkProps, useNavigation } from "@react-navigation/native";

interface ButtonProps {
  text?: string;
  info?: {};
  nextPage: string;
}

const ButtonConfirm: React.FC<ButtonProps> = ({ nextPage, text, info }) => {
  const navigation = useNavigation();

  const handleNextPage = () => {
    navigation.navigate(nextPage, info);
  };

  return (
    <View style={styles.registerButtonContainer}>
      <RectButton style={styles.registerButton} onPress={handleNextPage}>
        <Text style={styles.registerButtonText}>{text ?? ""}</Text>
      </RectButton>
    </View>
  );
};

export default ButtonConfirm;
