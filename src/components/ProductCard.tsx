import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface ProductCardProps {
  price: number;
}
const ProductCard: FC<ProductCardProps> = ({price}) => {
  return (
    <View>
      <Text>{price}</Text>
    </View>
  );
};

export default ProductCard;
