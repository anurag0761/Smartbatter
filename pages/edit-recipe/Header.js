import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({goBack}) => {
  return (
    <View style={styles.header}>
      <Icon onPress={goBack} color="#F2F2F2" size={28} name="arrow-back" />
      <Text style={styles.title}>Idly</Text>
      <Icon onPress={goBack} color="#828282" size={28} name="close" />
    </View>
  );
};

export default Header;
