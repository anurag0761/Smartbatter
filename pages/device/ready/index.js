import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Appbar, Avatar, IconButton} from 'react-native-paper';

import styles from './style';

import Button from '../../../component/button';
import DeviceOnlineImage from '../../../assets/images/deviceOnline.png';
import Layout from '../../../component/layout';
const Index = ({navigation}) => {
  return (
    <Layout>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Action
          icon="arrow-back"
          color="#fff"
          style={styles.backAction}
          onPress={() => {
            navigation.navigate('DeviceOffline');
          }}
        />
      </Appbar.Header>

      <View style={styles.mainImageContainer}>
        <Avatar.Image
          size={200}
          style={styles.mainImage}
          source={DeviceOnlineImage}
        />
      </View>

      <ScrollView contentContainerStyle={styles.bottomContainer}>
        <View style={styles.successContainer}>
          <IconButton icon="check" color="#62DB96" size={40} />
          <Text style={styles.titleText}>Smartbatter Paired Successfully</Text>
        </View>
        <Button
          large={true}
          text="Next"
          onPress={() => navigation.navigate('AddDevice')}
        />
      </ScrollView>
    </Layout>
  );
};

export default Index;
