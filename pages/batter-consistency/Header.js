import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Icon color="#F2F2F2" size={28} name="arrow-back" />
      <Text style={styles.title}>Idly</Text>
      <Icon color="#828282" size={28} name="close" />
    </View>
  );
};

export default Header;
