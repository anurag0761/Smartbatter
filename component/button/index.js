import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-paper';
import styles, {styles2} from './style';
const Index = ({
  text,
  onPress,
  width = '100%',
  height = 50,
  colors = ['#28ABD8', '#19ADBC'],
  style = {},
  textStyle = {},
}) => {
  // return (
  //   <Button
  //     dark={true}
  //     uppercase={false}
  //     style={styles2.btnStyle}
  //     contentStyle={styles2.contentStyle}
  //     mode="contained"
  //     onPress={onPress}>
  //     {text}
  //   </Button>
  // );
  if (onPress) {
    return (
      <TouchableOpacity
        hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
        style={[{width, height}]}
        onPress={onPress}>
        <LinearGradient
          colors={colors}
          style={[styles.btnStyle, {width: '100%', height}, style]}>
          <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <LinearGradient
        colors={colors}
        style={[styles.btnStyle, {width, height}, style]}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </LinearGradient>
    );
  }
};

export default Index;

{
  /* <Button
  dark={true}
  uppercase={false}
  style={styles.btnStyle}
  contentStyle={styles.contentStyle}
  mode="contained"
  onPress={onPress}>
  {text}
</Button> */
}
