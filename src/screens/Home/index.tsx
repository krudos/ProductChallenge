import React, {useState} from 'react';

import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {SafeAreaView as SafeAreaView2} from 'react-native-safe-area-context';
import {useGetCategories, useGetSubCategories} from '../../api';
import CategoryButton from '../../components/CategoryButton';
import CoverImage from '../../components/CoverImage';
import ProductCard from '../../components/ProductCard';
import {Container, FlatListView, SafeArea, Scroll} from './Home.styled';

const HomeScreen = () => {
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');

  const {categories, isLoading} = useGetCategories(1);

  const subCategoriesWithAll =
    categories && categories.subCategories
      ? [
          {
            id: 'all',
            name: 'All products',
            productIds: categories.subCategories
              .map(subCategory => subCategory.productIds)
              .flat(),
          },
          ...categories.subCategories,
        ]
      : [];

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeArea>
      <Scroll>
        {categories && (
          <>
            <CoverImage
              name={categories.name}
              image={'https://mysite.com/image/personal-care'}
            />
            <Container>
              <FlatListView
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
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
            </Container>
            <ProductList selectedSubCategory={selectedSubCategory} />
          </>
        )}
      </Scroll>
    </SafeArea>
  );
};

const ProductList = ({selectedSubCategory}) => {
  const {products, isLoading} = useGetSubCategories(selectedSubCategory);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
      numColumns={2}
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ProductCard product={item} />}
    />
  );
};
export default HomeScreen;
