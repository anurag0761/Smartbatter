import React from 'react';
import {Image, PermissionsAndroid, Platform, View} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import styles from './style';

import Layout from '../../component/layout';
import LogoImage from '../../assets/images/logo.png';

import WifiManager from 'react-native-wifi-reborn';

const Index = ({navigation}) => {
  const [progress, setProgress] = React.useState(0.0);

  React.useEffect(() => {
    if (progress < 1) {
      let timer = setInterval(() => {
        setProgress(progress + 0.2);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      navigation.navigate('Onboard');
    }
  }, [navigation, progress]);

  const getAndroidPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location permission is required for WiFi connections',
        message:
          'This app needs location permission as this is required  ' +
          'to scan for wifi networks.',
        buttonNegative: 'DENY',
        buttonPositive: 'ALLOW',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // You can now use react-native-wifi-reborn
      console.log('You can now use react-native-wifi-reborn');
      const enabled = await WifiManager.isEnabled();
      if (!enabled) {
        WifiManager.setEnabled(true);
      }
    } else {
      // Permission denied
      console.log('Permission denied');
    }
  };

  React.useEffect(() => {
    if (Platform.OS === 'android') {
      getAndroidPermission();
    }
  }, []);

  return (
    <Layout>
      <View style={styles.mainImageContainer}>
        <Image style={styles.mainImage} source={LogoImage} />
      </View>

      <View style={styles.bottomContainer}>
        <ProgressBar style={styles.progressBar} progress={progress} />
      </View>
    </Layout>
  );
};

export default Index;
