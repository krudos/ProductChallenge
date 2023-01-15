import React, {FC} from 'react';
import {useGetSubCategories} from '../api';
import LoadingView from './LoadingView';
import ProductCard from './ProductCard';
import {FlatView} from './ProductList.styled';

interface ProductListProps {
  selectedSubCategory: string;
  header?: React.ReactNode;
}
export const ProductList: FC<ProductListProps> = ({
  selectedSubCategory,
  header,
}) => {
  const {products, isLoading} = useGetSubCategories(selectedSubCategory);

  if (isLoading) {
    return <LoadingView />;
  }
  return (
    <FlatView
      ListHeaderComponent={header}
      numColumns={2}
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ProductCard product={item} />}
    />
  );
};
