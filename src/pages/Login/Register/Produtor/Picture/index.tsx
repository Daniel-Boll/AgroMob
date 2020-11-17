import React, { useState } from "react";

import { SafeAreaView, View, Text, Button } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

const PictureRegister: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Foto de perfil</Text>

        {/* Linha horizontal */}
        <View style={styles.horizontalRule} />
      </View>
    </SafeAreaView>
  );
};

export default PictureRegister;
