import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Navigation from './navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';

// import {enableScreens} from 'react-native-screens';
// enableScreens(true);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#28ABD8',
    accent: '#2e2d39',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider
        settings={{
          icon: props => <MaterialIcons {...props} />,
        }}
        theme={theme}>
        <Navigation />
      </PaperProvider>
    </NavigationContainer>
  );
}

// "@react-native-community/masked-view": "^0.1.11",
//     "@react-navigation/drawer": "^5.12.5",
//     "@react-navigation/material-top-tabs": "^5.3.15",
//     "@react-navigation/native": "^5.9.4",
//     "@react-navigation/stack": "^5.14.5",
// "react-native-gesture-handler": "^1.10.3",
// "react-native-reanimated": "^2.1.0",
// "react-native-safe-area-context": "^3.2.0",
//     "react-native-screens": "^3.2.0",

// "@react-native-community/masked-view": "^0.1.10",
// "@react-navigation/drawer": "^5.11.4",
//     "@react-navigation/native": "^5.8.10",
//     "@react-navigation/stack": "^5.12.8",
// "react-native-reanimated": "^1.13.2",
//     "react-native-safe-area-context": "^3.1.9",
//     "react-native-screens": "^2.15.0",
// "react-native-gesture-handler": "^1.9.0",
