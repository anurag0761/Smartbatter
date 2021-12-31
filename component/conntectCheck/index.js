import React from 'react';
import {List} from 'react-native-paper';

import styles from './style';

const Index = () => {
  return (
    <List.Item
      style={styles.container}
      titleStyle={styles.titleStyle}
      title="Connected"
      left={() => (
        <List.Icon style={styles.icon} color="#41D47F" icon="check" />
      )}
    />
  );
};

export default Index;
