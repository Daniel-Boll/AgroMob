import React, { useState } from "react";

import { SafeAreaView, View, Text, Button } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-datepicker";

import ButtonConfirm from "../../../../components/ButtonConfirm";
import InputButton from "../../../../components/InputButton";

import { useNavigation } from "@react-navigation/native";
import formatTime from "../../../../utils/utils";

import { styles } from "./styles";
import DateSelect from "../../../../components/DateSelect";

const RegisterProducer: React.FC = () => {
  const [cpf, setCPF] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [today, _] = useState(
    formatTime(Date.now()).replace(/\//g, "-").toString()
  );

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        {/* Título */}
        <Text style={styles.info}>Dados pesssoais</Text>

        {/* Linha horizontal */}
        <View style={styles.horizontalRule} />

        <View style={styles.formContainer}>
          {/* Input CPF */}
          <InputButton
            text="CPF (apenas números)"
            keyboard="numeric"
            maxLength={11}
            value={cpf}
            onChange={setCPF}
          />

          {/* <DateSelect
            minDate="1-1-1940"
            maxDate={today}
            variable={aniversario}
            setVariable={setAniversario}
            placeholder="Data de Nascimento"
          /> */}

          <DatePicker
            style={styles.datePicker}
            placeholder={aniversario != "" ? aniversario : "Data de Nascimento"}
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
          {/* Modal ao invés de trocar de página */}
          <View>
            <RectButton>
              <Text style={styles.buttonText}>Local de carregamento</Text>
            </RectButton>
          </View>

          {/* Botão para enviar a foto de perfil */}
          {/* Modal ao invés de trocar de página */}
          <View>
            <RectButton>
              <Text style={styles.buttonText}>Foto de perfil</Text>
            </RectButton>
          </View>

          {/* Next page tem que pensar */}
          <ButtonConfirm text="Cadastrar" nextPage={"Login"}></ButtonConfirm>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterProducer;
