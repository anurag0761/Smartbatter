import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import styles from './style';
import TestTube from './TestTube';

const StepOne = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.RDWView}>
        <Text style={styles.RDWText}>{`R ${40}%`}</Text>
        <Text style={styles.RDWText}>{`D ${20}%`}</Text>
        <Text style={styles.RDWText}>{`W ${60}%`}</Text>
      </View>
      <View style={styles.headView}>
        <Text style={styles.headText}>Edit Recipe</Text>
      </View>
      <View style={styles.middle}>
        <TestTube
          heading="Rice"
          DH={height * 0.28}
          DW={54}
          source={require('../../assets/images/rice_test_tube.png')}
        />
        <TestTube
          heading="Dal"
          DH={height * 0.28}
          DW={54}
          source={require('../../assets/images/dal_test_tube.png')}
        />
        <TestTube
          heading="Water"
          isWater
          DH={height * 0.28}
          DW={54}
          source={require('../../assets/images/water_test_tube.png')}
        />
        {/* <TestTube
          heading="Add On"
          DH={height * 0.28}
          DW={54}
          source={require('../../assets/images/dal_test_tube.png')}
        /> */}
      </View>
      <View style={styles.bottom}>
        <Text style={styles.percentageRemainingToAdd}>0%</Text>
        <Text style={styles.remainingToAdd}>remaining to add</Text>
        <Text style={styles.machineFull}>Machine is full !</Text>
      </View>
    </View>
  );
};

export default StepOne;
