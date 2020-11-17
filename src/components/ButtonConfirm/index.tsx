import React from 'react';
import { RectButton } from "react-native-gesture-handler";

import { Text, View } from 'react-native';

import { styles } from '../ButtonConfirm/styles';
import { useLinkProps } from '@react-navigation/native';

interface ButtonProps {
  text?: string;
}

const ButtonConfirm: React.FC<ButtonProps> = (props) => {
  return (
    <View style={styles.registerButtonContainer}>
      <RectButton style={styles.registerButton}>
        <Text style={styles.registerButtonText}>
          {props.text ? (
            props.text 
          ) : (
            ""
          )}
        </Text>
      </RectButton>
    </View>
  );
};

export default ButtonConfirm;
