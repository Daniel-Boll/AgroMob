import React from "react";

import { AssetsSelector } from "expo-images-picker";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

const GallerySelector: React.FC = () => {
  const navigation = useNavigation();

  const onDone = (data: any) => {
    console.log(data);
  };

  return (
    <View style={{ marginTop: 50 }}>
      <AssetsSelector
        options={{
          assetsType: ["photo", "video"],
          noAssetsText: "No media found.",
          maxSelections: 5,
          margin: 3,
          portraitCols: 4,
          landscapeCols: 5,
          widgetWidth: 100,
          widgetBgColor: "#00FF0080",
          videoIcon: {
            Component: Ionicons,
            iconName: "ios-videocam",
            color: "white",
            size: 20,
          },
          selectedIcon: {
            Component: Ionicons,
            iconName: "ios-checkmark-circle-outline",
            color: "#FFF",
            bg: "#4B65C250",
            size: 8,
          },
          defaultTopNavigator: {
            continueText: "Continue",
            goBackText: "Back",
            buttonBgColor: "#00FF00",
            buttonTextColor: "#FFF",
            midTextColor: "black",
            backFunction: () => navigation.goBack,
            doneFunction: (data: any) => onDone(data),
          },
        }}
      />
    </View>
  );
};

export default GallerySelector;
