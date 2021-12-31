import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Button = ({text, onPress, width = '100%', height = 50}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#18ACCD', '#26D4CA']}
        style={[styles.btnStyle, {width, height}]}>
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
