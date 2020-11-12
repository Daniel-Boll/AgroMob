import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
// import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import RadioButton from "../../../components/RadioButton";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [funcao, setFuncao] = useState([
    { id: 1, value: true, name: "Produtor", selected: false },
    { id: 2, value: false, name: "Transportador", selected: false },
  ]);

  const onRadioBtnClick = (item: any) => {
    let updatedState = funcao.map((funcaoItem) =>
      funcaoItem.id === item.id
        ? { ...funcaoItem, selected: true }
        : { ...funcaoItem, selected: false }
    );
    setFuncao(updatedState);
  };

  const possibleFunctions = ["Produtor", "Transportador"];

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
          <TextInput
            placeholder="Nome Completo"
            placeholderTextColor={"#4B65C2"}
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          {/* Input e-mail */}
          <TextInput
            placeholder="E-mail"
            placeholderTextColor={"#4B65C2"}
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          {/* Input senha */}
          <TextInput
            placeholder="Senha (min. 6 carácteres)"
            placeholderTextColor={"#4B65C2"}
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />

          {/* Radio Button das funções */}
          <Text style={styles.radioButtonLabel}>Escolha sua função</Text>
          {funcao.map((item) => {
            return (
              <RadioButton
                onPress={() => onRadioBtnClick(item)}
                selected={item.selected}
                key={item.id}
              >
                {item.name}
              </RadioButton>
            );
          })}

          {/* 
            TODO: Habilitar o botão de cadastrar
            apenas quando todas as informações forem
            dadas.
           */}

          {/* Botão cadastrar */}
          <View style={styles.registerButtonContainer}>
            <RectButton style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Cadastrar</Text>
            </RectButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
