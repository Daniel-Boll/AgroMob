import React, { useState } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-datepicker";
import ButtonConfirm from "../../../../components/ButtonConfirm";

import { useNavigation } from "@react-navigation/native";

const RegisterProducer: React.FC = () => {
  const [cpf, setCPF] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [data, setData] = useState("");

  const navigation = useNavigation();

  const handlePictureRegister = () => {
    navigation.navigate("PictureRegisterProfile");
  };

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

            <DatePicker
              style={styles.datePicker}
              //date={data}
              placeholder="Data de Nascimento"
              mode="date"
              format="DD/MM/YYYY"
              minDate="01-01-1930"
              maxDate="31-12-2012"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                },
                dateIcon: {
                  display: "none",
                },
                placeholderText: {
                  fontSize: 16,
                  fontFamily: "Poppins_600SemiBold",
                  color: "#4B65C2",
                },
              }}
            />

          <DropDownPicker
            style={styles.drop}
            items={[
              { label: "Masculino", value: "Masc" },
              { label: "Feminino", value: "fem" },
              { label: "Outro", value: "outro" },
            ]}
            placeholder="Gênero"
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

          {/* Botão para configurar o local de carregamento */}
          <View style={styles.input}>
            <RectButton>
              <Text style={styles.buttonText}>Local de carregamento</Text>
            </RectButton>
          </View>
          {/* Botão para enviar a foto de perfil */}
          <View>
            <RectButton onPress={handlePictureRegister} style={styles.input}>
              <Text style={styles.buttonText}>Foto de perfil</Text>
            </RectButton>
          </View>
          
          <ButtonConfirm text="Cadastrar"></ButtonConfirm>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterProducer;
