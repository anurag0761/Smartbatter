import React from 'react';
import {View, Text, Image} from 'react-native';
import Layout from '../../component/layout';
import Button from '../../component/button';
import Header from './Header';
import styles from './style';

const AddDevice = ({navigation}) => {
  return (
    <Layout noScrollView color="white">
      <Header />
      <View style={styles.container}>
        <View style={styles.width40}>
          <Text style={styles.text}>SmartBatter</Text>
          <Text style={styles.text}>SmartCook</Text>
          <Text style={styles.text}>Others</Text>
        </View>
        <View style={styles.vr} />
        <View style={styles.width70}>
          <Image
            style={styles.image}
            source={require('../../assets/images/machine.png')}
          />
          <Text style={styles.smartText}>Smartbatter 2.0</Text>
          <Button
            onPress={() => navigation.navigate('SmartBatterDrawer')}
            text="Add Device"
            width="64%"
            height={42}
            style={styles.button}
          />
        </View>
      </View>
    </Layout>
  );
};

export default AddDevice;
