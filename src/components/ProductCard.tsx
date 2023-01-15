import React, {FC} from 'react';
import {Text, View, Image} from 'react-native';
import {Product} from '../api/types';
import {getImage} from '../mocks/config';
import {Brand, GreyContainer, Name, Price} from './ProductCard.styled';

interface ProductCardProps {
  product: Product;
}
const ProductCard: FC<ProductCardProps> = ({product}) => {
  return (
    <View style={{   width: '45%', marginBottom: 12}}>
      <GreyContainer>
        <Image
          source={getImage(product.id)}
          style={{width: 100, height: 180}}
        />
      </GreyContainer>
      <Brand>{product.brand.name}</Brand>
      <Name>{product.name}</Name>
      <Price>{product.price} €</Price>
    </View>
  );
};

export default ProductCard;
