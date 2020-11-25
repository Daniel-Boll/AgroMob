import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./styles";

interface RadioButtonProps {
  selected: boolean;
  onPress: any;
  children: any;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  onPress,
  selected,
  children,
}) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;
