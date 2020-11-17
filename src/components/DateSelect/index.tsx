import React, { SetStateAction } from "react";

import { Text } from "react-native";
import DatePicker from "react-native-datepicker";

import { styles } from "./styles";

interface DateSelect {
  placeholder: string;
  minDate: string;
  maxDate: string;
  variable: string;
  setVariable: React.Dispatch<SetStateAction<string>>;
}

const DateSelect: React.FC<DateSelect> = ({
  placeholder,
  minDate,
  maxDate,
  variable,
  setVariable,
}) => {
  /**
   * var: variable that will change it's value
   * setVar: the function that change the value
   */
  return (
    <DatePicker
      style={styles.datePicker}
      placeholder={variable != "" ? variable : placeholder}
      mode="date"
      format="DD/MM/YYYY"
      minDate={minDate}
      maxDate={maxDate}
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
      onDateChange={(date) => setVariable(date.toString())}
    />
  );
};

export default DateSelect;
