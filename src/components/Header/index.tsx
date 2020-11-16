import React from "react";
import { SafeAreaView, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

import AgroMob_logo from "../../images/AgroMob_logo";
import AgroMob_blue_logo from "../../images/AgroMob-blue-logo.png";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface HeaderProps {
  return?: boolean;
  menu?: boolean;
  color?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const navigation = useNavigation();

  const handleReturn = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Return logo */}
      {props.return ? (
        <Feather
          name="arrow-left"
          size={30}
          color="#4B65C2"
          onPress={navigation.goBack}
        />
      ) : (
        <View></View>
      )}

      {/* AgroMob logo */}
      <AgroMob_logo color={props.color}/>

      {/* Menu logo */}
      {props.menu ? (
        <Feather name="menu" size={30} color="#4B65C2"></Feather>
      ) : (
        <View></View>
      )}
    </SafeAreaView>
  );
};

export default Header;
