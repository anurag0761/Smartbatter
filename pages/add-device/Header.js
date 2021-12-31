import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Icon color="#4F4F4F" style={styles.icon} size={28} name="arrow-back" />
      <Image
        source={require('../../assets/images/logo_infinity.png')}
        style={styles.logo}
      />
      <View style={styles.right}>
        <Icon color="#828282" size={24} name="md-search-sharp" />
        <MaterialIcon color="#828282" size={24} name="qrcode-scan" />
      </View>
    </View>
  );
};

export default Header;
