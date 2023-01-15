import React, {FC} from 'react';
import {Product} from '../api/types';
import {getImage} from '../mocks/config';
import {
  Brand,
  Container,
  GreyContainer,
  ImageView,
  Name,
  Price,
} from './ProductCard.styled';

interface ProductCardProps {
  product: Product;
}
const ProductCard: FC<ProductCardProps> = ({product}) => {
  return (
    <Container>
      <GreyContainer>
        <ImageView source={getImage(product.id)} />
      </GreyContainer>
      <Brand>{product.brand.name}</Brand>
      <Name>{product.name}</Name>
      <Price>{product.price} €</Price>
    </Container>
  );
};

export default ProductCard;
