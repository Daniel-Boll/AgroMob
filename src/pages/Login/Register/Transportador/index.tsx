import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import ButtonConfirm from "../../../../components/ButtonConfirm";

const Transportador: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        {/* Título */}
        <Text style={styles.info}>Dados Obrigatórios</Text>

        {/* Linha horizontal */}
        <View style={styles.horizontalRule} />

        <View style={styles.formContainer}>
          {/* Botão para Acordos Legais */}
          <RectButton style={styles.input}>
            <Text style={styles.buttonText}>Acordos Legais</Text>
          </RectButton>

          <RectButton style={styles.input}>
            <Text style={styles.buttonText}>CNH com EAR</Text>
          </RectButton>

          <RectButton style={styles.input}>
            <Text style={styles.buttonText}>CRLV</Text>
          </RectButton>

          <ButtonConfirm text={"Cadastrar"} nextPage={"Login"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transportador;
