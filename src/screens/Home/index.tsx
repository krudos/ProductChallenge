import React from 'react';

import {Text, View} from 'react-native';
import {useGetCategories} from '../../api';

const HomeScreen = () => {
  const {categories, isLoading, error} = useGetCategories(1);

  console.log('categories', categories);
  console.log('isLoading', isLoading);
  console.log('error', error);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
