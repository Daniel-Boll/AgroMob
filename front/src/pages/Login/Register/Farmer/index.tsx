import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import { SafeAreaView, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import InputButton from "../../../../components/InputButton";
import api from "../../../../services/api";

import { styles } from "./styles";

const Farmer: React.FC = (props: any) => {
  const [grainType, setGrainType] = useState("");

  const {
    name,
    email,
    password,
    cpf,
    aniversario,
    genre,
    contact,
    // profile_picture
  } = props.route.params;

  const navigation = useNavigation();

  const handleRegister = () => {
    const producerInfo = { amI: true, grain_type: grainType };
    const transporterInfo = { amI: false };

    const userInformation = {
      name: name,
      email: email,
      password: password,
      cpf: cpf.toString(),
      birthday: aniversario,
      genre,
      contact: contact.toString(),
      producerInfo: JSON.stringify(producerInfo),
      transporterInfo: JSON.stringify(transporterInfo),
    };

    api
      .post("/users", userInformation)
      .then((response) =>
        navigation.navigate("LandingFarmer", { id: response.data.userInfo.id })
      )
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Dados Específicos do Produtor</Text>

        <View style={styles.horizontalRule} />

        <View style={styles.formContainer}>
          <InputButton
            text="Tipo do grão"
            value={grainType}
            onChange={setGrainType}
          />
        </View>

        <View style={styles.registerButtonContainer}>
          <RectButton style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>{"Cadastrar"}</Text>
          </RectButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Farmer;
