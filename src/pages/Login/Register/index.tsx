import React, { useState } from "react";

import { SafeAreaView, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import DropDownPicker from "react-native-dropdown-picker";
import ButtonConfirm from "../../../components/ButtonConfirm";

import { useNavigation } from "@react-navigation/native";

import InputButton from "../../../components/InputButton";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Escolha sua função");

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
          <InputButton
            text="Nome Complete"
            capitalize="words"
            value={name}
            onChange={setName}
          />

          {/* Input e-mail */}
          <InputButton
            text="E-mail"
            keyboard="email-adress"
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

          <DropDownPicker
            style={styles.drop}
            items={[
              { label: "Transportador", value: "Transportador" },
              { label: "Produtor", value: "Produtor" },
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
            onChangeItem={(item) => setRole(item.value)}
          />
          {/* 
            TODO: Habilitar o botão de cadastrar
            apenas quando todas as informações forem
            dadas.
           */}

          {/* Botão cadastrar */}
          <ButtonConfirm text={"Continuar"} nextPage={role}></ButtonConfirm>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
