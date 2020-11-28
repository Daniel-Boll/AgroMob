import React, { useEffect, useState } from "react";

import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import TopTabNavigator from "../../components/TopTabNavigator";
import api from "../../services/api";
import { Schedule } from "../../layout/types";
import { BASE_URL } from "../../utils/utils";
import Landing from "../Landing";
import ButtonConfirm from "../../components/ButtonConfirm";

const LandingTransporter: React.FC = (props: any) => {
  const { id } = props.route.params;

  return (
    <TopTabNavigator
      screens={[
        { name: "Perfil\n🧑👩", component: TransporterProfile, params: [id] },
        { name: "Transporte\n🚚", component: Transport, params: [id] },
        { name: "Agenda\n📆", component: ScheduleComponent, params: [id] },
      ]}
    />
  );
};

const TransporterProfile = (props: any) => {
  const [userInfo, setUserInfo] = useState();

  const id = props.route.params[0];

  useEffect(() => {
    api.get("/users").then((response) => {
      let secure = [];
      secure.push(
        response.data["transporter"].map((user: any) => {
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
      <View style={styles.transporterProfileGlobalContainer}>
        <View style={styles.transporterProfileContainer}>
          <Text style={styles.transporterProfileName}>
            {userInfo?.user.name}
          </Text>

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
            style={styles.transporterProfileInfo}
          >{`CPF: ${userInfo?.user.cpf}`}</Text>
          <Text
            style={styles.transporterProfileInfo}
          >{`Gênero: ${userInfo?.user.genre}`}</Text>
          <Text
            style={styles.transporterProfileInfo}
          >{`CNH: ${userInfo?.cnh}`}</Text>
          <Text
            style={styles.transporterProfileInfo}
          >{`Preço por km: R$${userInfo?.price}`}</Text>
          <Text
            style={styles.transporterProfileInfo}
          >{`Veículo: ${userInfo?.vehicle}`}</Text>
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

const Transport = (props: any) => {
  const [schedules, setSchedules] = useState<Schedule[]>();
  const [user, setUser] = useState<any[]>([]);
  const [userInfo, setUserInfo] = useState();

  const id = props.route.params[0];

  useEffect(() => {
    api.get("/schedule").then((response) => {
      setSchedules(response.data);
    });

    api.get("/users").then((response) => {
      let secure = [];
      secure.push(
        response.data["transporter"].map((user: any) => {
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
        {/* TODO: Filter */}
        {/* Nota: Se há uma página com mais detalhes
          porque ter os botões de aceitar ou recusar
          antes de vê-los ou contactar o agricultor? */}
        <Text
          style={styles.headerText}
        >{`Olá ${userInfo?.user.name},\n esse são os transportes disponíveis!`}</Text>
        <ScrollView style={styles.transporterList}>
          {schedules !== undefined ? (
            schedules.map((schedule) => {
              if (schedule.transporter == null) {
                return (
                  <TransporterCard
                    key={schedule.id}
                    producer={schedule.producer}
                    start={schedule.start}
                    unload_location={schedule.unload_location}
                    load_location={schedule.load_location}
                    grain_type={schedule.producer.grain_type}
                    transporter={userInfo}
                  />
                );
              }
            })
          ) : (
            <></>
          )}
        </ScrollView>
      </View>
    );
  }
};

const ScheduleComponent: React.FC = (props: any) => {
  const [userInfo, setUserInfo] = useState();
  const [mySchedules, setMySchedules] = useState();

  const id = props.route.params[0];

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        let secure = [];
        secure.push(
          response.data["transporter"].map((user: any) => {
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
              if (schedule.transporter?.id == id) {
                const {
                  start,
                  end,
                  unload_location,
                  load_location,
                  producer,
                  id,
                } = schedule;

                return {
                  start,
                  end,
                  unload_location,
                  load_location,
                  producer,
                  id,
                };
              }
            })
          );
          setMySchedules(secure[0].filter((user: any) => user != undefined));
        });
      });
  }, [id]);
  if (mySchedules == undefined) {
    return <Landing></Landing>;
  } else {
    return (
      <View style={styles.transporterHistoryContainer}>
        <ScrollView>
          <Text
            style={styles.scheduleHistoryTitle}
          >{`Essa é sua agenda 🗓!`}</Text>
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
                  <Text style={styles.scheduleInfoTitle}>Produtor: </Text>

                  <Text style={styles.scheduleInfoContentName}>
                    {schedule?.producer?.user.name}
                  </Text>
                </View>

                <View style={styles.horizontalRule} />

                <View style={styles.scheduleInfo}>
                  <Text style={styles.scheduleInfoTitle}>Start: </Text>
                  <Text style={styles.scheduleInfoContent}>
                    {schedule.start}
                  </Text>
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

                <View style={styles.registerButtonContainer}>
                  <RectButton style={styles.registerButton} onPress={() => {}}>
                    <Text style={styles.registerButtonText}>{"Finalizar"}</Text>
                  </RectButton>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
};

const TransporterCard = (props: any) => {
  const {
    start,
    grain_type,
    unload_location,
    load_location,
    producer,
    transporter,
  } = props;

  const handleConfirm = () => {
    const scheduleInformation = {
      producer: producer,
      transporter_id: transporter.id,
      start,
      unload_location,
      load_location,
      end: null,
    };

    api
      .put("/schedule", scheduleInformation)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
          source={{
            uri:
              `http://${BASE_URL}:3333/uploads/${producer.user.profile_picture}` ??
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
          }}
        ></Image>

        <View style={styles.middleCard}>
          <Text style={styles.name}>{producer.user.name.split(" ")[0]}</Text>
          <Text style={styles.text}>
            {load_location} - {unload_location}
          </Text>
          <Text style={styles.text}>{grain_type}</Text>
          <Text style={styles.text}>{start}</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.confirmButton}
            activeOpacity={0.5}
            onPress={handleConfirm}
          >
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
