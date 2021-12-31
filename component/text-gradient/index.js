import React from 'react';
import {Text} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const GradientText = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={props.colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={props.locations}>
        <Text {...props} style={[props.style, styles.zeroOpacity]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
