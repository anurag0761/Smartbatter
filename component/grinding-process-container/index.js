import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Watcher from '../watcher';

const GrindingProcessContainer = ({height = 96, moveToViewProcess}) => {
  return (
    <LinearGradient
      locations={[0, 1.0]}
      colors={['#EF6314', '#EE3297']}
      style={[styles.container, {height}]}>
      <View>
        <Text style={styles.text}>Grinding</Text>
        <Text style={styles.text}>On process</Text>
      </View>
      <TouchableOpacity onPress={moveToViewProcess} style={styles.view}>
        <Text style={styles.text}>View</Text>
      </TouchableOpacity>
      <Watcher
        resume={() => {}}
        isStopped={false}
        setCompleted={() => {}}
        scale={12}
        size={height - 18}
        duration={10}
      />
    </LinearGradient>
  );
};

export default GrindingProcessContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '4%',
  },
  text: {color: '#FFFFFF', fontWeight: '500', fontSize: 14},
  view: {
    height: 26,
    width: 64,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
