import React from 'react';
import {useState} from 'react';
import {useWindowDimensions, View, Text, Image} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import ResuableButton from '../../component/button';
import Layout from '../../component/layout';
import Button from '../../component/button';
import Header from './Header';
import styles from './style';
import Watcher from '../../component/watcher';

const GrindingProcess = ({navigation}) => {
  const [cancelConfirmation, setCancelConfirmation] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [stopped, setStopped] = useState(false);
  const {width} = useWindowDimensions();
  const setCompleted = param => {
    setIsCompleted(param);
  };
  const resume = () => {
    setStopped(false);
  };
  return (
    <Layout noScrollView={true}>
      <Header />
      <View style={styles.container}>
        <Watcher
          resume={resume}
          isStopped={stopped}
          setCompleted={setCompleted}
          scale={5}
          // scale={12}
          size={width / 1.4}
          duration={10}
        />
        {stopped && (
          <>
            <View style={styles.sitBackContainer}>
              <Text style={styles.waitAndBack}>Time Left</Text>
              <Text
                style={[
                  styles.time,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {color: '#EB5757'},
                ]}>
                02:13
              </Text>
            </View>
            <View style={styles.resumeView}>
              <Text style={styles.waitAndBack}>Stopped by you</Text>
              <ResuableButton
                onPress={() => {
                  resume();
                }}
                text="Resume"
                width="44%"
                height={42}
              />
              <Text
                onPress={() => setCancelConfirmation(true)}
                style={styles.cancel}>
                Cancel process
              </Text>
            </View>
          </>
        )}
        {!isCompleted && !stopped && (
          <>
            <View style={styles.sitBackContainer}>
              <Text style={styles.waitAndBack}>Sit back and wait for</Text>
              <Text
                style={[
                  styles.time,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {color: '#28ABD8'},
                ]}>
                02:13
              </Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.waitAndBack}>Will be ready at 7:00 pm</Text>
              <Text onPress={() => setIsVisible(true)} style={styles.stop}>
                Stop ?
              </Text>
            </View>
          </>
        )}
        {isCompleted && !stopped && (
          <>
            <Text style={styles.yay}>Yay!</Text>
            <Text style={styles.batterReady}>Batter is ready</Text>
            <View style={styles.btnView}>
              <Button
                width="100%"
                height={54}
                onPress={() => navigation.goBack()}
                text="DONE"
              />
            </View>
          </>
        )}
      </View>
      <Portal>
        <Modal
          style={styles.modal}
          visible={visible}
          contentContainerStyle={styles.modalContent}>
          <Image
            style={styles.lady}
            source={require('../../assets/images/lady-warn.png')}
          />
          <Text style={styles.text3}>Are you sure want to stop ?</Text>
          <View style={styles.btnContainer}>
            <ResuableButton
              onPress={() => {
                setStopped(true);
                setIsVisible(false);
              }}
              colors={['#C4C4C4', '#868282']}
              text="YES"
              width="48%"
              style={styles.reusableButton}
              textStyle={styles.text2}
            />
            <ResuableButton
              onPress={() => setIsVisible(false)}
              text="NO"
              width="48%"
              style={styles.reusableButton}
              textStyle={styles.text2}
            />
          </View>
        </Modal>
        <Modal
          style={styles.modal}
          visible={cancelConfirmation}
          contentContainerStyle={styles.modalContent}>
          <Image
            style={styles.lady}
            source={require('../../assets/images/lady-warn.png')}
          />
          <Text style={styles.text}>Confirm Cancel Process ?</Text>
          <View style={styles.btnContainer}>
            <ResuableButton
              onPress={() => {
                setCancelConfirmation(false);
              }}
              colors={['#C4C4C4', '#868282']}
              text="Cancel"
              width="48%"
              style={styles.reusableButton}
              textStyle={styles.text2}
            />
            <ResuableButton
              onPress={() => setCancelConfirmation(false)}
              text="Confirm"
              width="48%"
              style={styles.reusableButton}
              textStyle={styles.text2}
            />
          </View>
        </Modal>
      </Portal>
    </Layout>
  );
};

export default GrindingProcess;
