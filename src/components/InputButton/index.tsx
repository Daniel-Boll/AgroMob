import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

import { styles } from "../InputButton/styles";

interface InputProps {
  text?: string;
  autoComplete?: string;
  keyboard?: string;
  capitalize?: string;
  secureText?: boolean;
  maxLength?: number;
}
const InputButton: React.FC<InputProps> = (props) => {
  {
    props.autoComplete ? props.autoComplete : "off";
    props.keyboard ? props.keyboard : "default";
    props.capitalize ? props.capitalize : "sentences";
  }

  return (
    <TextInput
      placeholder={props.text}
      keyboardType={props.keyboard}
      autoCompleteType={props.autoComplete}
      autoCapitalize={props.capitalize}
      secureTextEntry={props.secureText}
      style={styles.input}
      maxLength={props.maxLength}
      placeholderTextColor="#4B65C2"
    />
  );
};

export default InputButton;
