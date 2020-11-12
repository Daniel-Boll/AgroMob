import React, { useState } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import RadioButton from "../../../../components/RadioButton";
import DropDownPicker from "react-native-dropdown-picker";

const RegisterProducer: React.FC = () => {
  const [cpf, setCPF] = useState("");
  const [aniversario, setAniversario] = useState("");

  // const [funcao, setFuncao] = useState([
  //     { id: 1, value: true, name: "Masculino", selected: false },
  //     { id: 2, value: false, name: "Feminino", selected: false },
  //   ]);

  //   const onRadioBtnClick = (item: any) => {
  //     let updatedState = funcao.map((funcaoItem) =>
  //       funcaoItem.id === item.id
  //         ? { ...funcaoItem, selected: true }
  //         : { ...funcaoItem, selected: false }
  //     );
  //     setFuncao(updatedState);
  //   };

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

          <TextInput
            placeholder="Data de nascimento"
            placeholderTextColor={"#4B65C2"}
            style={styles.input}
            value={aniversario}
            onChangeText={setAniversario}
            keyboardType="numeric"
            maxLength={8}
          />

          <DropDownPicker
            style={styles.drop}
            items={[
              { label: "Masculino", value: "Masc" },
              { label: "Feminino", value: "fem" },
            ]}
            placeholder="Gênero"
            labelStyle={{
              fontSize: 14,
              color: "#4B65C2",
              fontFamily: "Poppins_600SemiBold",
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
            onChangeItem={(item) => console.log(item.label, item.value)}
          />

          {/* Botão para configurar o local de carregamento */}
          <View style={styles.input}>
            <RectButton>
              <Text style={styles.buttonText}>Local de carregamento</Text>
            </RectButton>
          </View>
          {/* Botão para enviar a foto de perfil */}
          <View style={styles.input}>
            <RectButton>
              <Text style={styles.buttonText}>Foto de perfil</Text>
            </RectButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterProducer;
