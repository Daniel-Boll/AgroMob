import React from "react";

import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import TopTabNavigator from "../../components/TopTabNavigator";

const LandingTransporter: React.FC = () => {
  return (
    <TopTabNavigator
      screens={[
        { name: "Transporte", component: Transport },
        { name: "Agenda", component: Schedule },
      ]}
    />
  );
};

const Transport = () => {
  return (
    <View style={styles.container}>
      {/* TODO: Filter */}
      {/* Nota: Se há uma página com mais detalhes
          porque ter os botões de aceitar ou recusar
          antes de vê-los ou contactar o agricultor? */}
      <Text style={styles.headerText}>Transportes Disponíveis</Text>
      <ScrollView style={styles.transporterList}>
        <TransporterCard />
        <TransporterCard />
        <TransporterCard />
        <TransporterCard />
        <TransporterCard />
        <TransporterCard />
        <TransporterCard />
      </ScrollView>
    </View>
  );
};

const Schedule = () => {
  return (
    <View>
      <Text>1</Text>
      <Text>2</Text>
    </View>
  );
};

const TransporterCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
          }}
        ></Image>

        <View style={styles.middleCard}>
          <Text style={styles.name}>Nome</Text>
          <Text style={styles.text}>Distância</Text>
          <Text style={styles.text}>Tipo de grão</Text>
          <Text style={styles.text}>Data</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.confirmButton} activeOpacity={0.5}>
            <Feather name="check" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.denyButton} activeOpacity={0.5}>
            <Feather name="x" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LandingTransporter;
