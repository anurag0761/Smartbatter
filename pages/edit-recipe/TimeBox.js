import React from 'react';
import {useState} from 'react';
import {Image, Text, TouchableOpacity, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../batter-consistency/style';
import DateTimePicker from '@react-native-community/datetimepicker';
import {getTimeAMPMFormat} from '../../component/utils/getTimeAMPMFormat';

const TimeBox = ({
  time = '',
  note = '',
  id,
  isSelected,
  isCustom,
  setActiveId = () => {},
}) => {
  const {height, width} = useWindowDimensions();
  const [show, setShow] = useState(false);
  const [selectedTime, setSelectedTime] = useState(undefined);
  return (
    <>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedTime ? selectedTime : new Date()}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            setShow(false);
            setSelectedTime(
              selectedDate ? getTimeAMPMFormat(selectedDate) : undefined,
            );
          }}
        />
      )}
      <TouchableOpacity
        onPress={() => setActiveId(id)}
        style={[
          styles.timeBoxContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            width: isSelected ? width * 0.12 : width * 0.14,
            height: isSelected ? height * 0.1 : height * 0.082,
            backgroundColor: isSelected ? '#19ADBC' : '#EBF3F8',
          },
        ]}>
        {selectedTime && (
          <>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: isSelected ? 'white' : '#424242',
                fontWeight: '500',
                paddingTop: isSelected ? 6 : 0,
              }}>
              {selectedTime.split(' ')[0]}
            </Text>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: isSelected ? 'white' : '#424242',
                fontSize: 12,
                fontWeight: '500',
              }}>
              {'hours'}
            </Text>
            {isSelected && (
              <Icon name="checkmark-outline" style={styles.checkmark} />
            )}
          </>
        )}
        {!isCustom && !selectedTime && (
          <>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: isSelected ? 'white' : '#424242',
                fontWeight: '500',
                paddingTop: isSelected ? 6 : 0,
              }}>
              {time}
            </Text>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: isSelected ? 'white' : '#424242',
                fontSize: 12,
                fontWeight: '500',
              }}>
              {note}
            </Text>
            {isSelected && (
              <Icon name="checkmark-outline" style={styles.checkmark} />
            )}
          </>
        )}
        {isCustom && !selectedTime && (
          <TouchableOpacity onPress={() => setShow(true)}>
            <Image
              style={styles.custom}
              source={require('../../assets/images/custom.png')}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </>
  );
};

export default TimeBox;
