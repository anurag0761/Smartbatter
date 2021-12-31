import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Recipe from '../recipe';
import styles from './style';

const CategoryRecipes = ({category, onClickItem}) => {
  return (
    <View key={category.id} style={styles.category}>
      <Text style={styles.categoryTitle}>{category.category}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContent}
        data={category.recipes}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({index, item}) => (
          <Recipe key={item.id} onClickItem={onClickItem} item={item} />
        )}
        horizontal={true}
      />
    </View>
  );
};

export default CategoryRecipes;
