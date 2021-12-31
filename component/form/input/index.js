import React from 'react';
import {TextInput} from 'react-native-paper';
import styles from './style';
const Index = ({label, password, onChangeText, value}) => {
  return (
    <TextInput
      style={styles.textBox}
      label={label}
      value={value}
      secureTextEntry={password}
      onChangeText={text => onChangeText(text)}
    />
  );
};

export default Index;
