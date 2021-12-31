import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import styles from './style';

const Index = ({children, noScrollView, color = '#2e2d39'}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        animated={true}
        backgroundColor={color}
        barStyle="dark-content"
        showHideTransition="none"
        hidden={false}
      />
      {!noScrollView && (
        <ScrollView contentContainerStyle={styles.container}>
          {children}
        </ScrollView>
      )}
      {noScrollView && children}
    </SafeAreaView>
  );
};

export default Index;
