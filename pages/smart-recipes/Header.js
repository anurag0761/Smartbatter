import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Icon
        onPress={() => navigation.goBack()}
        color="#4F4F4F"
        size={28}
        name="arrow-back"
      />
      <Text style={styles.smartText}>SMART RECIPES</Text>
      <View />
    </View>
  );
};

export default Header;
