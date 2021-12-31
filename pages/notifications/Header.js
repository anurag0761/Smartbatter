import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

const Header = ({selectionMode, setSelectionMode}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Icon
        onPress={() => navigation.goBack()}
        color="#FFFFFF"
        size={28}
        name="arrow-back"
      />
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.right}>
        {/* <Text style={styles.readAll}>Read all</Text>
        <Text style={styles.readAll}>Delete all</Text> */}
        {selectionMode && (
          <>
            <Icon
              onPress={() => setSelectionMode(false)}
              color="#FFFFFF"
              size={28}
              name="checkmark-done-sharp"
            />
            <MaterialIcon
              onPress={() => setSelectionMode(false)}
              color="#FFFFFF"
              size={28}
              name="delete"
            />
          </>
        )}
      </View>
    </View>
  );
};

export default Header;
