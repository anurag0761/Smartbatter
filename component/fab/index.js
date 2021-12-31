import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';

const FAB = ({sty}) => {
  return (
    <View style={sty ? {...styles.fab, ...sty} : styles.fab}>
      <Icon name="plus" color="#FFFFFF" style={styles.icon} />
    </View>
  );
};

export default FAB;
