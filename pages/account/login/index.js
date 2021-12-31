import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './style';

import Layout from '../../../component/layout';
import Button from '../../../component/button';
import Input from '../../../component/form/input';
import LogoImage from '../../../assets/images/logo.png';

const Index = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Layout>
      <View style={styles.logoImageContainer}>
        <Image style={styles.logoImage} source={LogoImage} />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.formContainer}>
          <Input label="EMAIL ID" onChangeText={setEmail} value={email} />

          <Input
            label="PASSWORD"
            password
            onChangeText={setPassword}
            value={password}
          />

          <View style={styles.btnContainer}>
            <Button
              large={true}
              text="Sign In"
              onPress={() => navigation.navigate('DeviceOffline')}
            />
          </View>

          <View style={styles.textContainer}>
            <Text
              style={styles.textAccount}
              onPress={() => navigation.navigate('Register')}>
              DON'T HAVE AN ACCOUNT ?{' '}
              <Text style={styles.darkText}> Register</Text>
            </Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Index;
