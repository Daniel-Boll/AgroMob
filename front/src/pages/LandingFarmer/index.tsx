import React, { useEffect, useState } from "react";

import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import TopTabNavigator from "../../components/TopTabNavigator";
import {
  RectButton,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";
import { color } from "react-native-reanimated";
import api from "../../services/api";
import Landing from "../Landing";
import { BASE_URL } from "../../utils/utils";
import InputButton from "../../components/InputButton";

const LandingFarmer: React.FC = (props: any) => {
  const { id } = props.route.params;
  return (
    <TopTabNavigator
      screens={[
        { name: "Perfil\n 👨‍🌾", component: FarmerProfile, params: [id] },
        { name: "Cadastrar viagem\n 🚚", component: FarmerForm, params: [id] },
        { name: "Histórico\n 📖", component: FarmerHistory, params: [id] },
      ]}
      // screens={[{ name: "Farmer Form", component: FarmerForm }]}
    />
  );
};

const FarmerProfile: React.FC = (props: any) => {
  const [userInfo, setUserInfo] = useState();

  const id = props.route.params[0];
  // const id = 10;

  useEffect(() => {
    api.get("/users").then((response) => {
      let secure = [];
      secure.push(
        response.data["producer"].map((user: any) => {
          if (user.id == id) {
            return user;
          }
        })
      );
      setUserInfo(secure[0].filter((user: any) => user != undefined)[0]);
    });
  }, [id]);

  if (userInfo == undefined) {
    return <Landing></Landing>;
  } else {
    return (
      <View style={styles.farmerProfileGlobalContainer}>
        <View style={styles.farmerProfileContainer}>
          <Text style={styles.farmerProfileName}>{userInfo?.user.name}</Text>

          <Image
            style={{
              width: 200,
              height: 200,
              borderRadius: 200 / 2,
              marginBottom: 20,
            }}
            source={{
              uri:
                `http://${BASE_URL}:3333/uploads/${userInfo?.user.profile_picture}` ??
                "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
            }}
          ></Image>

          <Text
            style={styles.farmerProfileInfo}
          >{`CPF: ${userInfo?.user.cpf}`}</Text>
          <Text
            style={styles.farmerProfileInfo}
          >{`Gênero: ${userInfo?.user.genre}`}</Text>
          <Text
            style={styles.farmerProfileInfo}
          >{`Tipo de grão: ${userInfo?.grain_type}`}</Text>
        </View>

        <View style={styles.loginButtonContainer}>
          <RectButton style={styles.loginButton} onPress={() => {}}>
            <Text style={styles.loginButtonText}>{`Editar ✍`}</Text>
          </RectButton>
        </View>
      </View>
    );
  }
};

const FarmerHistory: React.FC = (props: any) => {
  const [userInfo, setUserInfo] = useState();
  const [mySchedules, setMySchedules] = useState();

  const id = props.route.params[0];

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        let secure = [];
        secure.push(
          response.data["producer"].map((user: any) => {
            if (user.id == id) {
              return user;
            }
          })
        );
        setUserInfo(secure[0].filter((user: any) => user != undefined)[0]);
      })
      .then(() => {
        api.get("/schedule").then((response) => {
          let secure = [];
          secure.push(
            response.data.map((schedule: any) => {
              if (schedule.producer.id == id) {
                const {
                  start,
                  end,
                  unload_location,
                  load_location,
                  transporter,
                  id,
                } = schedule;

                return {
                  start,
                  end,
                  unload_location,
                  load_location,
                  transporter,
                  id,
                };
              }
            })
          );
          setMySchedules(secure[0].filter((user: any) => user != undefined));
        });
      });
  }, [id]);

  console.log(mySchedules);
  if (mySchedules == undefined) {
    return <Landing></Landing>;
  } else {
    return (
      <View style={styles.farmerHistoryContainer}>
        {mySchedules?.map((schedule: any, index: number) => {
          return (
            <View style={styles.scheduleContainer} key={schedule.id}>
              <View
                style={{
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins_600SemiBold",
                  }}
                >
                  {index + 1}
                </Text>
              </View>

              {/* Linha */}
              <View style={styles.horizontalRule} />

              <View style={styles.scheduleInfo}>
                <Text style={styles.scheduleInfoTitle}>Start: </Text>
                <Text style={styles.scheduleInfoContent}>{schedule.start}</Text>
              </View>

              <View style={styles.scheduleInfo}>
                <Text style={styles.scheduleInfoTitle}>End: </Text>
                {schedule.end == null ? (
                  <Text style={styles.scheduleInfoContentNon}>
                    Não terminado
                  </Text>
                ) : (
                  <Text>{schedule.end}</Text>
                )}
              </View>

              <View style={styles.scheduleInfo}>
                <Text style={styles.scheduleInfoTitle}>Local de Carga: </Text>
                <Text style={styles.scheduleInfoContent}>
                  {schedule.load_location}
                </Text>
              </View>

              <View style={styles.scheduleInfo}>
                <Text style={styles.scheduleInfoTitle}>
                  Local de Descarga:{" "}
                </Text>
                <Text style={styles.scheduleInfoContent}>
                  {schedule.unload_location}
                </Text>
              </View>

              <View style={styles.scheduleInfo}>
                <Text style={styles.scheduleInfoTitle}>Transportador: </Text>

                {schedule.transporter == null ? (
                  <Text style={styles.scheduleInfoContentNon}>Não aceito</Text>
                ) : (
                  <Text style={styles.scheduleInfoContent}>
                    {schedule?.transporter?.user.name}
                  </Text>
                )}
              </View>
            </View>
          );
        })}
      </View>
    );
  }
};

