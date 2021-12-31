import React from 'react';
import {Modal, Portal} from 'react-native-paper';
import {Image, ImageBackground, Text, useWindowDimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Layout from '../../component/layout';
import ResuableButton from '../../component/button';
import Button from './Button';
import Header from './Header';
import styles from './style';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import {StackActions, useNavigation} from '@react-navigation/native';

const EditRecipe = ({}) => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const {dangerouslyGetState} = useNavigation();
  const {index} = dangerouslyGetState();
  const [visible, setVisible] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [completed, setCompleted] = React.useState(false);

  const goBack = () => {
    if (step === 1) {
      navigation.goBack();
    } else {
      setStep(1);
    }
  };

  return (
    <Layout noScrollView={true}>
      <Header goBack={goBack} />
      <ImageBackground
        resizeMode="stretch"
        style={styles.bgImage}
        source={require('../../assets/images/idli-large.png')}>
        <LinearGradient
          locations={[0, 1.0]}
          colors={['rgba(0, 0, 0, 0)', '#2C2C2C']}
          style={styles.linearGradient}
        />
      </ImageBackground>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      <Portal>
        <Modal
          style={styles.modal}
          visible={visible}
          contentContainerStyle={styles.modalContent}>
          <Image
            style={styles.lady}
            source={require('../../assets/images/lady-confused.png')}
          />
          <Text style={styles.text1}>Quantity Insufficient</Text>
          <Text style={styles.text2}>
            Reduce this 2kg dal from your machine
          </Text>
          <ResuableButton
            onPress={() => setVisible(false)}
            text="OK"
            width="72%"
          />
        </Modal>
        <Modal
          style={styles.modal}
          visible={completed}
          contentContainerStyle={styles.modalContent}>
          <Image
            style={styles.lady}
            source={require('../../assets/images/lady-happy.png')}
          />
          <Text style={styles.text1}>Recipe Scheduled</Text>
          <Text style={styles.text2}>
            Your Recipe is Scheduled Successfully
          </Text>
          <ResuableButton
            onPress={() => {
              setCompleted(false);
              const popAction = StackActions.pop(index + 1);
              navigation.dispatch(popAction);
              navigation.navigate('Schedules');
            }}
            text="OK"
            width="72%"
          />
        </Modal>
      </Portal>
      <Button
        onPress={() => {
          if (step === 1) {
            setStep(2);
          }
          if (step === 2) {
            setCompleted(true);
          }
        }}
        height={height * 0.072}
        text={step === 1 ? 'Next' : 'Continue'}
      />
    </Layout>
  );
};

export default EditRecipe;
