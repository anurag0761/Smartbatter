/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TimeBox from '../edit-recipe/TimeBox';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const StepTwo = () => {
  const [level, setLevel] = React.useState('Grainy');
  const [activeId, setActiveId] = React.useState(2);
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.RDWView}>
        <Text style={styles.RDWText}>{`R ${40}%`}</Text>
        <Text style={styles.RDWText}>{`D ${20}%`}</Text>
        <Text style={styles.RDWText}>{`W ${60}%`}</Text>
      </View>
      <View style={styles.headView}>
        <Text style={styles.headText}>Edit Price</Text>
      </View>
      <View style={styles.middle}>
        <Text
          style={{
            fontSize: 20,
            color: 'rgba(51, 51, 51, 1)',
            textAlign: 'center',
            fontWeight: '600',
            marginBottom: 36,
          }}>
          Batter Consistency
        </Text>
        <View style={styles.hr}>
          <TouchableOpacity
            hitSlop={{top: 80, bottom: 80, left: 80, right: 80}}
            onPress={() => setLevel('Grainy')}
            style={[
              styles.thumb,
              {
                backgroundColor:
                  level === 'Grainy'
                    ? 'rgba(40, 171, 216, 1)'
                    : 'rgba(224, 224, 224, 1)',
              },
            ]}>
            {level === 'Grainy' && (
              <Icon name="checkmark-outline" style={styles.checkLevel} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            hitSlop={{top: 80, bottom: 80, left: 80, right: 80}}
            onPress={() => setLevel('Medium')}
            style={[
              styles.thumb,
              {
                backgroundColor:
                  level === 'Medium'
                    ? 'rgba(40, 171, 216, 1)'
                    : 'rgba(224, 224, 224, 1)',
              },
            ]}>
            {level === 'Medium' && (
              <Icon name="checkmark-outline" style={styles.checkLevel} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            hitSlop={{top: 80, bottom: 80, left: 80, right: 80}}
            onPress={() => setLevel('Smooth')}
            style={[
              styles.thumb,
              {
                backgroundColor:
                  level === 'Smooth'
                    ? 'rgba(40, 171, 216, 1)'
                    : 'rgba(224, 224, 224, 1)',
              },
            ]}>
            {level === 'Smooth' && (
              <Icon name="checkmark-outline" style={styles.checkLevel} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.hr2}>
          <Text
            onPress={() => setLevel('Grainy')}
            style={{
              textAlign: 'center',
              color:
                level === 'Grainy'
                  ? 'rgba(40, 171, 216, 1)'
                  : 'rgba(79, 79, 79, 1)',
              fontSize: 12,
            }}>
            {' Grainy'}
          </Text>
          <Text
            onPress={() => setLevel('Medium')}
            style={{
              textAlign: 'center',
              color:
                level === 'Medium'
                  ? 'rgba(40, 171, 216, 1)'
                  : 'rgba(79, 79, 79, 1)',
              fontSize: 12,
            }}>
            {'  Medium'}
          </Text>
          <Text
            onPress={() => setLevel('Smooth')}
            style={{
              textAlign: 'center',
              color:
                level === 'Smooth'
                  ? 'rgba(40, 171, 216, 1)'
                  : 'rgba(79, 79, 79, 1)',
              fontSize: 12,
            }}>
            {' Smooth'}
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text
          style={{
            fontSize: 20,
            color: 'rgba(51, 51, 51, 1)',
            textAlign: 'center',
            fontWeight: '600',
          }}>
          Soaking Time
        </Text>
        <View style={styles.timingsView}>
          <TimeBox
            isDuration
            setActiveId={setActiveId}
            isSelected={activeId === -1}
            isCustom={true}
            id={-1}
          />
          <TimeBox
            time="01:00"
            note="hour"
            setActiveId={setActiveId}
            isSelected={activeId === 1}
            id={1}
          />
          <TimeBox
            time="02:00"
            note="hours"
            setActiveId={setActiveId}
            isSelected={activeId === 2}
            id={2}
          />
          <TimeBox
            time="02:30"
            note="hours"
            setActiveId={setActiveId}
            isSelected={activeId === 3}
            id={3}
          />
          <TimeBox
            time="03:00"
            note="hours"
            setActiveId={setActiveId}
            isSelected={activeId === 4}
            id={4}
          />
        </View>
      </View>
    </View>
  );
};

export default StepTwo;

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    marginTop: '-32%',
  },
  headView: {
    paddingVertical: '6%',
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  headText: {
    color: '#424242',
    lineHeight: 18,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    color: '#28ABD8',
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 36,
  },
  unit: {
    color: '#28ABD8',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 36,
    paddingLeft: 4,
  },
  name: {color: '#BBBBBB', fontSize: 13},
  boxView: {
    width: '46%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#28ABD8',
    paddingVertical: '4%',
  },
  middle: {
    height: '44%',
    justifyContent: 'center',
    paddingVertical: '4%',
    alignItems: 'center',
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
  },
  sliderDimensions: {
    width: '100%',
    height: '100%',
  },
  customThumb: {
    width: 28,
    height: 28,
    margin: 2,
    borderRadius: 28 / 2,
    elevation: 1,
  },
  sliderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
  },
  unitView: {
    width: '16%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unitText: {lineHeight: 16, color: '#424242'},
  unitIcon: {fontSize: 18, color: '#424242'},
  slider: {width: '78%'},
  textBottomView: {marginBottom: '2%'},
  textBottom: {color: '#929292', textAlign: 'center'},
  bottom: {
    height: '40%',
    justifyContent: 'space-between',
    paddingVertical: '6%',
  },
  roundBtnStyle: {
    borderRadius: 20,
    backgroundColor: '#28ABD8',
    width: '100%',
    height: 36,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 2,
    paddingBottom: 2,
  },
  roundButtonText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0.02,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  RDWView: {
    position: 'absolute',
    top: -32,
    flexDirection: 'row',
    width: '48%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  RDWText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  },
  RDWEditIcon: {color: '#28ABD8', fontSize: 24},
  DateAndTimeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
  },
  DateView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingsView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    marginBottom: '4%',
  },
  today: {fontSize: 32, fontWeight: '600'},
  todayForward: {fontSize: 24, color: '#28ABD8', fontWeight: 'bold'},
  swipeToScheduleView: {width: '36%'},
  chevronForward: {fontSize: 24, color: 'white', fontWeight: 'bold'},
  timeBoxContainer: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {color: '#9EF89C', fontSize: 24},
  custom: {height: 36, width: 36, resizeMode: 'contain'},
  hr: {
    width: '80%',
    height: 4,
    backgroundColor: 'rgba(224, 224, 224, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hr2: {
    marginTop: 12,
    width: '84%',
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(224, 224, 224, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkLevel: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 24,
  },
});
