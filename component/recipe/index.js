import React from 'react';
import {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import styles from './style';

const Recipe = ({item, onClickItem}) => {
  const [liked, setLiked] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => onClickItem(item.id)}
      style={styles.recipe}>
      <Pressable onPress={() => setLiked(!liked)} style={styles.favouriteView}>
        <Image
          style={styles.favourite}
          source={
            liked
              ? require('../../assets/images/liked.png')
              : require('../../assets/images/favourite.png')
          }
        />
      </Pressable>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.rdw}>
          <Text style={styles.rdwText}>
            {'R '}
            {item.R}
          </Text>
          <Text style={styles.rdwText}>
            {'D '}
            {item.D}
          </Text>
          <Text style={styles.rdwText}>
            {'W '}
            {item.W}
          </Text>
        </View>
      </View>
      <View style={styles.image}>
        <Image source={item.image} />
      </View>
    </TouchableOpacity>
  );
};

export default Recipe;
