import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './style';

import Button from '../../../component/button';
import Layout from '../../../component/layout';
import DeviceImage from '../../../assets/images/device.png';
import LogoImage from '../../../assets/images/logo.png';

const Index = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.logoImageContainer}>
        <Image style={styles.logoImage} source={LogoImage} />
      </View>

      <View style={styles.mainImageContainer}>
        <View style={styles.mainImageCardContainer}>
          <Image style={styles.mainImage} source={DeviceImage} />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.container}>
          <Button
            large={true}
            text="Sign Up"
            onPress={() => navigation.navigate('Register')}
          />

          <View style={styles.textContainer}>
            <Text style={styles.textAccount}>
              if you have an account{' '}
              <Text
                style={styles.loginText}
                onPress={() => navigation.navigate('Login')}>
                {' '}
                LOGIN
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Index;
