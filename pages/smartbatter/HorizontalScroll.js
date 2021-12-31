import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

const HorizontalScroll = () => {
  return (
    <View style={styles.horizontalScroll}>
      <View>
        <Image
          style={styles.horizontalItem}
          source={require('../../assets/images/rice.png')}
        />
        <View style={styles.priceView}>
          <Text style={styles.price}>10</Text>
          <Text style={styles.unit}>Kg</Text>
        </View>
      </View>
      <View>
        <Image
          style={styles.horizontalItem}
          source={require('../../assets/images/dal.png')}
        />
        <View style={styles.priceView}>
          <Text style={styles.price}>5</Text>
          <Text style={styles.unit}>Kg</Text>
        </View>
      </View>
      {/* <View>
        <Image
          style={styles.horizontalItem}
          source={require('../../assets/images/flat-rice.png')}
        />
        <View style={styles.priceView}>
          <Text style={styles.price}>5</Text>
          <Text style={styles.unit}>Kg</Text>
        </View>
      </View> */}
      <View>
        <Image
          style={styles.horizontalItem}
          source={require('../../assets/images/water.png')}
        />
        <View style={styles.priceView}>
          <Text style={styles.price}>1.5</Text>
          <Text style={styles.unit}>L</Text>
        </View>
      </View>
    </View>
  );
};

export default HorizontalScroll;
