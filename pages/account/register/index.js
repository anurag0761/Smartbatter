/* eslint-disable no-shadow */
import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import {Avatar, List} from 'react-native-paper';
import styles from './style';
import Layout from '../../../component/layout';
import Button from '../../../component/button';
import Input from '../../../component/form/input';
import LogoImage from '../../../assets/images/logo.png';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';

const Index = ({navigation}) => {
  const refRBSheet = React.useRef();
  const [image, setImage] = React.useState(null);
  const [name, setName] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImage(image?.path);
        closePicker();
      })
      .catch(error => {
        Alert.alert('error', error.message);
      });
  };
  const openImageCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        })
          .then(image => {
            setImage(image?.path);
            closePicker();
          })
          .catch(error => {
            Alert.alert('error', error.message);
          });
      } else {
        Alert.alert('error', 'Camera permission denied');
      }
    } catch (error) {
      Alert.alert('error', error.message);
    }
  };

  const openPicker = () => {
    if (refRBSheet && refRBSheet.current) {
      refRBSheet.current.open();
    }
  };

  const closePicker = () => {
    if (refRBSheet && refRBSheet.current) {
      refRBSheet.current.close();
    }
  };

  return (
    <Layout>
      <View style={styles.logoImageContainer}>
        <Image style={styles.logoImage} source={LogoImage} />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.formContainer}>
          <View style={styles.avatarContainer}>
            <TouchableOpacity onPress={() => openPicker()}>
              {!image && <Avatar.Icon size={70} color="#fff" icon="person" />}
              {image && <Avatar.Image size={70} source={{uri: image}} />}
            </TouchableOpacity>
          </View>

          <Input label="FULL NAME" onChangeText={setName} value={name} />
          <Input label="EMAIL ID" onChangeText={setEmail} value={email} />

          <Input
            label="PASSWORD"
            password
            onChangeText={setPassword}
            value={password}
          />

          <Input label="PHONE NUMBER" onChangeText={setMobile} value={mobile} />

          <View style={styles.btnContainer}>
            <Button
              large={true}
              text="Sign Up"
              onPress={() => navigation.navigate('DeviceOffline')}
            />
          </View>

          <View style={styles.textContainer}>
            <Text
              style={styles.textAccount}
              onPress={() => navigation.navigate('Login')}>
              ALREADY HAVE AN ACCOUNT ?{'  '}
              <Text style={styles.darkText}>Log In</Text>
            </Text>
          </View>
        </View>
      </View>

      <RBSheet
        ref={refRBSheet}
        height={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopWidth: 2,
            borderTopColor: '#ccc',
          },
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#ccc',
          },
        }}>
        <View>
          <ScrollView>
            <List.Section>
              <List.Subheader>Select Image</List.Subheader>
              <List.Item
                title="Gallery"
                left={props => <List.Icon {...props} icon="folder" />}
                onPress={() => openImagePicker()}
              />
              <List.Item
                title="Camera"
                left={props => <List.Icon {...props} icon="camera" />}
                onPress={() => openImageCamera()}
              />
              <List.Item
                title="Cancel"
                left={props => <List.Icon {...props} icon="close" />}
                onPress={() => closePicker()}
              />
            </List.Section>
          </ScrollView>
        </View>
      </RBSheet>
    </Layout>
  );
};

export default Index;
