import React from 'react';
import {FlatList} from 'react-native';
import CategoryRecipes from '../category-recipes';
import styles from './style';

const SmartRecipes = ({onClickItem, recipes, onEndReached = () => {}}) => {
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.recipesScrollView}
        contentContainerStyle={styles.recipesScrollViewContent}
        data={recipes}
        onEndReachedThreshold={0.2}
        onEndReached={() => onEndReached()}
        renderItem={({item: i}) => (
          <CategoryRecipes onClickItem={onClickItem} key={i.id} category={i} />
        )}
      />
    </>
  );
};

export default SmartRecipes;
