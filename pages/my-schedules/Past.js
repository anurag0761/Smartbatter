import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {List} from 'react-native-paper';

const Past = () => {
  return (
    <ScrollView style={styles.scrollview}>
      {[1, 2, 3].map(i => (
        <List.Item
          key={i}
          title="Yesterday"
          titleStyle={styles.titleStyle}
          description="Madurai Idly  07:30pm 300g"
          descriptionStyle={styles.descriptionStyle}
          style={styles.item}
        />
      ))}
    </ScrollView>
  );
};

export default Past;

const styles = StyleSheet.create({
  scrollview: {flex: 1, backgroundColor: '#2E2D39'},
  titleStyle: {color: '#28ABD8'},
  descriptionStyle: {color: '#FFFFFF'},
  item: {
    borderBottomColor: '#464646',
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
});
