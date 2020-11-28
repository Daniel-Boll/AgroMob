import React, { useState } from "react";

import { SafeAreaView, Text, TextInput, View } from "react-native";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "@react-native-community/checkbox";

import { styles } from "./styles";
import Facebook_logo from "../../images/Facebook_logo";
import Gmail_logo from "../../images/Gmail_logo";

import InputButton from "../../components/InputButton";
import ButtonConfirm from "../../components/ButtonConfirm";
import api from "../../services/api";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stillLogged, setStillLogged] = useState(false);

  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleLogin = () => {
    api.get("/users").then((response) => {
      const producerUser = response.data["producer"]
        .map((producerInfo: any) => {
          if (
            producerInfo.user.email == email &&
            producerInfo.user.password == password
          ) {
            return producerInfo.id;
          }
        })
        .filter((user: any) => user != undefined);

      const transporterUser = response.data["transporter"]
        .map((transporterInfo: any) => {
          if (
            transporterInfo.user.email == email &&
            transporterInfo.user.password == password
          ) {
            return transporterInfo.id;
          }
        })
        .filter((user: any) => user != undefined);

      if (producerUser.length) {
        navigation.navigate("LandingFarmer", { id: producerUser[0] });
      } else if (transporterUser.length) {
        navigation.navigate("LandingTransporter", { id: transporterUser[0] });
      } else {
        // Usuário e senha errados.
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Input e-mail */}
      <InputButton
        text="E-mail"
        keyboard="email-address"
        autoComplete="email"
        capitalize="none"
        value={email}
        onChange={setEmail}
      />

      {/* Input senha */}
      <InputButton
        text="Senha"
        secureText={true}
        autoComplete="password"
        value={password}
        onChange={setPassword}
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
      <View style={styles.enterButtonContainer}>
        <RectButton style={styles.enterButton} onPress={handleLogin}>
          <Text style={styles.enterButtonText}>{"Entrar"}</Text>
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
