import React, { useState } from "react";

import { View, Text } from "react-native";
import { styles } from "./styles";

import TopTabNavigator from "../../components/TopTabNavigator";
import { RectButton, TextInput } from "react-native-gesture-handler";
import DatePicker from 'react-native-datepicker';
import { color } from "react-native-reanimated";

const LandingFarmer: React.FC = () => {
  return (
    <TopTabNavigator
      screens={[{ name: "Farmer Form", component: FarmerForm }]}
    />
  );
};

const FarmerForm: React.FC = () => {
  const [transportDay, setTransportDay] = useState("");
  const [productType, setProductType] = useState("");
  const [begin, setBegin] = useState("");
  const [destiny, setDestiny] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        {/* Info? */}
        <Text style={styles.info}>
          Informe os dados para efetuar o registro 👩‍🌾
        </Text>

        {/* Input dia */}
        <View>
          <Text style={styles.datePickerText}>
            Data de Carregamento
          </Text>
          <DatePicker
            style={styles.datePicker}
            //date={data}
            mode="date"
            format="DD/MM/YYYY"
            minDate="01-01-1930"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateInput: {
                borderWidth: 0,
              }
            }}
            onDateChange={(date) => console.log(date)} 
          />
        </View>
        {/*
        <TextInput
          placeholder="Dia do Transporte"
          placeholderTextColor={"#4B65C2"}
          style={styles.input}
          value={transportDay}
          onChangeText={setTransportDay}
        /> */}

        {/* Input tipo do produto */}
        <TextInput
          placeholder="Tipo do produto"
          placeholderTextColor={"#4B65C2"}
          style={styles.input}
          value={productType}
          onChangeText={setProductType}
        />

        {/* Input partida */}
        <TextInput
          placeholder="Local de Partida"
          placeholderTextColor={"#4B65C2"}
          style={styles.input}
          value={begin}
          onChangeText={setBegin}
        />

        {/* Input destino */}
        <TextInput
          placeholder="Local de Destino"
          placeholderTextColor={"#4B65C2"}
          style={styles.input}
          value={destiny}
          onChangeText={setDestiny}
        />

        {/* Botão entrar */}
        <View style={styles.loginButtonContainer}>
          <RectButton style={styles.loginButton} onPress={() => {}}>
            <Text style={styles.loginButtonText}>Buscar</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default LandingFarmer;
