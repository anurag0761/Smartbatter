import * as React from 'react';
import Onboard from './pages/onboard';
import Auth from './pages/account/auth';
import Register from './pages/account/register';
import Login from './pages/account/login';
import Splash from './pages/splash';
import DeviceOffline from './pages/device/offline';
import DeviceReady from './pages/device/ready';
import DeviceFound from './pages/device/found';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AddDevice from './pages/add-device';
import SmartBatterDrawer from './pages/drawer';
import {Platform} from 'react-native';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...Platform.select({
          android: {
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          },
        }),
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DeviceOffline" component={DeviceOffline} />
      <Stack.Screen name="DeviceReady" component={DeviceReady} />
      <Stack.Screen name="DeviceFound" component={DeviceFound} />
      <Stack.Screen name="AddDevice" component={AddDevice} />
      <Stack.Screen
        name="SmartBatterDrawer"
        component={SmartBatterDrawer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
