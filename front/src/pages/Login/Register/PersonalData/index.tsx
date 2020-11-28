import React, { useState } from "react";

import { SafeAreaView, View, Text } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-datepicker";

import ButtonConfirm from "../../../../components/ButtonConfirm";
import InputButton from "../../../../components/InputButton";

import { formatTime } from "../../../../utils/utils";

import { styles } from "./styles";

const PersonalData = (props: any) => {
  const [cpf, setCPF] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [role, setRole] = useState("Escolha sua função");
  const [contact, setContact] = useState("");
  const [genre, setGenre] = useState("");
  // const [profilePicture, setProfilePicture] = useState("");

  const [today, _] = useState(
    formatTime(Date.now()).replace(/\//g, "-").toString()
  );

  const { name, email, password } = props.route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>Dados pesssoais</Text>

          <View style={styles.horizontalRule} />

          <View style={styles.formContainer}>
            <InputButton
              text="CPF (apenas números)"
              keyboard="numeric"
              maxLength={11}
              value={cpf}
              onChange={setCPF}
            />

            <DatePicker
              style={styles.datePicker}
              placeholder={
                aniversario != "" ? aniversario : "Data de Nascimento"
              }
              mode="date"
              format="DD/MM/YYYY"
              minDate="1-1-1940"
              maxDate={today}
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
              onDateChange={(date) => setAniversario(date.toString())}
            />

            <DropDownPicker
              style={styles.drop}
              items={[
                { label: "Masculino", value: "Masc" },
                { label: "Feminino", value: "Fem" },
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
              onChangeItem={(item) => setGenre(item.value)}
            />

            <DropDownPicker
              style={styles.drop}
              items={[
                { label: "Transportador", value: "Transportador" },
                { label: "Produtor", value: "Farmer" },
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

            <View style={styles.formContainer}>
              <InputButton
                text="Número para Contato"
                keyboard="numeric"
                maxLength={20}
                value={contact}
                onChange={setContact}
              />
            </View>

            <View>
              <RectButton>
                <Text style={styles.buttonText} onPress={() => {}}>
                  Foto de perfil
                </Text>
              </RectButton>
              {/* <Text onPress={navigation.navigate("Gallery")}>Here</Text> */}
            </View>

            <ButtonConfirm
              text="Cadastrar"
              nextPage={role}
              info={{
                name,
                email,
                password,
                cpf,
                aniversario,
                genre,
                contact,
                // profile_picture
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalData;
