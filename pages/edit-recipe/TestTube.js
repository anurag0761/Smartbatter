/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useState} from 'react';
import {Image, PanResponder, Text, View} from 'react-native';

const TestTube = ({DH, DW, source, isWater, heading}) => {
  const [height, setHeight] = useState(DH / 2);
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {},
      onPanResponderMove: (evt, gestureState) => {
        const {dy} = gestureState;
        const fifteenPercent = DH * 0.15;
        if (!(height + dy < 0 || height + dy > DH - fifteenPercent)) {
          setHeight(p => {
            return height + dy;
          });
        }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {},
      onPanResponderTerminate: (evt, gestureState) => {},
      onShouldBlockNativeResponder: (evt, gestureState) => {
        return true;
      },
    }),
  ).current;
  return (
    <View
      style={{
        height: DH,
        width: DW,
        borderRadius: 16,
        justifyContent: 'flex-end',
      }}>
      <Text
        style={{textAlign: 'center', fontWeight: '400', paddingVertical: 8}}>
        {heading}
      </Text>
      <View
        style={[
          {
            position: 'absolute',
            top: 0,
            height: height,
            width: DW,
            backgroundColor: 'rgba(242, 242, 242, 1)',
            zIndex: 2,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
            borderRadius: height >= DH - 4 ? 16 : 0,
          },
        ]}
      />
      <Text
        style={{
          opacity: height >= DH - 4 ? 0 : 1,
          position: 'absolute',
          zIndex: 2,
          color: '#24232B',
          fontSize: 18,
          fontWeight: '500',
          alignSelf: 'center',
          bottom: DH / 2.2 - height / 2,
        }}>
        {100 - parseInt((height / DH) * 100, 10)}%
      </Text>
      {isWater && (
        <Image
          style={{
            borderRadius: 16,
            height: DH - 8,
            position: 'absolute',
            left: 0,
            tintColor: 'rgba(216, 216, 216, 1)',
            zIndex: 3,
            top: 4,
            bottom: 4,
          }}
          source={require('../../assets/images/water_scale.png')}
        />
      )}
      {/* {isWater && (
        <Image
          style={{
            borderRadius: 16,
            width: DW,
            resizeMode: 'contain',
            position: 'absolute',
            zIndex: 2,
            top: height - 12,
            opacity: height < 12 || height > DH - 12 ? 0 : 1,
          }}
          source={require('../../assets/images/water_wave.png')}
        />
      )} */}
      <Image
        {...panResponder.panHandlers}
        style={{
          borderRadius: 16,
          height: DH,
          width: DW,
        }}
        source={source}
      />
    </View>
  );
};

export default TestTube;
