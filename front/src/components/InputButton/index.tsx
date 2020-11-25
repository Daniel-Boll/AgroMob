import { useLinkProps } from "@react-navigation/native";
import React, { SetStateAction } from "react";
import { TextInput } from "react-native-gesture-handler";

import { styles } from "../InputButton/styles";

interface InputProps {
  text?: string;
  autoComplete?: any;
  keyboard?: any;
  capitalize?: any;
  secureText?: boolean;
  maxLength?: number;
  value: string | number;
  onChange: React.Dispatch<SetStateAction<string>>;
}

const InputButton: React.FC<InputProps> = ({
  text,
  autoComplete,
  keyboard,
  capitalize,
  secureText,
  maxLength,
}) => {
  return (
    <TextInput
      placeholder={text}
      keyboardType={keyboard ?? "default"}
      autoCompleteType={autoComplete}
      autoCapitalize={capitalize ?? "sentences"}
      secureTextEntry={secureText}
      style={styles.input}
      maxLength={maxLength}
      placeholderTextColor="#4B65C2"
    />
  );
};

export default InputButton;
