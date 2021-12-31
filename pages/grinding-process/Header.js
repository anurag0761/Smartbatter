import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const Header = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <Icon onPress={goBack} color="#FFFFFF" size={28} name="arrow-back" />
      <Text style={styles.title}>Grinding</Text>
      <View />
    </View>
  );
};

export default Header;
