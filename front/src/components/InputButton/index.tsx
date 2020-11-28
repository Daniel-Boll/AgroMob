import { useLinkProps } from "@react-navigation/native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { styles } from "../InputButton/styles";

interface InputProps {
  text?: string;
  autoComplete?: any;
  keyboard?: any;
  capitalize?: any;
  secureText?: boolean;
  maxLength?: number;
  onChange?: any;
  value?: any;
}

const InputButton: React.FC<InputProps> = ({
  text,
  autoComplete,
  keyboard,
  capitalize,
  secureText,
  maxLength,
  onChange,
  value,
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
      onChangeText={onChange}
      value={value}
    />
  );
};

export default InputButton;
