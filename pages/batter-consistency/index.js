/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Layout from '../../component/layout';
import Button from './Button';
import Header from './Header';
import styles from './style';
import TimeBox from '../edit-recipe/TimeBox';
import Icon from 'react-native-vector-icons/Ionicons';

// Grainy Medium Smooth

const BatterConsistency = () => {
  const [level, setLevel] = React.useState('Grainy');
  const [activeId, setActiveId] = React.useState(2);

  return (
    <Layout noScrollView={true}>
      <Header />
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
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
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
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
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
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
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
            <TimeBox isCustom={true} id={-1} />
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
      <Button onPress={() => {}} height={56} text="Continue" />
    </Layout>
  );
};

export default BatterConsistency;
