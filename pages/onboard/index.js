import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

import styles from './style';
import Layout from '../../component/layout';
import Button from '../../component/button';
import GradientText from '../../component/text-gradient';
import SliderImage1 from '../../assets/images/sliderImage1.png';
import SliderImage2 from '../../assets/images/sliderImage2.png';

import AppIntroSlider from '../../component/app-intro-slider';
import {Appbar} from 'react-native-paper';

const slides = [
  {
    key: 1,
    title: 'Schedule Batter From Phone',
    text: 'Now you can schedule batter preperation from anywhere like from Office and while Commuting ',
    image: SliderImage1,
    backgroundColor: '#2e2d39',
  },
  {
    key: 2,
    title: 'Smart Batter’s Companion',
    text: 'SmartBatter app will work with the machine to give you real time monitoring, advanced recipes and much more!',
    image: SliderImage2,
    backgroundColor: '#2e2d39',
  },
];

const Index = ({navigation}) => {
  const _renderItem = ({item, index}) => {
    return (
      <Layout>
        {index === 0 && (
          <Appbar.Header style={styles.appBar}>
            <GradientText
              onPress={() => navigation.navigate('Auth')}
              colors={['#28ABD8', '#19ADBC']}
              locations={[0, 1]}
              style={styles.headerText}>
              SKIP
            </GradientText>
          </Appbar.Header>
        )}
        <ImageBackground source={item.image} style={styles.mainImageContainer}>
          <View style={styles.bottomContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>{item.title}</Text>
              <Text style={styles.textDetail}>{item.text}</Text>
            </View>
          </View>
        </ImageBackground>
      </Layout>
    );
  };

  const _onDone = () => {
    navigation.navigate('Auth');
  };

  const renderNextButton = () => {
    return (
      <View style={styles.btnContainer}>
        <Button height={50} large={true} text="Next" />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.btnContainer}>
        <Button height={50} large={true} text="Got It" />
      </View>
    );
  };

  return (
    <AppIntroSlider
      dotGradientColors={['#65646D', '#65646D']}
      activeDotGradientColors={['#38F3BB', '#20E0BD', '#4BC9DA', '#84BCFF']}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      bottomButton={true}
      renderNextButton={props => renderNextButton(props)}
      renderDoneButton={renderDoneButton}
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
    />
  );
};

export default Index;
