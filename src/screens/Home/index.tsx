import React, {useState} from 'react';
import {useGetCategories} from '../../api';
import CategoryButton from '../../components/CategoryButton';
import CoverImage from '../../components/CoverImage';
import {Container, FlatListView, Root, SafeArea} from './Home.styled';
import {ProductList} from '../../components/ProductList';
import LoadingView from '../../components/LoadingView';

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

  return (
    <SafeArea>
      <Root>
        {isLoading ? (
          <LoadingView />
        ) : (
          <>
            <CoverImage name={categories.name} image={categories.image} />
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
          </>
        )}
        <ProductList selectedSubCategory={selectedSubCategory} header={<></>} />
      </Root>
    </SafeArea>
  );
};

export default HomeScreen;
