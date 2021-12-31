import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';

const Header = ({openDrawer, moveToNotifications}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer}>
        <Image
          style={styles.menu}
          source={require('../../assets/images/menu.png')}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Smart Batter</Text>
      <TouchableOpacity onPress={moveToNotifications}>
        <Image
          style={styles.notification}
          source={require('../../assets/images/notification.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
