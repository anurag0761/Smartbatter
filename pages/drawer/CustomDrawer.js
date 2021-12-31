import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const CustomDrawer = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Hello, User</Text>
      </View>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo_infinity.png')}
        />
      </View>
      <View style={styles.marginTop}>
        <TouchableOpacity onPress={() => navigation.navigate('SmartBatter')}>
          <Text style={styles.item}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Schedules')}>
          <Text style={styles.item}>SCHEDULES</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  marginTop: {marginTop: '6%'},
  container: {flex: 1, backgroundColor: '#2e2d39'},
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: '2%',
  },
  item: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
    marginVertical: '4%',
    paddingHorizontal: '12%',
  },
  header: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.28,
  },
  image: {width: '84%', alignSelf: 'center', marginVertical: '8%'},
});
