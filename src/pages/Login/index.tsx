import React, { useState } from "react";

import { SafeAreaView, Text, TextInput, View } from "react-native";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "@react-native-community/checkbox";

import { styles } from "./styles";
import Facebook_logo from "../../images/Facebook_logo";
import Gmail_logo from "../../images/Gmail_logo";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stillLogged, setStillLogged] = useState(false);

  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("RegisterSecond");
  };

  const handleLogin = () => {
    if (email == "a@a" && password == "a") {
      navigation.navigate("LandingFarmer");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Input e-mail */}
      <TextInput
        placeholder="E-mail ou Telefone"
        keyboardType="email-address"
        autoCompleteType="email"
        placeholderTextColor={"#4B65C2"}
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCompleteType="email" //Sugere emails
      />

      {/* Input senha */}
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        autoCompleteType="password"
        placeholderTextColor={"#4B65C2"}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCompleteType="password"
      />

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={stillLogged}
          onValueChange={setStillLogged}
          style={styles.checkbox}
          tintColors={{ true: "#4B65C2", false: "#4B65C2" }}
        />
        <Text style={styles.label}>Manter-se conectado?</Text>
      </View>

      {/* Botão entrar */}
      <View style={styles.loginButtonContainer}>
        <RectButton style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </RectButton>
      </View>

      {/* Linha */}
      <View style={styles.horizontalRule} />

      {/* Botões Facebook e Google  */}
      <View style={styles.loginFGContainer}>
        <TouchableOpacity style={styles.facebookButton}>
          <Facebook_logo />
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Gmail_logo />
        </TouchableOpacity>
      </View>

      {/* Infos */}
      <View style={styles.infoContainer}>
        <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>
        <Text style={styles.register} onPress={handleRegister}>
          Primeiro acesso? Cadastra-se
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
