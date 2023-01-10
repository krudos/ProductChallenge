import React, {useState} from 'react';

import {FlatList, Text, View} from 'react-native';
import {useGetCategories} from '../../api';
import CategoryButton from '../../components/CategoryButton';
import CoverImage from '../../components/CoverImage';
import ProductCard from '../../components/ProductCard';

const HomeScreen = () => {
  const {categories, isLoading, error} = useGetCategories(1);

  const subCategoriesWithAll =
    categories && categories.subCategories
      ? [
          {
            id: 'all',
            name: 'All',
            productIds: categories.subCategories
              .map(subCategory => subCategory.productIds)
              .flat(),
          },
          ...categories.subCategories,
        ]
      : [];

  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    'all',
  );

  console.log('categories', JSON.stringify(categories));
  console.log('isLoading', isLoading);
  console.log('error', error);

  return (
    <View style={{flex: 1, marginRight: 12, marginLeft: 12}}>
      {categories && (
        <>
          <CoverImage
            name={categories.name}
            image={
              'https://via.placeholder.com/640x480.png/004466?text=animals+omnis'
            }
          />

          <FlatList
            horizontal
            data={subCategoriesWithAll}
            renderItem={({item}) => (
              <CategoryButton
                title={item.name}
                id={item.id}
                selected={item.id === selectedSubCategory}
                onPress={() => setSelectedSubCategory(item.id)}
              />
            )}
          />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
