import React, { useState } from "react";

import { SafeAreaView, View, Text } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonConfirm from "../../../components/ButtonConfirm";

import { useNavigation } from "@react-navigation/native";

import InputButton from "../../../components/InputButton";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        {/* Título */}
        <Text style={styles.info}>
          Informe seus dados para realizar o cadastro! 👨‍🌾
        </Text>

        {/* Linha horizontal */}
        <View style={styles.horizontalRule} />

        <View style={styles.formContainer}>
          {/* Input nome */}
          <InputButton
            text="Nome Completo"
            capitalize="words"
            value={name}
            onChange={setName}
          />

          {/* Input e-mail */}
          <InputButton
            text="E-mail"
            keyboard="email-address"
            autoComplete="email"
            value={email}
            onChange={setEmail}
          />

          {/* Input senha */}
          <InputButton
            text="Senha (min. 6 carácteres)"
            secureText={true}
            autoComplete="password"
            value={password}
            onChange={setPassword}
          />

          {/* 
            TODO: Habilitar o botão de cadastrar
            apenas quando todas as informações forem
            dadas.
           */}

          {/* Botão cadastrar */}
          <ButtonConfirm
            text={"Continuar"}
            nextPage={"PersonalData"}
            info={{
              name,
              email,
              password,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
