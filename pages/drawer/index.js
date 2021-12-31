import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SmartBatter from '../smartbatter';
import {Platform} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import SmartRecipesScreen from '../smart-recipes';
import InstantScheduling from '../instant-scheduling';
import GrindingProcess from '../grinding-process';
import MySchedules from '../my-schedules';
import Notifications from '../notifications';
import EditRecipe from '../edit-recipe';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const SmartBatterDrawer = () => {
  return (
    <Drawer.Navigator
      {...Platform.select({
        android: {
          mode: 'modal',
        },
      })}
      screenOptions={{
        headerShown: false,
        ...Platform.select({
          android: {
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          },
        }),
      }}
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="SmartBatterHome" component={SmartBatterHome} />
      <Drawer.Screen name="Schedules" component={MySchedules} />
    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();

const SmartBatterHome = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...Platform.select({
          android: {
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          },
        }),
      }}>
      <Stack.Screen name="SmartBatter" component={SmartBatter} />
      <Stack.Screen name="SmartRecipes" component={SmartRecipesScreen} />
      <Stack.Screen name="InstantScheduling" component={InstantScheduling} />
      <Stack.Screen name="EditRecipe" component={EditRecipe} />
      <Stack.Screen name="GrindingProcess" component={GrindingProcess} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Schedules" component={MySchedules} />
    </Stack.Navigator>
  );
};

export default SmartBatterDrawer;
