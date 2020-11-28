import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
import ButtonConfirm from "../../../../components/ButtonConfirm";
import InputButton from "../../../../components/InputButton";
import api from "../../../../services/api";
import { useNavigation } from "@react-navigation/native";

const Transportador: React.FC = (props: any) => {
  const [legalAgreements, setLegalAgreements] = useState("");
  const [cnh, setCNH] = useState("");
  const [crlv, setCRLV] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [price, setPrice] = useState("");

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
    const producerInfo = { amI: false };
    const transporterInfo = {
      amI: true,
      legal_agreements: legalAgreements,
      cnh,
      crlv,
      vehicle,
      price,
      assessments: "{}",
    };

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

    console.log(userInformation);

    api
      .post("/users", userInformation)
      .then((response) =>
        navigation.navigate("LandingTransporter", {
          id: response.data.userInfo.id,
        })
      )
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        {/* Título */}
        <Text style={styles.info}>Dados Obrigatórios</Text>

        {/* Linha horizontal */}
        <View style={styles.horizontalRule} />

        <View style={styles.formContainer}>
          <ScrollView>
            {/* Botão para Acordos Legais */}

            <InputButton
              text="Acordos Legais"
              value={legalAgreements}
              onChange={setLegalAgreements}
            />

            <InputButton text="CNH com EAR" value={cnh} onChange={setCNH} />

            <InputButton text="CRLV" value={crlv} onChange={setCRLV} />

            <InputButton text="Veículo" value={vehicle} onChange={setVehicle} />

            <InputButton text="Preço" value={price} onChange={setPrice} />

            <View style={styles.registerButtonContainer}>
              <RectButton
                style={styles.registerButton}
                onPress={handleRegister}
              >
                <Text style={styles.registerButtonText}>{"Cadastrar"}</Text>
              </RectButton>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transportador;
