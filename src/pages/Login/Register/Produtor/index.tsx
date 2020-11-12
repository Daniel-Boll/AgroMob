import React, { useState } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

const RegisterProducer: React.FC = () => {
  const [cpf, setCPF] = useState("");
  const [aniversario, setAniversario] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        {/* Título */}
        <Text style={styles.info}>Dados pesssoais</Text>

        {/* Linha horizontal */}
        <View style={styles.horizontalRule} />

        <View style={styles.formContainer}>
          {/* Input CPF */}
          <TextInput
            placeholder="CPF (apenas números)"
            placeholderTextColor={"#4B65C2"}
            style={styles.input}
            value={cpf}
            onChangeText={setCPF}
            keyboardType="numeric" //apenas digitos
            maxLength={11} //numero limite
          />

          {/*Input data de nascimento*/}
          <TextInput
            placeholder="Data de nascimento"
            placeholderTextColor={"#4B65C2"}
            style={styles.input}
            value={aniversario}
            onChangeText={setAniversario}
            keyboardType="numeric"
            maxLength={8}
          />

          <View style={styles.input}>
            <RectButton>
              <Text style={styles.buttonText}>Local de carregamento</Text>
            </RectButton>
          </View>
          <View style={styles.input}>
            <RectButton>
              <Text style={styles.buttonText}>Foto de perfil</Text>
            </RectButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterProducer;
