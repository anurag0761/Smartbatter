/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import ClockTicks from './ClockTicks';
import Hand from './Hand';
import Icon from 'react-native-vector-icons/Ionicons';

const Watcher = ({resume, scale, size, duration, setCompleted, isStopped}) => {
  // const duration = 60;
  // const size = 360;
  const radius = size / 2;
  return (
    <CountdownCircleTimer
      style={styles.timer}
      size={size}
      isPlaying={!isStopped}
      duration={duration}
      trailColor={isStopped ? '#EB5757' : '#28ABD8'}
      strokeLinecap="none"
      strokeWidth={size / 7.5}
      colors={[['#DFDDDD', 1]]}>
      {p => {
        if (duration === p.elapsedTime) {
          setCompleted(true);
        }
        return (
          <>
            {isStopped && (
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  zIndex: 5,
                  top: size / 2 - size / 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#DFDDDD',
                  height: size / 2.5,
                  width: size / 2.5,
                  borderRadius: size / 5,
                }}
                onPress={() => {
                  resume();
                }}>
                <Icon
                  name="play"
                  style={{color: '#28ABD8', fontSize: size * 0.16}}
                />
                <Text
                  style={{
                    color: '#424242',
                    fontWeight: '700',
                    fontSize: size * 0.06,
                  }}>
                  Resume
                </Text>
              </TouchableOpacity>
            )}
            <Svg height={size} width={size} style={styles.svg}>
              <View
                style={[
                  {
                    height: size / 2.5,
                    width: size / 2.5,
                    backgroundColor: '#DFDDDD',
                    top: size / 2 - size / 5,
                    left: size / 2 - size / 5,
                    borderRadius: size / 5,
                  },
                  styles.innerCircle,
                ]}>
                {p.elapsedTime !== duration && (
                  <>
                    <Text
                      style={{
                        color: '#424242',
                        fontWeight: '700',
                        fontSize: size * 0.06,
                      }}>
                      Time Left
                    </Text>
                    <Text
                      style={{
                        color: '#424242',
                        fontWeight: '700',
                        fontSize: size * 0.12,
                      }}>
                      02:13
                    </Text>
                  </>
                )}
                {p.elapsedTime === duration && (
                  <Image
                    style={{
                      height: size / 3.2,
                      width: size / 3.2,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/images/lady-good.png')}
                  />
                )}
              </View>
              <G>
                <Circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius - size / 7.5}
                  fill="#DFDDDD"
                />
                <ClockTicks
                  size={size}
                  scale={scale}
                  divisons={120}
                  radius={radius - size / 7.5 - size / 30}
                  center={size / 2}
                />
                <Hand
                  angle={(360 * p.elapsedTime) / duration}
                  center={size / 2}
                  radius={size / 2}
                  stroke="rgba(235, 87, 87, 1)"
                  strokeWidth={size * 0.016}
                />
              </G>
            </Svg>
          </>
        );
      }}
    </CountdownCircleTimer>
  );
};

export default Watcher;

const styles = StyleSheet.create({
  timer: {justifyContent: 'center', alignItems: 'center'},
  svg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    ...Platform.select({
      android: {elevation: 8},
      ios: {
        shadowOffset: {width: 1, height: 2},
        shadowColor: 'grey',
        shadowOpacity: 1,
      },
    }),
  },
});

////// IMPORTANT

// <View
//       style={{
//         height: 320,
//         width: 320,
//         borderRadius: 160,
//         backgroundColor: 'rgba(255, 255, 255, 1)',
//       }}></View>

/* <Circle
              stroke="rgba(40, 171, 216, 1)"
              cx={center}
              cy={center}
              r={center - 24}
              fill="none"
              strokeWidth={36}
              strokeDashoffset={circumference * 0.8}
              strokeDasharray={`${circumference - 10} ${circumference - 10}`}
            /> */
