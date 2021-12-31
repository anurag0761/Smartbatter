import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';
import {Checkbox} from 'react-native-paper';

const Notification = ({
  item,
  index,
  setSelectionMode,
  selectionMode,
  selected,
  addItem,
  removeItem,
}) => {
  return (
    <Pressable
      onLongPress={() => setSelectionMode(true)}
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F9F9F9'},
        styles.container,
      ]}>
      <View style={styles.member}>
        <Image
          style={styles.memberProfile}
          source={{uri: item.memberProfile}}
        />
        <Text>{item.member}</Text>
        <View style={styles.memberName} />
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <View style={styles.notification}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
        <Image source={item.reactionImage} style={styles.reactionImage} />
        {selectionMode && (
          <Checkbox
            status={selected.includes(item.id) ? 'checked' : 'unchecked'}
            onPress={() => {
              if (selected.includes(item.id)) {
                removeItem(item.id);
              } else {
                addItem(item.id);
              }
            }}
          />
        )}
      </View>
    </Pressable>
  );
};

export default Notification;
