import React from 'react';
import {View} from 'react-native';
import Layout from '../../component/layout';
import SmartRecipes from '../../component/smart-recipes';
import {recipes} from '../smartbatter/data';
import Header from './Header';
import styles from './style';

const SmartRecipesScreen = ({navigation}) => {
  return (
    <Layout noScrollView={true}>
      <View style={styles.container}>
        <Header />
        <SmartRecipes
          onClickItem={id => navigation.navigate('InstantScheduling', {id})}
          recipes={recipes}
        />
      </View>
    </Layout>
  );
};

export default SmartRecipesScreen;
