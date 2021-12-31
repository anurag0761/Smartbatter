import React from 'react';
import {Text, View} from 'react-native';
import {useState} from 'react';
import Layout from '../../component/layout';
import styles from './style';
import {recipes} from './data';
import Header from './Header';
import HorizontalScroll from './HorizontalScroll';
import SmartRecipes from '../../component/smart-recipes';
import FAB from '../../component/fab';
import GrindingProcessContainer from '../../component/grinding-process-container';

const SmartBatter = ({navigation}) => {
  const openDrawer = () => navigation.openDrawer();
  const moveToNotifications = () => navigation.navigate('Notifications');
  const moveToViewProcess = () => navigation.navigate('GrindingProcess');

  const [processRunning] = useState(true);
  return (
    <Layout noScrollView={true}>
      <Header
        openDrawer={openDrawer}
        moveToNotifications={moveToNotifications}
      />
      <HorizontalScroll />

      <View style={styles.smartRecipes}>
        <Text style={styles.smartText}>SMART RECIPES</Text>
        <SmartRecipes
          onClickItem={id => navigation.navigate('InstantScheduling', {id})}
          onEndReached={() => navigation.navigate('SmartRecipes')}
          recipes={recipes}
        />
        <FAB sty={{bottom: processRunning ? 32 + 96 - 16 : 32}} />
        {processRunning && (
          <View style={styles.bottomGrindingProcess}>
            <GrindingProcessContainer
              moveToViewProcess={moveToViewProcess}
              height={96}
            />
          </View>
        )}
      </View>
    </Layout>
  );
};

// import GestureRecognizer from 'react-native-swipe-gestures';

// const config = {
//   velocityThreshold: 0.3,
//   directionalOffsetThreshold: 80,
// };
/* <GestureRecognizer
        onSwipeUp={() => navigation.navigate('SmartRecipes')}
        config={config}
        style={{
          flex: 1,
        }}> */

/* </GestureRecognizer> */

export default SmartBatter;
