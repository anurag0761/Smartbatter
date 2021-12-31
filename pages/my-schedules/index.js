import React from 'react';
import {View} from 'react-native';
import Layout from '../../component/layout';
import Header from './Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Upcoming from './Upcoming';
import Past from './Past';
import GrindingProcessContainer from '../../component/grinding-process-container';
import styles from './style';

const Tab = createMaterialTopTabNavigator();

const MySchedules = ({navigation}) => {
  const moveToViewProcess = () => navigation.navigate('GrindingProcess');
  return (
    <Layout noScrollView={true}>
      <Header />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#28ABD8',
          inactiveTintColor: '#C8C8C8',
          indicatorStyle: {backgroundColor: '#28ABD8'},
          indicatorContainerStyle: {backgroundColor: '#2E2D39'},
          labelStyle: {textTransform: 'none', fontSize: 16, fontWeight: '500'},
        }}>
        <Tab.Screen name="Upcoming" component={Upcoming} />
        <Tab.Screen name="Past" component={Past} />
      </Tab.Navigator>
      <View style={styles.bottomGrindingProcess}>
        <GrindingProcessContainer
          moveToViewProcess={moveToViewProcess}
          height={96}
        />
      </View>
    </Layout>
  );
};

export default MySchedules;
