import React from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Avatar, Card, List, Paragraph} from 'react-native-paper';

import styles from './style';

import {Col, Row, Grid} from 'react-native-paper-grid';
import Layout from '../../../component/layout';
import Button from '../../../component/button';
import ConntectCheck from '../../../component/conntectCheck';
import DeviceOfflineImage from '../../../assets/images/deviceOffline.png';
import DeviceConnectingImage from '../../../assets/images/connecting.png';
import PluckImage from '../../../assets/images/plugged_inactive.jpeg';
import PluckConnectedImage from '../../../assets/images/plugged_active.png';
import WifiImage from '../../../assets/images/wifi_active.png';
import WifiConnectedImage from '../../../assets/images/wifi_inactive.jpeg';
import Input from '../../../component/form/input';
import RBSheet from 'react-native-raw-bottom-sheet';
import WifiManager from 'react-native-wifi-reborn';
const Index = ({navigation}) => {
  const refRBSheet = React.useRef();
  const refRBPSheet = React.useRef();
  const [wifiEnabled, setWifiEnabled] = React.useState(false);
  const [connected, setConnected] = React.useState(false);
  const [connecting, setConnecting] = React.useState(false);
  const [wifiName, setWifiName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [wifiList, setWifiList] = React.useState([]);

  const openWifiList = () => {
    if (refRBSheet && refRBSheet.current) {
      refRBPSheet.current.close();
      refRBSheet.current.open();
    }
  };
  const openWifiPassword = wifi => {
    setWifiName(wifi.SSID);
    if (refRBPSheet && refRBPSheet.current) {
      refRBPSheet.current.open();
    }
  };

  const onSubmitPassword = async () => {
    refRBSheet.current.close();
    refRBPSheet.current.close();
    setConnecting(true);
    await WifiManager.connectToProtectedSSID(wifiName, password, false).then(
      () => {
        Alert.alert('success', 'Wifi connected successfully');
        navigation.navigate('DeviceFound');
      },
      () => {
        Alert.alert('error', 'Wifi connection failed');
        //console.log(reason);
      },
    );

    setConnecting(false);
  };

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
      if (enabled) {
        setWifiEnabled(enabled);
      } else {
        WifiManager.setEnabled(true);
      }
      const list = await WifiManager.loadWifiList();
      console.log('list', list);
      setWifiList(list);
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
        <Avatar.Image
          size={200}
          style={styles.mainImage}
          source={DeviceOfflineImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Paragraph style={styles.titleText}>Smartbatter is offline</Paragraph>
        <Paragraph style={styles.textDetail}>
          SmartBatter will tell you when it was ready by turning display into
          YELLOW color
        </Paragraph>
      </View>

      <Grid style={styles.grid}>
        <Row>
          <Col>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <View style={styles.cardImageContainer}>
                  <Avatar.Image
                    size={40}
                    style={styles.cardImage}
                    source={connected ? PluckConnectedImage : PluckImage}
                  />
                </View>
                <Paragraph style={styles.cardText}>
                  Machine was not plugged into the power source
                </Paragraph>

                {connected && <ConntectCheck />}
              </Card.Content>
              <Card.Actions>
                {!connected && (
                  <View style={styles.button}>
                    <Button
                      width={100}
                      text="Connect"
                      onPress={() => setConnected(true)}
                    />
                  </View>
                )}
              </Card.Actions>
            </Card>
          </Col>
          <Col>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                {!connecting && (
                  <View>
                    <View style={styles.cardImageContainer}>
                      <Avatar.Image
                        size={40}
                        style={styles.cardImage}
                        source={connecting ? WifiConnectedImage : WifiImage}
                      />
                    </View>

                    <Paragraph style={styles.cardText}>
                      {!wifiEnabled && 'Your wifi not available'}
                      {wifiEnabled && 'Your wifi available'}
                    </Paragraph>
                  </View>
                )}
                {connecting && (
                  <View style={styles.connectedContainer}>
                    <Avatar.Image
                      size={150}
                      style={styles.loaderImage}
                      source={DeviceConnectingImage}
                    />
                  </View>
                )}
              </Card.Content>

              <Card.Actions>
                {!connecting && (
                  <View style={styles.button}>
                    <Button
                      width={100}
                      text="Connect"
                      onPress={() => openWifiList()}
                    />
                  </View>
                )}
              </Card.Actions>
            </Card>
          </Col>
        </Row>
      </Grid>

      {/* wifi sheet */}
      <RBSheet
        ref={refRBSheet}
        height={450}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#ccc',
          },
        }}>
        <View>
          <View style={styles.wifiContainer}>
            <View style={styles.wifiTitleBox}>
              <Text style={styles.wifiContainerTitle}>Connect to WIFI</Text>
            </View>
            <Text style={styles.wifiContainerDetail}>
              Select wifi network you would like to connect
            </Text>
          </View>

          <ScrollView>
            <List.Section>
              {wifiList &&
                wifiList.map(wifi => {
                  return (
                    <List.Item
                      key={`wifi${wifi.SSID}`}
                      title={wifi.SSID}
                      left={props => (
                        <List.Icon
                          {...props}
                          // icon={wifi.lock ? 'wifi-lock' : 'wifi'}
                          icon="wifi-lock"
                        />
                      )}
                      onPress={() => openWifiPassword(wifi)}
                    />
                  );
                })}
            </List.Section>
          </ScrollView>
        </View>
      </RBSheet>

      {/* wifi password sheet */}
      <RBSheet
        ref={refRBPSheet}
        height={450}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#ccc',
          },
        }}>
        <View>
          <View style={styles.wifiContainer}>
            <View style={styles.wifiTitleBox}>
              <Text style={styles.wifiContainerTitle}>ENter Password</Text>
            </View>
          </View>
          <View style={styles.wifiFormContainer}>
            <Text style={styles.wifiName}>{wifiName}</Text>

            <Input
              label="ENTER PASSWORD"
              password
              onChangeText={setPassword}
              value={password}
            />

            <Button
              large={true}
              text="Connect"
              onPress={() => onSubmitPassword()}
            />
          </View>
        </View>
      </RBSheet>
    </Layout>
  );
};

export default Index;