const FarmerForm: React.FC = (props: any) => {
  const [transportDay, setTransportDay] = useState("");
  const [productType, setProductType] = useState("");
  const [begin, setBegin] = useState("");
  const [destiny, setDestiny] = useState("");
  const [userInfo, setUserInfo] = useState();

  const id = props.route.params[0];
  // const id = 10;

  const handlePost = () => {
    console.log(`
      Data de Transporte ${transportDay}
      Tipo do Produto ${productType}
      local de Partida ${begin}
      Local de Destino ${destiny}
    `);

    api
      .post("/schedule", {
        producer_id: id,
        start: transportDay,
        load_location: begin,
        unload_location: destiny,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    api.get("/users").then((response) => {
      let secure = [];
      secure.push(
        response.data["producer"].map((user: any) => {
          if (user.id == id) {
            return user;
          }
        })
      );
      setUserInfo(secure[0].filter((user: any) => user != undefined)[0]);
    });
  }, [id]);

  if (userInfo == undefined) {
    return <Landing></Landing>;
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.formContainer}>
            {/* Info? */}
            <Text style={styles.info}>
              {`Olá, ${userInfo?.user.name} Informe os dados para efetuar o registro 👩‍🌾`}
            </Text>

            {/* Input dia */}
            <View>
              <DatePicker
                style={styles.datePicker}
                placeholder={
                  transportDay != "" ? transportDay : "Data de Transporte"
                }
                mode="date"
                format="DD/MM/YYYY"
                minDate="1-1-1940"
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
                onDateChange={(date) => setTransportDay(date.toString())}
              />
            </View>

            {/* Input tipo do produto */}
            <InputButton
              text="Tipo do Produto"
              value={productType}
              onChange={setProductType}
            />

            {/* Input partida */}
            <InputButton
              text="Local de Partida"
              value={begin}
              onChange={setBegin}
            />

            {/* Input destino */}
            <InputButton
              text="Local de Destino"
              capitalize="words"
              value={destiny}
              onChange={setDestiny}
            />
            {/* Botão entrar */}
            <View style={styles.loginButtonContainer}>
              <RectButton style={styles.loginButton} onPress={handlePost}>
                <Text style={styles.loginButtonText}>Buscar</Text>
              </RectButton>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default LandingFarmer;
