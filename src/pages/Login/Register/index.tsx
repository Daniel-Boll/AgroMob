import React, { useState } from "react";

import { SafeAreaView, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonConfimr from "../../../components/ButtonConfirm"

import { useNavigation } from "@react-navigation/native";

import InputButton from "../../../components/InputButton";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

  const handleRegisterSecond = () => {
    navigation.navigate("RegisterSecond");
  };

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
          <InputButton text="Nome Complete" capitalize="words" />

          {/* Input e-mail */}
          <InputButton
            text="E-mail"
            keyboard="email-adress"
            autoComplete="email"
          />

          {/* Input senha */}
          <InputButton
            text="Senha (min. 6 carácteres)"
            secureText={true}
            autoComplete="password"
          />

          <DropDownPicker
            style={styles.drop}
            items={[
              { label: "Transportador", value: "transp" },
              { label: "Produtor", value: "prod" },
            ]}
            placeholder="Escolha sua função"
            labelStyle={{
              fontSize: 16,
              color: "#4B65C2",
              fontFamily: "Poppins_600SemiBold",
              textAlign: "center",
            }}
            containerStyle={{
              //parte do style do "botão"
              height: 56,
              marginBottom: 35,
              marginHorizontal: 20,
            }}
            dropDownStyle={{
              //parte do style do dropdown
              backgroundColor: "#FFF",
              borderColor: "#4B65C2",
            }}
          />
          {/* 
            TODO: Habilitar o botão de cadastrar
            apenas quando todas as informações forem
            dadas.
           */}

          {/* Botão cadastrar */}
          <ButtonConfimr text={"Continuar"}></ButtonConfimr>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
